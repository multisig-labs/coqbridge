import { useState } from "react";
import { useAccount } from "wagmi";
import useAsyncEffect from "use-async-effect";

const showModal = (n: string) =>
  // @ts-expect-error this is standard for daisyUI
  document.getElementById(n)?.showModal();

const Swap = () => {
  const [coqnetBalance, setCoqnetBalance] = useState(0);
  const [fujiBalance, setFujiBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const { address } = useAccount();

  useAsyncEffect(async () => {
    if (!address) return;
    // check /api/balance to see if the user has any Coq
    const res = await fetch(`/api/balance?address=${address}`);
    const data = await res.json();
    setFujiBalance(data.fuji);
    setCoqnetBalance(data.coqnet);
    setLoading(false);
  }, [address]);

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
          console.log(data);
          setLoading(false);
          showModal("got_coq");
        });
    }
    setLoading(false);
  };

  const swapCoq = async () => {
    
  };

  return (
    <div className="card bg-neutral text-neutral-content p-6 max-w-md mx-auto rounded-xl text-white space-y-8">
      {/* Header */}
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold">Bridge to Coqnet</h1>
      </div>

      {/* From Section */}
      <div className="p-6 rounded-lg space-y-4">
        <div className="flex items-end justify-between space-x-4">
          <input
            placeholder="0.0"
            className="input input input-bordered input-primary flex-1 text-white placeholder-gray-500 border-none outline-none max-w-full"
          />
        </div>
        {/* Display the user's balance on c chain */}
        <div className="flex items-center justify-between">
          <span className="text-gray-400">C Chain Balance</span>
          <span>{fujiBalance.toFixed(0)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Coqnet Balance</span>
          <span>{coqnetBalance.toFixed(0)}</span>
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center">
        <button
          disabled={loading}
          onClick={fujiBalance > 0 ? swapCoq : getCoq}
          className="btn btn-primary btn-lg btn-wide w-full"
        >
          {loading && <span className="loading loading-spinner"></span>}
          {fujiBalance > 0 ? "Swap Coq" : "Get Some Coq"}
        </button>
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
