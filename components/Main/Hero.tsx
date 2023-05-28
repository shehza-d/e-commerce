import heroHoodie from "@/public/assets/pink-sweater.png";
import Image from "next/image";

export default function Hero() {
  return ( 

    <header className="bg-slate-100">
      <div className="px-4 md:px-8 max-w-4xl mx-auto">

      <h1 className="text-5xl font-extrabold text-secondary">
        All Your Style <span className="text-primary">Are Here</span>
      </h1>
      <p className="text-slate-500">
        This e commerce website is a platform where you can order or purchase{" "}
        <span className="text-primary">Clothing</span> items and you can also
        find other items.
      </p>

      <button className="btn px-12 py-2">Buy Now</button>

      <Image src={heroHoodie} 
      width={594} height={420}
      alt='pink hoodie for hero'/>


</div>

    </header>
  );
}
