import Image from "next/image";
import Nav from "@/components/Nav/Nav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
    </>
  );
}
