"use client";
import { IProduct } from "@/types";
import { useContext, useState } from "react";
import { GlobalContext } from "@/context";
import toast from "react-hot-toast";

export default function QuantityCounter({ data }: { data: IProduct }) {
  const { state, dispatch } = useContext(GlobalContext);
  

  const [quantity, setQuantity] = useState(1);

  const addToCard = () => {
    dispatch({
      type: "ADD_TO_CARD",
      payload: state.cart.find((cartItem) => cartItem._id === data._id)
        ? state.cart.map((cartItem) =>
            cartItem._id === data._id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          )
        : [...state.cart, { ...data, quantity }],
    });
    toast.success("Product added to Cart");
  };
  return (
    <div>
      Quantity :
      <button
        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
        className="h-8 w-8 rounded-full border border-black p-1 font-black"
      >
        -
      </button>
      {quantity}
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="h-8 w-8 rounded-full border border-black p-1 font-black"
      >
        +
      </button>
      <br />
      <button
        onClick={addToCard}
        className="bg-slate-900 px-4 py-2 text-gray-100 "
      >
        Add to Cart
      </button>
    </div>
  );
}
