import { groq } from "next-sanity";
import { IProduct } from "@/types";
import { client } from "./lib/client";

export const getProducts = async (): Promise<IProduct[]> => {
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      productName,
      "slug": slug.current,
	  productQuantity,
      "productImage": image.asset->url,
      "productImage": image,
      category,
	  size,
	  tags,
	  price,
	  details,
      care
    }`
  );
};

// export const getProject=async(slug: string): Promise<Project> =>{
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "project" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       name,
//       "slug": slug.current,
//       "image": image.asset->url,
//       url,
//       content
//     }`,
//     { slug }
//   )
// }

// export async function getPages(): Promise<Page[]> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "page"]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current
//     }`
//   )
// }

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
