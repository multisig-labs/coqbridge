// pages/api/hello.js
import type { NextApiRequest, NextApiResponse } from 'next';
import { parseEther, formatEther } from 'viem';
import { walletFujiClient, publicFujiClient } from '../../utils/wallet';
import { CoqinuFuji } from '../../utils/constants';
import { erc20 } from '../../utils/abi';
import { privateKeyToAccount } from 'viem/accounts'

export const faucetAccount = privateKeyToAccount(process.env.PK as `0x${string}`);

type FaucetRequest = {
  address: `0x${string}`;
}

const faucet = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // ignore everything else, just return the erc20 balance of the faucet account
    const balance = await publicFujiClient.readContract({
      address: CoqinuFuji,
      abi: erc20,
      functionName: 'balanceOf',
      args: [faucetAccount.address]
    });

    return res.status(200).json({ balance: parseFloat(formatEther(balance as bigint)) });
  }
  // get the request body and cast it to FaucetRequest
  const { address } = req.body as FaucetRequest;
  // if the address is not provided, return a 400 error
  if (!address) {
    return res.status(400).json({ error: 'Address is required' });
  }

  try {
    const { request } = await publicFujiClient.simulateContract({
      account: faucetAccount,
      address: CoqinuFuji,
      abi: erc20,
      functionName: 'transfer',
      args: [address, parseEther(process.env.FAUCET_AMOUNT as string || "2")]
    });

    const hash = await walletFujiClient.writeContract(request);

    return res.status(200).json({ hash });

  } catch (error: unknown) {
    return res.status(500).json({ error });
  }
};

export default faucet;
