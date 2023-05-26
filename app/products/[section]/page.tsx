import { getCategory } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { IProduct, TCategory } from "@/types";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components";

export default async function page({
  params,
}: {
  params: { section: TCategory };
}) {
  const data = await getCategory(params.section);
  if (!data.length) notFound();

  console.log("🚀 ~ file: sectionn9 ~ data:", data);

  return (
    <div>
      product page
      {data.map((item) => (
        <ProductCard key={item._id} data={item} />
      ))}
    </div>
  );
}
