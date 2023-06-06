"use client";
import type { IProduct } from "@/types";
import { useContext, useState } from "react";
import { GlobalContext } from "@/context";
import toast from "react-hot-toast";
import { CartLogo, MinusIcons, PlusIcons } from "@/lib/icons";

export default function QuantityCounter({ data }: { data: IProduct }) {
  const { state, dispatch } = useContext(GlobalContext);

  const [quantity, setQuantity] = useState(1);

  const addToCard = () => {
    const cartData = {
      _id: data._id,
      _createdAt: data._createdAt,
      productName: data.productName,
      slug: data.slug,
      productQuantity: data.productQuantity,
      productImage: data.productImage,
      category: data.category,
      size: data.size,
      tags: data.tags,
      price: data.price,
    };

    dispatch({
      type: "ADD_TO_CARD",
      payload: state.cart.find((cartItem) => cartItem._id === data._id)
        ? state.cart.map((cartItem) =>
            cartItem._id === data._id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          )
        : [...state.cart, { ...cartData, quantity }],
    });
    toast.success("Product added to Cart");
  };

  return (
    <div>
      <div className="flex items-center">
        <h5 className="inline">Quantity :</h5>
        <button
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
          className="h-8 w-8 p-1 text-2xl font-black"
        >
          <MinusIcons />
        </button>
        {quantity}
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="h-8 w-8 p-1 text-2xl font-black"
        >
          <PlusIcons />
        </button>
      </div>

      <button
        onClick={addToCard}
        className="btn mt-6 flex items-center px-4 py-2"
      >
        <CartLogo className="pr-2 text-3xl" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
}
