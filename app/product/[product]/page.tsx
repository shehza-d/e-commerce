import { getProduct } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { QuantityCounter } from "@/components";

export default async function Page({
  params,
}: {
  params: { product: string };
}) {
  const data = await getProduct(params.product);
  if (!data) notFound();

  return (
    <main className="max-w-5xl px-4 md:px-8 mx-auto">
      <div className="flex">
        <Image
          width={500}
          height={500}
          src={data.productImage}
          alt={data.productName}
        />
        <div className="capitalize">
          <p className="text-2xl font-bold text-secondary">{data.productName}</p>
          <p className="text-slate-400">{data.tags}</p>

          {/* <p>productQuantity: {data.productQuantity}</p> */}
          <p>size: {data.size}</p>
          <p>price: ${data.price}</p>
          <p>category: {data.category}</p>
          <p>createdAt: {`${data._createdAt}`}</p>
          <QuantityCounter data={data} />
        </div>
      </div>

      <PortableText value={data.details} />
      <PortableText value={data.care} />
    </main>
  );
}
