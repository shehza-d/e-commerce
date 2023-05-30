import type { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ data }: { data: IProduct }) {
  return (
    <Link
      className="group rounded-lg border p-4 transition-transform duration-1000 hover:shadow-xl"
      href={`product/${data.slug}`}
      key={data._id}
    >
      <div className="mx-auto h-48 w-48 overflow-hidden rounded-lg">
        <Image
          className="transition-transform duration-300 group-hover:scale-110"
          src={data.productImage}
          width={300}
          height={300}
          alt="image"
        />
      </div>

      <p className="my-2 text-2xl font-bold capitalize text-slate-600 group-hover:text-secondary">
        {data.productName}
      </p>
      <p className="text- font-semibold capitalize text-slate-500">
        {data.tags}
      </p>
      <p className="text-2xl text-secondary">
        {data.price}
        <span className="text-sm text-primary">$</span>
      </p>
    </Link>
  );
}
