import Image from "next/image";
import { Inter } from "next/font/google";
import Channel from "../Components/pages/Channel/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center  ${inter.className}`}
    >
      <Channel />
    </main>
  );
}
