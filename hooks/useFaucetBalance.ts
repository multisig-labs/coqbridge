import { useState } from "react";
import useAsyncEffect from "use-async-effect";


const useFaucetBalance = () => {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  useAsyncEffect(async () => {
    // check /api/balance to see if the user has any Coq
    const res = await fetch(`/api/faucet`);
    const data = await res.json();
    setBalance(data.balance);
    setLoading(false);
  }, []);

  return { balance, loading };
};

export default useFaucetBalance;
