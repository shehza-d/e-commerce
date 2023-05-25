"use client";
import logo from "../../public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
// import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  
  return (
    <nav>
      <div
        className={`bg-main fixed left-0 top-0 z-40 h-full w-full ${
          !open && "hidden"
        }`}
      >
        <div className="absolute right-5 top-5 ">
          <RxCross1
            className="text-red-500"
            size={25}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="m-auto mt-20 flex w-[90%] flex-col text-base font-normal text-blue-500">
          <Link
            className="border-b border-[#1468a5] py-5"
            href={"/"}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            className="border-b border-[#1468a5] py-5"
            href={"/products"}
            onClick={() => setOpen(false)}
          >
            All Products
          </Link>
          <Link
            className="border-b border-[#1468a5] py-5"
            href={"/products/males"}
            onClick={() => setOpen(false)}
          >
            Males
          </Link>
          <Link
            className="border-b border-[#1468a5] py-5"
            href={"/products/females"}
            onClick={() => setOpen(false)}
          >
            Females
          </Link>
        </div>
      </div>
      <div className="bg-main sticky top-0 z-30 w-full backdrop-blur-3xl print:hidden">
        <div className="m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[1300px]">
          <Link href={"/"}>
            <Image
              className="w-[100px] sm:w-[120] md:w-[150px]"
              src={logo}
              alt="logo"
              width={140}
              height={25}
            />
          </Link>
          {/* <h1 className="font-extrabold text-green-500 xl:text-2xl">
            E Commerce
          </h1> */}
          <input className="text-violet-700 md:block hidden" type="search" placeholder="dfdfd"/>
          <div className="hidden items-center gap-5 text-blue-500 md:flex lg:gap-10">
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>All Products</Link>
            <Link href={"/products/males"}>Males</Link>
            <Link href={"/products/females"}>Females</Link>
          </div>
          <div className="block md:hidden">
            <FiMenu
              size={24}
              className="text-yellow-400"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
