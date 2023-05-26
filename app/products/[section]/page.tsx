import { getCategory } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { IProduct, TCategory } from "@/types";
import { notFound } from "next/navigation";

export default async function page({
  params,
}: {
  params: { section: TCategory };
}) {
  const data = await getCategory(params.section);
  if (!data.length) notFound()

  console.log("🚀 ~ file: sectionn9 ~ data:", data);

  return (
    <div>
      product page
      {data.map((item) => {
        return (
          <Link
            className="roun text-blue-900 shadow-md"
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
