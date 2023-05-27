import { getProducts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types";
import { ProductCard } from "@/components";

export default async function Page() {
  const products: IProduct[] = await getProducts();
  console.log("🚀 ~ file: page.tsx:7 ~ Page ~ products:", products);

  return (
    <div>
      product page
      <div className="grid grid-cols-4">
        {products.map((item) => (
          <ProductCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}
