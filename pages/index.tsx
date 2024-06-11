import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Swap from "../components/Swap";

const Home: NextPage = () => {
  return (
    <main className="grid min-h-screen md:place-items-center px-0 sm:py-32 lg:px-8 ">
      <div className="dark:sm:bg-hero-backdrop-dark sm:bg-hero-backdrop-light dark:bg-[#232323] blur-2xl bg-cover bg-center bg-repeat w-full h-full absolute z-[-1]"></div>
      <Head>
        <title>CoqBridge</title>
        <meta name="description" content="CoqBridge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Swap />
    </main>
  );
};

export default Home;
