"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { WrongNetworkDropdown } from "./WrongNetwork";
import { BiExit, BiMenuAltRight, BiWalletAlt } from "react-icons/bi";
import { useAccount, useDisconnect } from "wagmi";
import Image from "next/image";
import { blo } from "blo";
import { getAddress, zeroAddress } from "viem";
import { NetworkOptions } from "./NetworkOptions";
import { useEffect } from "react";

export const RainbowKitCustomConnectButton = () => {
  const { address, chainId } = useAccount();
  const { disconnect } = useDisconnect();
  const checkSumAddress = getAddress(address || zeroAddress);

  const AddressDisplay = () => (
    <>
      <Image
        className="rounded-full"
        src={blo(address as `0x${string}`)}
        width={24}
        height={24}
        alt={`${address} avatar`}
      />
      <span className="ml-2 mr-1">
        {`${checkSumAddress?.slice(0, 6)}...${checkSumAddress?.slice(-4)}`}
      </span>
    </>
  );

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="btn btn-outline"
                    onClick={openConnectModal}
                    type="button"
                  >
                    <BiWalletAlt className="size-4" /> Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return <WrongNetworkDropdown />;
              }
              return (
                <div className="dropdown dropdown-end mr-2">
                  <label
                    tabIndex={0}
                    className="btn btn-outline dropdown-toggle gap-1 w-56"
                  >
                    <AddressDisplay />
                    <BiMenuAltRight className="h-6 w-4 ml-2 sm:ml-0 rotate-270" />
                  </label>

                  <ul
                    tabIndex={0}
                    className="dropdown-content menu z-30 w-56 p-2 mt-1 bg-base-200 rounded-box gap-1"
                  >
                    {/* <NetworkOptions /> */}
                    <li>
                      <button
                        className="menu-item text-error btn-sm !rounded-xl flex gap-3 py-3"
                        type="button"
                        onClick={() => disconnect()}
                      >
                        <BiExit className="h-6 w-4 ml-2 sm:ml-0" />
                        <span>Disconnect</span>
                      </button>
                    </li>
                  </ul>
                </div>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};
