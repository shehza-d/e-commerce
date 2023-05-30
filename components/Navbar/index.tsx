"use client";
import logo from "@/public/assets/logoipsum.svg";
import Image from "next/image";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, RxCross1, BiCartAlt } from "@/lib/icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // const pathname = usePathname();

  return (
    <nav className="sticky top-0 mt-3 w-full bg-red-500">
      <div className="mx-auto max-w-5xl bg-white">
        <div
          className={`bdr desktop-nav-bar fixed left-0 top-0 z-40 ${
            !open && "hidden"
          } h-full w-full`}
        >
          <div className="absolute right-5 top-5">
            <RxCross1
              className="text-red-500"
              size={25}
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="bdr2 m-auto mx-4 mt-20 flex flex-col text-base font-normal text-blue-500 backdrop-blur-lg">
            <Link
              className="border-b border-[#1468a5] py-5 text-center"
              href={"/"}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              className="border-b border-[#1468a5] py-5 text-center"
              href={"/products"}
              onClick={() => setOpen(false)}
            >
              All Products
            </Link>
            <Link
              className="border-b border-[#1468a5] py-5 text-center"
              href={"/products/men"}
              onClick={() => setOpen(false)}
            >
              Men
            </Link>
            <Link
              className="border-b border-[#1468a5] py-5 text-center"
              href={"/products/women"}
              onClick={() => setOpen(false)}
            >
              Women
            </Link>
          </div>
        </div>
        <div className="bdr3 nav-bar z-30 w-full rounded-sm bg-white px-4 backdrop-blur-3xl md:px-8">
          <div className="bdr4 m-auto flex  h-16 items-center justify-between rounded-sm">
            <Link className="justify-self-start" href={"/"}>
              <Image
                className="w-[100px] sm:w-[120] md:w-[150px]"
                src={logo}
                alt="logo"
                width={140}
                height={25}
              />
            </Link>
            <h1 className="justify-self-center font-extrabold text-primary text-2xl">
              Classy Closet
            </h1>
            {/* <input className="text-violet-700 md:block hidden" type="search" placeholder="dfdfd"/> */}
            <div className="hidden items-center gap-5 text-blue-500 md:flex lg:gap-10">
              <Link href={"/"}>Home</Link>
              <Link href={"/products"}>All Products</Link>
              <Link href={"/products/men"}>Men</Link>
              <Link href={"/products/women"}>Women</Link>
            </div>
            <Link className="" href={"/cart"} onClick={() => setOpen(false)}>
              <BiCartAlt className="h-8 w-8" />
            </Link>
            <div
              className={`block justify-self-end md:hidden ${open && "hidden"}`}
            >
              <FiMenu
                size={24}
                className={`text-yellow-400 `}
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
