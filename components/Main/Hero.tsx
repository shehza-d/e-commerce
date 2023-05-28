import heroHoodie from "@/public/assets/pink-sweater.png";
import Image from "next/image";
import {
  BsCalendar3,
  VscWorkspaceTrusted,
  HiOutlineBuildingOffice2,
} from "@/lib/icons";

export default function Hero() {
  return (
    <header className="bg-slate-100">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <h1 className="text-5xl font-extrabold text-secondary">
          All Your Style <span className="text-primary">Are Here</span>
        </h1>
        <p className="text-slate-500">
          This e commerce website is a platform where you can order or purchase{" "}
          <span className="text-primary">Clothing</span> items and you can also
          find other items.
        </p>

        <button className="btn px-12 py-2">Buy Now</button>

        <Image
          src={heroHoodie}
          width={594}
          height={420}
          alt="pink hoodie for hero"
        />

        <div className="circles">
          <div className="flex">
            <BsCalendar3 className="h-6 w-6 rounded-full bg-white p-10 text-black" />
            <span>1987</span>
            <span>Since</span>
          </div>
          <div className="flex">
            <VscWorkspaceTrusted className="p- bg-hite tex-black h-6 w-6 rounded-full" />
            <span></span>
            <span></span>
          </div>
          <div className="flex">
            <HiOutlineBuildingOffice2 className="h-6 w-6 rounded-full bg-white p-10 text-black" />
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
