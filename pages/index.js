import Image from "next/image";
import Head from "next/head";
import Nav from "@/components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Eric | Full Stack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Hero />
    </>
  );
}
