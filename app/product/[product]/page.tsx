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
        <div className="flex flex-col gap-6 p-10 capitalize">
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
          <p className="text-2xl text-secondary">
            price: {data.price}
            <span className="text-sm text-primary">$</span>
          </p>
        </div>
      </div>
      <div className="before:contents-['Overview'] relative flex h-24 items-center  border-b-2 border-slate-500">
        <div className="absolute text-8xl font-extrabold text-slate-200">
          Overview
        </div>
        <h3 className="relative z-10 text-2xl font-semibold">
          Product Information
        </h3>
      </div>

      <div className="my-6 grid grid-cols-3">
        <h5 className="col-span-1 text-3xl text-slate-500">Product Details</h5>
        <div className="col-span-2 text-justify">
          <PortableText value={data.details} />
        </div>
      </div>
      <div className="my-6 grid grid-cols-3">
        <h5 className="col-span-1 text-3xl text-slate-500">Product Care</h5>
        <div className="list col-span-2 text-justify">
          <PortableText value={data.care} />
        </div>
      </div>
    </main>
  );
}
