// pages/api/hello.js
import type { NextApiRequest, NextApiResponse } from "next";
import { parseEther } from "viem";
import { walletFujiClient, faucetAccount } from "../../utils/wallet";
import { CoqinuFuji } from "../../utils/constants";
import { erc20 } from "../../utils/abi";
import { publicFujiClient } from "./_wallet";

type FaucetRequest = {
  address: `0x${string}`;
};

const faucet = async (req: NextApiRequest, res: NextApiResponse) => {
  // get the request body and cast it to FaucetRequest
  const { address } = req.body as FaucetRequest;
  // if the address is not provided, return a 400 error
  if (!address) {
    return res.status(400).json({ error: "Address is required" });
  }

  try {
    const { request } = await publicFujiClient.simulateContract({
      account: faucetAccount,
      address: CoqinuFuji,
      abi: erc20,
      functionName: "transfer",
      args: [address, parseEther((process.env.FAUCET_AMOUNT as string) || "2")],
    });

    const hash = await walletFujiClient.writeContract(request);
    const { status } = await publicFujiClient.waitForTransactionReceipt({
      hash,
    });
    return res.status(200).json({ status });
  } catch (error: unknown) {
    return res.status(500).json({ error });
  }
};

export default faucet;
