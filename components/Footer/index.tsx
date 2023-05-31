import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logoipsum.svg";
import { LinkedInLogo, GhIcon, TwIcon } from "@/lib/icons";
import { footerData } from "@/data";

export default function Footer() {
  return (
    <footer className="mt-6 bg-secondary">
      <div className="mx-auto flex max-w-5xl flex-col px-4 md:h-72 md:flex-row md:px-8 lg:px-0">
        <div className="flex h-[16rem] flex-col justify-evenly md:h-auto md:w-[50%]">
          <div className="flex items-center">
            <Image
              className="h-12 w-12"
              src={logo}
              alt="logo"
              width={50}
              height={50}
            />
            <h2 className="justify-self-center pl-2 text-2xl font-extrabold text-primary">
              Classy Closet
            </h2>
          </div>

          <p className="text-justify font-light text-slate-400 md:pr-4">
            Looking for an e-commerce website? We offer a turn key e-commerce
            website with the latest technology. Get your online store today!
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made. high quality everyday
            essentials.
          </p>
          <div className="links flex gap-4">
            <Link
              href="https://twitter.com/Shehza_d_"
              className="rounded-full bg-primary p-2 text-2xl transition-transform duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px]"
              target="_blank"
            >
              <TwIcon className="text-slate-50 " />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shehzadd/"
              className="rounded-full bg-primary p-2 text-2xl transition-transform duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px]"
              target="_blank"
            >
              <LinkedInLogo className="text-slate-50  " />
            </Link>
            <Link
              href="https://www.github.com/shehza-d/"
              className="rounded-full bg-primary p-2 text-2xl transition-transform duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px]"
              target="_blank"
            >
              <GhIcon className="text-slate-50 " />
            </Link>
          </div>
        </div>

        <div className="mb-4 grid min-h-[14rem] w-full grid-cols-2 justify-around capitalize md:ml-2 md:h-auto md:w-[50%] md:grid-cols-4">
          {footerData.map((item) => (
            <ul className="mt-8" key={item.id}>
              <h3 className="text-xl font-semibold text-slate-300">
                {item.heading}
              </h3>
              {item.links.map((links) => (
                <li
                  className="cursor-pointer text-slate-400 hover:text-primary"
                  key={links.id}
                >
                  {links.title}
                  {/* <a href={links.link}>{links.title}</a> */}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="h-6 bg-primary"></div>
    </footer>
  );
}
