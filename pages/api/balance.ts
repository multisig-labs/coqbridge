import type { NextApiRequest, NextApiResponse } from 'next';
import { CoqinuFuji } from '../../utils/constants';
import { erc20 } from '../../utils/abi';
import { etherToNumber } from '../../utils/conversion';
import { publicFujiClient, publicCoqnetClient } from './_wallet';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // make sure the address is provided via query params
  const { address } = req.query;
  if (!address) {
    return res.status(400).json({ error: 'address query param is required' });
  }

  const [data, coqnetBalance] = await Promise.all([
    publicFujiClient.readContract({
      address: CoqinuFuji,
      abi: erc20,
      functionName: 'balanceOf',
      args: [address as string],
    }),
    publicCoqnetClient.getBalance({
      address: address as `0x${string}`,
    }),
  ]);

  return res.status(200).json({
    fuji: etherToNumber(data as bigint),
    coqnet: etherToNumber(coqnetBalance),
  })

}
