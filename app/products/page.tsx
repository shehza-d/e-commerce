import { getProducts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types";

export default async function Page() {
  const products: IProduct[] = await getProducts();
  console.log("🚀 ~ file: page.tsx:7 ~ Page ~ products:", products);

  return (
    <div>
      product page
      {products.map((item) => {
        return (
          <Link
            className="text-blue-900 shadow-md roun"
            href={`product/${item.slug}`}
            key={item._id}
          >
            <div className="overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110"
                src={item.productImage}
                width={100}
                height={100}
                alt="image"
              />
            </div>

            <p>{item.productName}</p>
            <p>{item.tags}</p>
            <p>${item.price}</p>
          </Link>
        );
      })}
    </div>
  );
}
