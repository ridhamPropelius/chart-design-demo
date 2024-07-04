import Image from "next/image";
import { Inter } from "next/font/google";
import Dashboard from '../Components/pages/Dashboard';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`w-full flex min-h-screen flex-col items-center justify-center  ${inter.className}`}
    >
      <Dashboard />
    </main>
  );
}
