"use client";
import { IProduct } from "@/types";
import { useContext, useState } from "react";
import { GlobalContext } from "@/context";

export default function QuantityCounter({ data }: { data: IProduct }) {
  const { state } = useContext(GlobalContext);
  console.log("🚀 ~ file: QuantityCounter.tsx:8 ~ QuantityCounter ~ state:", state)
  
  const [quantity, setQuantity] = useState(1);

  const addToCard=()=>{

  }
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
      <button onClick={addToCard} className="bg-slate-900 px-4 py-2 text-gray-100 ">
        Add to Cart
      </button>
    </div>
  );
}
