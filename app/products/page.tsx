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
          <Link className="text-blue-900"  href={`product/${item.slug}`} key={item._id}>
          {/* <Image src={item.productImage} width={100} height={100} alt='image'/> */}
          <p 
          >
            {item.productImage}


          </p>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
