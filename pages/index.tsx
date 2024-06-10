import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Swap from "../components/Swap";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>CoqBridge</title>
        <meta name="description" content="CoqBridge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar /> 
      <Swap />
    </main>
  );
};

export default Home;
