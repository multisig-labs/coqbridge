import { useCallback, useState } from 'react'
import { publicFujiClient as publicClient } from '../utils/wallet'
import { erc20 } from '../utils/abi'
import { CoqinuFuji } from '../utils/constants'
import { useAccount, useWalletClient } from 'wagmi'

const useApproveERC20 = (tokenAddress = CoqinuFuji as `0x${string}`) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null | unknown>(null);
  const [txHash, setTxHash] = useState<string | null>(null);
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();

  const approve =
    async (spenderAddress: `0x${string}`, amountToApprove: bigint) => {
      try {
        setIsLoading(true)
        setError(null)
        setTxHash(null)

        const { request } = await publicClient.simulateContract({
          abi: erc20,
          address: tokenAddress,
          functionName: 'approve',
          args: [spenderAddress, amountToApprove],
          account: address
        })

        const hash = await walletClient?.writeContract(request)
        setTxHash(hash || null)
        if (hash) {
          await publicClient.waitForTransactionReceipt({ hash })
        }
        return hash
      } catch (err) {
        setError(err)
        console.error(error)
      } finally {
        setIsLoading(false)
      }

      return null;
    }

  return { isLoading, error, txHash, approve }
}

export default useApproveERC20;
