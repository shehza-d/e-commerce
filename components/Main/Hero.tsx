import heroHoodie from "@/public/assets/pink-sweater.png";
import Image from "next/image";
import {
  BsCalendar3,
  VscWorkspaceTrusted,
  HiOutlineBuildingOffice2,
} from "@/lib/icons";
import Link from "next/link";
// import { BlurDiv } from "@/components";
import dotPng from "@/public/assets/dot.png";

export default function Hero() {
  return (
    <header className="bg-slate-100">
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col flex-wrap items-center justify-center gap-8 px-4 md:flex-row md:gap-0 md:px-8">
        <div className="w-[400px]">
          <h1 className="text-5xl font-extrabold text-secondary">
            All Your Style <span className="text-primary">Are Here</span>
          </h1>
          <p className="text-slate-500">
            This e commerce website is a platform where you can order or
            purchase <span className="text-primary">Clothing</span> items and
            you can also find other items.
          </p>
          <Link href="/products" className="btn px-12 py-2">
            Buy Now
          </Link>
        </div>

        {/* <Image
          src={dotPng}
          width={479}
          height={309}
          alt="pink hoodie for hero"
        /> */}
        <div className="w-[300px]">
          <Image
            className="rotate-12"
            src={heroHoodie}
            width={594}
            height={420}
            alt="pink hoodie for hero"
          />
        </div>

        {/* <Image
          src={dotPng}
          width={479}
          height={309}
          alt="pink hoodie for hero"
        />
 */}

        <div className="blur-div absolute right-40 top-56 h-36 w-36 bg-primary blur-3xl"></div>

        <div className="circles  w-52">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white p-5 text-3xl text-black">
              <BsCalendar3 />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-bold text-secondary">1987</span>
              <span className="text-slate-500">Years Since</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white p-5  text-3xl">
              <VscWorkspaceTrusted />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-bold text-secondary">
                Guaranty
              </span>
              <span className="text-slate-500">Money back</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white p-5 text-3xl">
              <HiOutlineBuildingOffice2 />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-bold text-secondary">United</span>
              <span className="text-slate-500">Original quality</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
