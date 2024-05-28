import { Address, erc20Abi, zeroAddress } from "viem";
import { useReadContracts } from "wagmi";

export const useTokenInfo = (
  tokenAddress?: Address,
  ownerAddress?: Address,
  spender?: Address
) => {
  const tokenConfig = {
    abi: erc20Abi,
    address: tokenAddress,
  };
  const { data: tokenData, ...rest } = useReadContracts({
    contracts: [
      {
        ...tokenConfig,
        functionName: "balanceOf",
        args: [ownerAddress || zeroAddress],
      },
      {
        ...tokenConfig,
        functionName: "allowance",
        args: [ownerAddress || zeroAddress, spender || zeroAddress],
      },
      {
        ...tokenConfig,
        functionName: "totalSupply",
      },
      {
        ...tokenConfig,
        functionName: "decimals",
      },
      {
        ...tokenConfig,
        functionName: "symbol",
      },
      {
        ...tokenConfig,
        functionName: "name",
      },
    ],
    allowFailure: false,
    query: {
      enabled:
        Boolean(ownerAddress) && Boolean(tokenAddress) && Boolean(spender),
    },
  });

  if (!tokenData)
    return {
      balanceOf: 0n,
      allowance: 0n,
      totalSupply: 0n,
      decimals: 0n,
      symbol: "",
      name: "",
      ...rest,
    };

  const [balanceOf, allowance, totalSupply, decimals, symbol, name] = tokenData;
  return {
    balanceOf,
    allowance,
    totalSupply,
    decimals,
    symbol,
    name,
    ...rest,
  };
};
