import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ data }: { data: IProduct }) {
  return (
    <Link
      className="group border transition-transform rounded-lg p-4 duration-1000 hover:shadow-xl"
      // class="S_Underline relative inline-block text-2xl font-bold capitalize text-slate-100 underline-offset-4 transition-all duration-300 group-hover:-translate-y-4 group-hover:after:left-0 group-hover:after:w-full"
      href={`product/${data.slug}`}
      key={data._id}
    >
      <div className="overflow-hidden mx-auto w-48 h-48 rounded-lg">
        <Image
          className="transition-transform duration-300 group-hover:scale-110"
          src={data.productImage}
          width={300}
          height={300}
          alt="image"
        />
      </div>

      <p className="text-2xl my-2 font-bold capitalize text-slate-600 group-hover:text-secondary">
        {data.productName}
      </p>
      <p className="text- font-semibold capitalize text-slate-500">{data.tags}</p>
      <p className="text-2xl text-secondary">
        {data.price}<span className="text-sm text-primary">$</span>
      </p>
    </Link>
  );
}
