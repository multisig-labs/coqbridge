import { formatEther } from 'viem';

export const etherToNumber = (ether: bigint) => parseFloat(formatEther(ether));
