import { groq } from "next-sanity";
import type { IProduct, TCategory } from "@/types";
import { client } from "./lib/client";

export const getProducts = async (): Promise<IProduct[]> => {
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      productName,
      "slug": slug.current,
      "productImage": productImage.asset->url,
      category,
	    tags,
	    price,
    }`
  );
};

export const getProduct = async (slug: string): Promise<IProduct> => {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      _createdAt,
      productName,
      "slug": slug.current,
      productQuantity,
      "productImage": productImage.asset->url,
      category,
      size,
      tags,
      price,
      details,
      care,
    }`,
    { slug }
  );
};

export const getCategory = async (slug: TCategory): Promise<IProduct[]> => {
  return client.fetch(
    groq`*[_type == "product" && category == $slug]{
      _id,
      productName,
      "slug": slug.current,
      "productImage": productImage.asset->url,
      category,
	    tags,
	    price,
    }`,
    { slug }
  );
};


// export async function getPage(slug: string): Promise<Page> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "page" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current,
//       content
//     }`,
//     { slug }
//   )
// }
