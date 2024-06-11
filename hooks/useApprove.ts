import { useCallback, useState } from 'react'
import { erc20 } from '../utils/abi'
import { useAccount, useWalletClient } from 'wagmi'
import { publicFujiClient as publicClient } from '../utils/chain';

const useApproveERC20 = (tokenAddress: `0x{string}`) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null | unknown>(null);
  const [txHash, setTxHash] = useState<string | null>(null);
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();

  const approve = useCallback(
    async (spenderAddress: `0x{string}`, amountToApprove: bigint) => {
      try {
        setIsLoading(true)
        setError(null)
        setTxHash(null)

        const { request } = await publicClient.simulateContract({
          abi: erc20,
          address: tokenAddress,
          functionName: "approve",
          args: [spenderAddress, amountToApprove],
          account: address,
        });

        const hash = await walletClient?.writeContract(request)
        setTxHash(hash || null)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    },
    [walletClient, address, tokenAddress]
  )

  return { isLoading, error, txHash, approve }
}

export default useApproveERC20;
