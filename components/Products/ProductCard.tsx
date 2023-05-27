import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ data }: { data: IProduct }) {
  return (
    <Link
      className="roun border border-green-500  text-blue-900 shadow-md"
      href={`product/${data.slug}`}
      key={data._id}
    >
      <div className="overflow-hidden">
        <Image
          className="transition-transform duration-300 hover:scale-110"
          src={data.productImage}
          width={100}
          height={100}
          alt="image"
        />
      </div>

      <p>{data.productName}</p>
      <p>{data.tags}</p>
      <p>${data.price}</p>
    </Link>
  );
}
