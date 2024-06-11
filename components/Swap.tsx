import { useEffect, useState } from "react";
import {
  useAccount,
  useBalance,
  useChainId,
  useConfig,
  usePublicClient,
  useSwitchChain,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import useAsyncEffect from "use-async-effect";
import { useTokenInfo } from "../hooks/useTokenInfo";
import {
  CoqinuFuji,
  coqnetBlockchainIDHex,
  erc20SourceAddress,
  fujiCChainBlockchainIDHex,
  nativeTokenDestinationAddress,
} from "../utils/constants";
import { formatEther, parseEther, zeroAddress } from "viem";
import { erc20, erc20source, nativeTokenDestination } from "../utils/abi";
import Image from "next/image";
import { BiTransferAlt } from "react-icons/bi";
import { RainbowKitCustomConnectButton } from "./ConnectButton";
import { coqnet, publicCoqnetClient, publicFujiClient } from "../utils/chain";

const showModal = (n: string) =>
  // @ts-expect-error this is standard for daisyUI
  document.getElementById(n)?.showModal();

const AvalancheNetwork = () => (
  <div className="flex items-center space-x-4">
    <Image
      alt="avax"
      src="/avax.png"
      className="rounded-full"
      width={30}
      height={30}
    />
    <span className="text-current">Avalanche</span>
  </div>
);

const CoqNetwork = () => (
  <div className="flex items-center space-x-4">
    <Image
      alt="coqnet"
      src="/coqnet.png"
      className="rounded-full"
      width={30}
      height={30}
    />
    <span className="text-current">Coqnet</span>
  </div>
);

const Swap = () => {
  const [swapAmount, setSwapAmount] = useState<number | null>();
  const { switchChain, chains } = useSwitchChain();
  const chainID = useChainId();
  const [loading, setLoading] = useState(false);
  const [bridging, setBridging] = useState(false);
  const { address } = useAccount();
  const formattedSwapAmount = parseEther(swapAmount?.toString() || "0");
  const { writeContract: writeCoqnet, error } = useWriteContract();
  const {
    allowance: fujiAllowance,
    balanceOf: fujiBalance,
    refetch: refetchFujiToken,
  } = useTokenInfo(
    CoqinuFuji,
    address,
    erc20SourceAddress,
    publicFujiClient.chain.id
  );
  const { data: coqnetBalance, refetch: refetchNative } = useBalance({
    address,
    chainId: coqnet.id,
  });
  const refetch = () => {
    refetchFujiToken();
    refetchNative();
  };
  const handleFujiTransactionSubmitted = async (txHash: string) => {
    if (!txHash || !publicFujiClient) return;
    const transactionReceipt = await publicFujiClient.waitForTransactionReceipt(
      {
        hash: txHash as `0x${string}`,
      }
    );

    if (transactionReceipt.status === "success") {
      refetch();
    }
    setLoading(false);
  };

  const handleCoqnetTransactionSubmitted = async (txHash: string) => {
    if (!txHash || !publicCoqnetClient) return;
    const transactionReceipt =
      await publicCoqnetClient.waitForTransactionReceipt({
        hash: txHash as `0x${string}`,
      });

    if (transactionReceipt.status === "success") {
      refetch();
    }
    setLoading(false);
  };

  const handleFujiSwapTransactionSubmitted = async (txHash: string) => {
    setBridging(true);
    await handleFujiTransactionSubmitted(txHash);
    setBridging(false);
    setSwapAmount(0);
  };

  const handleCoqnetSwapTransactionSubmitted = async (txHash: string) => {
    setBridging(true);
    await handleCoqnetTransactionSubmitted(txHash);
    setBridging(false);
    setSwapAmount(0);
  };

  useEffect(() => {
    console.log(chains);
  }, [chains]);

  useEffect(() => {
    if (error) {
      setLoading(false);
      showModal("error_coq");
      console.error(error);
    }
  }, [error]);

  const toggleDirection = () => {
    swapChain();
  };

  const direction =
    chainID === publicFujiClient.chain.id ? "fujiToCoqnet" : "coqnetToFuji";

  const swapChain = () => {
    // there's only two chains, so we can just toggle between them
    // chains are an array so we have to get the current chain
    // and swap to the one that isn't the current chain
    const currentChain = chains.find((c) => c.id === chainID);
    const newChain = chains.find((c) => c.id !== chainID);
    if (!currentChain || !newChain) return;
    switchChain({ chainId: newChain.id });
  };

  const getCoq = () => {
    if (address) {
      setLoading(true);
      fetch("/api/faucet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address }),
      })
        .then((res) => res.json())
        .then((data) => {
          refetchFujiToken();
          showModal("got_coq");
        })
        .finally(() => setLoading(false));
    }
  };

  const swapCoq = () => {
    if (!address || swapAmount == 0) return;
    setLoading(true);
    if (chainID === 43113) {
      writeCoqnet(
        {
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
            formattedSwapAmount,
          ],
        },
        {
          onSuccess: handleFujiSwapTransactionSubmitted,
        }
      );
    } else {
      writeCoqnet(
        {
          address: nativeTokenDestinationAddress,
          abi: nativeTokenDestination,
          functionName: "send",
          args: [
            [
              fujiCChainBlockchainIDHex,
              erc20SourceAddress,
              address,
              zeroAddress,
              0n,
              0n,
              250000n, // Gas is important to be high enough at the moment, lest it suck up your tokens
              zeroAddress,
            ],
          ],
          value: formattedSwapAmount,
        },
        {
          onSuccess: handleCoqnetSwapTransactionSubmitted,
        }
      );
    }
  };

  const approveCoq = () => {
    if (!address || swapAmount == 0) return;
    if (chainID === 43113) {
      setLoading(true);
      writeCoqnet(
        {
          address: CoqinuFuji,
          abi: erc20,
          functionName: "approve",
          args: [erc20SourceAddress, formattedSwapAmount],
        },
        {
          onSuccess: handleFujiTransactionSubmitted,
        }
      );
    }
  };

  const ActionButton = () => {
    if (fujiBalance <= 1n) {
      return (
        <button
          disabled={loading}
          onClick={getCoq}
          className="btn btn-success btn-lg btn-wide"
        >
          {loading && <span className="loading loading-spinner"></span>}
          Get Some Coq
        </button>
      );
    } else if (fujiAllowance < formattedSwapAmount && chainID === 43113) {
      return (
        <button
          disabled={loading}
          onClick={approveCoq}
          className="btn btn-success btn-lg btn-wide"
        >
          {loading && <span className="loading loading-spinner"></span>}
          Approve Coq
        </button>
      );
    } else {
      return (
        <button
          disabled={loading || !swapAmount}
          onClick={swapCoq}
          className="btn btn-success btn-lg btn-wide"
        >
          {loading && <span className="loading loading-spinner"></span>}
          Bridge Coq
        </button>
      );
    }
  };
  return (
    <div className="card bg-[#FFFFFF90] dark:bg-[#00000080] max-w-4xl w-full p-2 sm:p-6 md:p-8 mx-auto rounded-none lg:rounded-xl text-current space-y-6">
      <div className=" md:flex-row flex items-start justify-between md:items-center flex-col-reverse">
        <div className="flex space-y-2 flex-col">
          <h1 className="text-4xl font-bold">Bridge</h1>
          <p className="dark:text-gray-400 text-gray-800">
            Transfer your tokens from one network to another.
          </p>
        </div>
        <div className="self-end">
          <RainbowKitCustomConnectButton />
        </div>
      </div>

      {/* From Section */}
      <div className="card dark:bg-[#00000080] bg-[#00000010]  p-6 max-w-4xl mx-auto rounded-xl text-current space-y-8">
        <div className="flex justify-between space-x-8 items-center">
          <div className="rounded-lg space-y-4">
            <h4 className="text-xl font-bold">From</h4>
            {direction === "fujiToCoqnet" ? (
              <AvalancheNetwork />
            ) : (
              <CoqNetwork />
            )}
            <div className="flex items-end justify-between space-x-4">
              <input
                placeholder="0.0"
                type="number"
                value={swapAmount || ""}
                onChange={(e) => setSwapAmount(Number(e.target.value))}
                className="input input-bordered dark:bg-[#0a0a0a] dark:border-current border input-ghost flex-1 text-current max-w-full"
              />
            </div>
            {/* Display the user's balance on c chain */}
            <div className="flex items-center justify-between">
              <span className="text-current text-xs">
                {direction === "fujiToCoqnet"
                  ? Number(formatEther(fujiBalance || 0n)).toFixed(2)
                  : Number(formatEther(coqnetBalance?.value || 0n)).toFixed(
                      0
                    )}{" "}
                COQ token available
              </span>
            </div>
          </div>
          <div>
            <div
              className="flex flex-col items-center justify-center space-y-4 hover:cursor-pointer"
              onClick={toggleDirection}
            >
              <div className="w-px h-20 bg-current"></div>
              <span className="p-4 rounded-full dark:bg-[#FFFFFF10] bg-base-100">
                <BiTransferAlt
                  className={`h-8 w-8 text-current border-current ${
                    bridging ? "animate-transfer" : ""
                  }`}
                />
              </span>
              <div className="w-px h-20 bg-current"></div>
            </div>
          </div>
          <div className="rounded-lg space-y-4">
            <h4 className="text-xl font-bold">To</h4>
            {direction === "fujiToCoqnet" ? (
              <CoqNetwork />
            ) : (
              <AvalancheNetwork />
            )}
            <div className="flex items-end justify-between space-x-4 cursor-not-allowed">
              <input
                placeholder="0.0"
                type="number"
                value={swapAmount || ""}
                readOnly
                className="input input-bordered  pointer-events-none dark:bg-[#0a0a0a] dark:border-current border input-ghost flex-1 text-current max-w-full"
              />
            </div>
            {/* Display the user's balance on c chain */}
            <div className="flex items-center justify-between">
              <span className="text-current text-xs">
                {
                  // Display the user's balance on c chain
                  direction === "fujiToCoqnet"
                    ? Number(formatEther(coqnetBalance?.value || 0n)).toFixed(0)
                    : Number(formatEther(fujiBalance)).toFixed(2)
                }{" "}
                COQ token available
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Action Button */}
      <div className="text-right">
        <ActionButton />
      </div>
      <dialog id="got_coq" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Successfully got Coq!</h3>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="bridge_coq" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Successfully Bridged Coq!</h3>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="error_coq" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">There was an error.</h3>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Swap;
