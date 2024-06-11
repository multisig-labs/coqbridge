import { Address, Client, erc20Abi, zeroAddress } from "viem";
import { UseReadContractsParameters, useReadContracts } from "wagmi";

export const useTokenInfo = (
  tokenAddress?: Address,
  ownerAddress?: Address,
  spender?: Address,
  chainId?: number
) => {
  const tokenConfig = {
    chainId,
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
      refetchInterval: 5000,
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
