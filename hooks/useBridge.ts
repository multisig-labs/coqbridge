import { useCallback, useState } from 'react'
import { publicFujiClient as publicClient } from '../utils/wallet'
import { erc20source } from "../utils/abi";
import { zeroAddress } from 'viem'
import { useAccount, useWalletClient } from 'wagmi'
import {
  CoqinuFuji,
  coqnetBlockchainIDHex,
  erc20SourceAddress,
  nativeTokenDestinationAddress,
} from "../utils/constants";

const useBridge = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null | unknown>(null);
  const [txHash, setTxHash] = useState<string | null>(null);
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();

  const bridge =
    async (amount: bigint) => {
      try {
        if (!address || !walletClient) {
          return;
        }
        setIsLoading(true)
        setError(null)
        setTxHash(null)

        const { request } = await publicClient.simulateContract({
          address: erc20SourceAddress,
          abi: erc20source,
          functionName: "send",
          args: [
            [
              coqnetBlockchainIDHex,
              nativeTokenDestinationAddress,
              address,
              CoqinuFuji,
              0n,
              0n,
              250000n, // Gas is important to be high enough at the moment, lest it suck up your tokens
              zeroAddress,
            ],
            amount,
          ],
        })

        const hash = await walletClient?.writeContract(request)
        setTxHash(hash || null)
        if (hash) {
          await publicClient.waitForTransactionReceipt({ hash })
        }
        return hash
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
        return null
      }
    }

  return { isLoading, error, txHash, bridge }
}

export default useBridge;
