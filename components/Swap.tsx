import { useState } from "react";
import { useAccount } from "wagmi";
import useAsyncEffect from "use-async-effect";
import { parseEther } from "viem";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

import useApproveERC20 from "../hooks/useApprove";
import useBridge from "../hooks/useBridge";
import { erc20SourceAddress } from "../utils/constants";

const showModal = (n: string) =>
  // @ts-expect-error this is standard for daisyUI
  document.getElementById(n)?.showModal();

const Swap = () => {
  const [gotCoq, setGotCoq] = useState(false);
  const [coqnetBalance, setCoqnetBalance] = useState(0);
  const [fujiBalance, setFujiBalance] = useState(0);
  const [swapAmount, setSwapAmount] = useState(2);
  const [loading, setLoading] = useState(true);
  const { address } = useAccount();
  const { bridge, isLoading: bridgeLoading, error: bridgeError } = useBridge();
  const {
    approve,
    error: approveError,
  } = useApproveERC20();

  const formattedSwapAmount = parseEther(swapAmount.toString());

  useAsyncEffect(async () => {
    if (!address) return;
    // check /api/balance to see if the user has any Coq
    const res = await fetch(`/api/balance?address=${address}`);
    const data = await res.json();
    setFujiBalance(data.fuji);
    setCoqnetBalance(data.coqnet);
    setLoading(false);
  }, [address, gotCoq]);

  const getCoq = async () => {
    if (address) {
      setLoading(true);
      try {
        const res = await fetch("/api/faucet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ address }),
        });
        const data = await res.json();
        console.log(data);
        setLoading(false);
        showModal("got_coq");
      } catch (error) {
        console.error(error);
        setLoading(false);
        // Handle error here
      }
    }
    setLoading(false);
    setGotCoq(!gotCoq); // dirty hack to get the balance to update
  };

  const swapCoq = async () => {
    setLoading(true);
    try {
      await approve(erc20SourceAddress as `0x${string}`, formattedSwapAmount);
      // if there was an error, show the error dialog
      if (approveError) {
        showModal("error_coq");
        console.error(approveError);
        return;
      } else {
        await bridge(formattedSwapAmount);
        // wait until bridge is not loading
        while (bridgeLoading) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
        // if there was an error, show the error dialog
        if (bridgeError) {
          showModal("error_coq");
          console.error(bridgeError);
          return;
        } else {
          showModal("bridge_coq");
        }
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const ActionButton = () => {
    if (fujiBalance == 0) {
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
    } else {
      return (
        <button
          disabled={loading}
          onClick={swapCoq}
          className="btn btn-success btn-lg btn-wide"
        >
          {loading && <span className="loading loading-spinner"></span>}
          Swap Coq
        </button>
      );
    }
  };

  return (
    <div className="card bg-black p-6 max-w-4xl mx-auto rounded-xl text-white space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Bridge</h1>
          <p className="text-gray-400">
            Transfer your tokens from one network to another.
          </p>
        </div>
        <ConnectButton />
      </div>

      {/* From Section */}
      <div className="card bg-gray-900 p-6 max-w-4xl mx-auto rounded-xl text-white space-y-8">
        <div className="flex justify-between space-x-8 items-center">
          <div className="rounded-lg space-y-4">
            <h4 className="text-xl font-bold">From</h4>
            <div className="flex items-center space-x-4">
              <Image
                alt="avax"
                src="/avax.png"
                className="rounded-full"
                width={30}
                height={30}
              />
              <span className="text-gray-400">Avalanche</span>
            </div>
            <div className="flex items-end justify-between space-x-4">
              <input
                placeholder="0.0"
                type="number"
                onChange={(e) => setSwapAmount(Number(e.target.value))}
                className="input input-bordered input-primary flex-1 text-white bg-gray-500 placeholder-gray-500 border-none outline-none max-w-full"
              />
            </div>
            {/* Display the user's balance on c chain */}
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-xs">
                {fujiBalance.toFixed(0)} COQ token available
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-px h-24 bg-gray-400"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              <div className="w-px h-24 bg-gray-400"></div>
            </div>
          </div>
          <div className="rounded-lg space-y-4">
            <h4 className="text-xl font-bold">To</h4>
            <div className="flex items-center space-x-4">
              <Image
                alt="coqnet"
                src="/coqnet.png"
                className="rounded-full"
                width={30}
                height={30}
              />
              <span className="text-gray-400">Coqnet</span>
            </div>
            <div className="flex items-end justify-between space-x-4">
              <input
                placeholder="0.0"
                type="number"
                value={swapAmount}
                disabled
                className="input input-bordered input-primary flex-1 text-white bg-gray-500 placeholder-gray-500 border-none outline-none max-w-full"
              />
            </div>
            {/* Display the user's balance on c chain */}
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-xs">
                {coqnetBalance.toString()} COQ Native token available
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
