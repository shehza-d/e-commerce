import { getProduct } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types";
import { notFound } from "next/navigation";

export default async function page({
  params,
}: {
  params: { product: string };
}) {
  const data = await getProduct(params.product);
  if (!data) notFound()
  
  console.log("🚀 ~ file: page.tsx:9 ~ data:", data);

  return (
    <div>
      <p>name : {data.productName}</p>
      <p>name : {data.productQuantity}</p>
      <p>name : {data.size}</p>
      <p>name : {data.price}</p>
      <p>name : {data.tags}</p>
      <p>name : {data.category}</p>
      <p>name : {`${data._createdAt}`}</p>
    </div>
  );
}
