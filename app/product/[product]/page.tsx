import { getProduct } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import type { IProduct } from "@/types";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { QuantityCounter, SizeUL } from "@/components";

export default async function Page({
  params,
}: {
  params: { product: string };
}) {
  const data: IProduct = await getProduct(params.product);
  if (!data) notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 md:px-8 lg:p-0">
      <div className="my-8 flex">
        <Image
          className="rounded-lg "
          width={800}
          height={800}
          src={data.productImage}
          alt={data.productName}
        />
        <div className="p-10 capitalize">
          <h2 className="text-4xl font-bold text-secondary">
            {data.productName}
          </h2>
          <p className="text-slate-400">{data.tags}</p>
          <p>Select size</p>
          <SizeUL />
          {/* <p>productQuantity: {data.productQuantity}</p> */}
          {/* <p>size: {data.size}</p> */}
          <p>category: {data.category}</p>
          <p>createdAt: {`${data._createdAt}`}</p>
          <QuantityCounter data={data} />
          <p>price: ${data.price}</p>
        </div>
      </div>

      <PortableText value={data.details} />
      <PortableText value={data.care} />
    </main>
  );
}
