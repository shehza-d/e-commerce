import Image from "next/image";
import logo from "@/public/assets/logoipsum.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="px-4 md:px-8 h-60 max-w-4xl mx-auto">

      <div className="">
        <Image
          className="w-[100px] sm:w-[120] md:w-[150px]"
          src={logo}
          alt="logo"
          width={140}
          height={25}
        />
        <p>
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div className="links">
          <Link href="https://twitter.com/Shehza_d_">O</Link>
          <Link href="https://www.linkedin.com/in/shehzadd/">O</Link>
        </div>
      </div>
      </div>
      <div className="h-6 bg-primary"></div>
    </footer>
  );
}
