import { getProduct } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types";
import { notFound } from "next/navigation";
import { PortableText } from '@portabletext/react';
import { QuantityCounter } from "@/components";

export default async function page({
  params,
}: {
  params: { product: string };
}) {
  
  const data = await getProduct(params.product);
  if (!data) notFound()
  
  return (
    <div>
      <p>name : {data.productName}</p>
      <p>productQuantity: {data.productQuantity}</p>
      <p>size: {data.size}</p>
      <p>price: ${data.price}</p>
      <p>tags: {data.tags}</p>
      <p>category: {data.category}</p>
      <p>createdAt: {`${data._createdAt}`}</p>

<QuantityCounter data={data}/>


      <PortableText value={data.details} />
      <PortableText value={data.care} />

    </div>
  );
}
