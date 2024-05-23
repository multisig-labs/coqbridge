import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CoqBridge</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ConnectButton />
          </li>
        </ul>
      </div>
    </div>
  );
}
