import heroHoodie from "@/public/assets/pink-sweater.png";
import Image from "next/image";
import {
  BsCalendar3,
  VscWorkspaceTrusted,
  HiOutlineBuildingOffice2,
} from "@/lib/icons";
import Link from "next/link";
// import { BlurDiv } from "@/components";

export default function Hero() {
  return (
    <header className="bg-slate-100">
      <div className="relative mx-auto max-w-5xl px-4 md:px-8">
        <h1 className="text-5xl font-extrabold text-secondary">
          All Your Style <span className="text-primary">Are Here</span>
        </h1>
        <p className="text-slate-500">
          This e commerce website is a platform where you can order or purchase{" "}
          <span className="text-primary">Clothing</span> items and you can also
          find other items.
        </p>
        <Link href="/products" className="btn px-12 py-2">
          Buy Now
        </Link>

        <Image
          src={heroHoodie}
          width={594}
          height={420}
          alt="pink hoodie for hero"
        />
        <div className="blur-div absolute right-40 bg-primary blur-3xl top-56 h-36 w-36" ></div>

        <div className="circles w-56">
          <div className="flex items-center justify-evenly">
            <div className="rounded-full bg-white p-5 text-3xl text-black">
              <BsCalendar3 />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-bold text-secondary">1987</span>
              <span className="text-slate-500">Years Since</span>
            </div>
          </div>
          <div className="flex items-center justify-evenly">
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
          <div className="flex items-center justify-evenly">
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
