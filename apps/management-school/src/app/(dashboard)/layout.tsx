import Link from "next/link";
import Image from "next/image";
import Menu from "@repo/ui/menu";
import Navbar from "@repo/ui/navbar";
import { role } from "../lib/data";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 p-4">
          <Image src="/logo.png" alt="logo" width={32} height={32}></Image>
          <span className="hidden lg:block font-bold">Schoolama</span>
        </Link>
        <Menu role={role} />
      </div>

      {/* Right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
