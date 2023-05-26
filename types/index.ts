import { PortableTextBlock } from "sanity";

export interface IProduct {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  productQuantity: number;
  productImage: string;
  category: string;
  size: "XS" | "S" | "M" | "L" | "XL";
  tags:
    | "Sweater"
    | "Dress"
    | "T Shirts"
    | "Pants"
    | "Jackets"
    | "Coat"
    | "Tracksuit"
    | "Jeans"
    | "Coat"
    | "Glasses"
    | "Cap"
    | "Watch";
  price: number;
  details: PortableTextBlock[];
  care: PortableTextBlock[];
}
