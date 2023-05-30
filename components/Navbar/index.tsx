"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logoipsum.svg";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context";
import { FiMenu, RxCross1, CartLogo } from "@/lib/icons";
// import { usePathname } from "next/navigation";

export default function Navbar() {
  const { state, dispatch } = useContext(GlobalContext);
  const [totalProductQuantity, setTotalProductQuantity] = useState(0);
  const [open, setOpen] = useState(false);
  // const pathname = usePathname();

  useEffect(() => {
      let totalQuantity = 0;
      state.cart.map((item) => {
        totalQuantity += item.quantity;
      });
      console.log(
        "🚀 ~ file: index.tsx:19 ~ getTotalQuantity ~ totalQuantity:",
        totalQuantity
      );
      setTotalProductQuantity(totalQuantity);
  }, [state]);
  console.log("🚀 ~ file: index.tsx:27 ~ Navbar ~ state:", state.cart)

  return (
    <nav className="sticky top-0 mt-3 w-full z-50 bg-slate-100">
      <div className="mx-auto max-w-5xl bg-white">
        <div
          className={`desktop-nav-bar fixed left-0 top-0 z-40 ${
            !open && "hidden"
          } h-full w-full`}
        >
          <div className="absolute right-5 top-6">
            <RxCross1
              className="text-primary"
              size={25}
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="m-auto mx-4 mt-16 flex flex-col text-base font-normal bg-[#ffffffc9] text-secondary backdrop-blur-lg">
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
        <div className="nav-bar drop-shadow-md shadow-xl z-30 w-full rounded-sm bg-white px-4 md:px-8">
          <div className="m-auto flex  h-16 items-center justify-between rounded-sm">
            <Link className="flex items-center justify-self-start" href={"/"}>
              <Image
                className="w-12 h-12"
                src={logo}
                alt="logo"
                width={50}
                height={50}
              />
              <h1 className="justify-self-center pl-2 text-2xl font-extrabold text-primary">
                Classy Closet
              </h1>
            </Link>
            {/* <input className="text-violet-700 md:block hidden" type="search" placeholder="dfdfd"/> */}
            <div className="hidden items-center gap-5 text-secondary md:flex lg:gap-10">
              <Link href={"/"}>Home</Link>
              <Link href={"/products"}>All Products</Link>
              <Link href={"/products/men"}>Men</Link>
              <Link href={"/products/women"}>Women</Link>
            </div>

            <div className="flex items-center gap-4">
            <Link
              className="relative"
              href={"/cart"}
              onClick={() => setOpen(false)}
            >
              <CartLogo className="h-8 w-8" />
              <span
                className="absolute right-[5px] top-0 flex h-[18px] w-[18px] items-start justify-center rounded-full bg-[#F02D34] text-xs font-semibold leading-3 text-white"              >
                {totalProductQuantity}
              </span>
            </Link>
            <div
              className={`block justify-self-end md:hidden ${open && "opacity-0"}`}
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
      </div>
    </nav>
  );
}
