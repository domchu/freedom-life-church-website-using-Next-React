import Head from "next/head";
import Navbar from "../Components/Navbar";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>Blog</h1>
    </>
  );
}