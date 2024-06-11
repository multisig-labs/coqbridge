import { useSwitchChain } from "wagmi";
import { chains } from "../utils/wagmiConfig";
import { BiTransferAlt } from "react-icons/bi";

export const NetworkOptions = () => {
  const { switchChain } = useSwitchChain();

  return (
    <>
      {chains.map((chain) => (
        <li key={chain.id}>
          <button
            className="menu-item btn-sm !rounded-xl flex gap-3 py-3 whitespace-nowrap"
            type="button"
            onClick={() => {
              switchChain?.({ chainId: chain.id });
              if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
              }
            }}
          >
            <BiTransferAlt className="h-6 w-4 ml-2 sm:ml-0" />
            <span>Switch to {chain.name}</span>
          </button>
        </li>
      ))}
    </>
  );
};
