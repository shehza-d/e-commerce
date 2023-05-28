import { PortableTextBlock } from "sanity";

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
  tags:
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
  price: number;
  details: PortableTextBlock[];
  care: PortableTextBlock[];
}

export interface ICart extends IProduct {
  quantity: number;
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
