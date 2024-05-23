import { useState } from "react";
import { useAccount } from "wagmi";
import useAsyncEffect from "use-async-effect";

export default function GetCoq() {
  const [loading, setLoading] = useState(true);
  const [hasCoq, setHasCoq] = useState(true);
  const { address } = useAccount();

  useAsyncEffect(async () => {
    if (!address) return;
    // check /api/balance to see if the user has any Coq
    const res = await fetch(`/api/balance?address=${address}`);
    const data = await res.json();
    setHasCoq(data.fuji > 0);
  }, [address]);

  const onClick = () => {
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
        });
    }
    setLoading(false);
  };

  return (
    <button onClick={onClick} disabled={!address} className="btn btn-primary">
      {loading && <span className="loading loading-spinner"></span>}
      Get Some Coq
    </button>
  );
}
