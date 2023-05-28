import type { PortableTextBlock } from "sanity";

export type TCategory = "women" | "men" | "kids" | "other";

export interface IProduct {
  _id: string;
  _createdAt: Date;
  productName: string;
  slug: string;
  productQuantity: number;
  productImage: string;
  category: TCategory;
  size: "XS" | "S" | "M" | "L" | "XL";
  tags: TTags;
  price: number;
  details: PortableTextBlock[];
  care: PortableTextBlock[];
}

//didn't extended IProduct because i wanted to remove details and care properties
export interface ICart {
  _id: string;
  _createdAt: Date;
  productName: string;
  slug: string;
  productQuantity: number;
  productImage: string;
  category: TCategory;
  size: "XS" | "S" | "M" | "L" | "XL";
  tags: TTags;
  price: number;
  quantity: number; //extra added for cart
}

export interface IState {
  darkTheme: boolean;
  isLogin: boolean | null;
  testing: string;
  baseURL: string;
  cart: ICart[];
}

export interface IAction {
  type: "ADD_TO_CARD" | "TOGGLE_THEME";
  payload?: any;
}

type TTags =
  | "sweater"
  | "dress"
  | "t shirts"
  | "pants"
  | "jackets"
  | "coat"
  | "tracksuit"
  | "jeans"
  | "coat"
  | "glasses"
  | "cap"
  | "watch";
