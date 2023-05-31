"use client";
import Image from "next/image";
import Logo from "../../public/assets/logo.webp";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { CgShoppingCart, CgMenuRightAlt } from "react-icons/cg";
import { Arimo } from "next/font/google";
import { useState } from "react";
import Link from "next/link";

const arimo = Arimo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

function CartButton() {
  return (
    <div className="relative flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#F1F1F1]">
      <CgShoppingCart size={22} />
      <span
        className={`absolute right-[5px] top-0 text-xs font-semibold ${arimo.className} flex h-[18px] w-[18px] items-start justify-center rounded-full bg-[#F02D34] leading-3 text-white`}
      >
        0
      </span>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute left-0 top-0 h-screen w-full items-center justify-center bg-white lg:hidden`}
      >
        <div className="absolute top-0 m-auto flex h-[105px] w-[90%] items-center justify-between">
          <Image src={Logo} alt="logo" className="h-[25px] w-[140px]" />
          <div onClick={() => setOpen(false)}>
            <RxCross2 size={30} />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="mb-4 block  lg:hidden">
            <CartButton />
          </div>
          <ul className="flex flex-col gap-4 text-center">
            <Link href={"/category/female"}>
              <li>Female</li>
            </Link>
            <Link href={"/category/male"}>
              <li>Male</li>
            </Link>
            <Link href={"/category/kids"}>
              <li>Kids</li>
            </Link>
            <Link href={"/category/all"}>
              <li>All Products</li>
            </Link>
          </ul>
        </div>
      </div>
      <div>
        <div className="mx-auto flex h-[105px] w-[90%] items-center justify-between xl:w-[1350px]">
          <Image src={Logo} alt="logo" className="h-[25px] w-[140px]" />
          <ul className="hidden gap-12 lg:flex">
            <Link href={"/category/female"}>
              <li>Female</li>
            </Link>
            <Link href={"/category/male"}>
              <li>Male</li>
            </Link>
            <Link href={"/category/kids"}>
              <li>Kids</li>
            </Link>
            <Link href={"/category/products"}>
              <li>All Products</li>
            </Link>
          </ul>
          <div className="hidden w-[30%] items-center rounded-md border lg:flex">
            <div className="flex w-[27px] items-center justify-center">
              <CiSearch size={16} />
            </div>
            <input
              type="text"
              placeholder="What you looking for"
              className="border-none bg-transparent py-[3px] text-sm placeholder:font-sans placeholder:tracking-tight placeholder:text-zinc-500"
            />
          </div>
          <div className="hidden lg:block">
            <CartButton />
          </div>
          <div onClick={() => setOpen(true)} className="flex lg:hidden">
            <CgMenuRightAlt size={30} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
