"use client";

import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context";
import Image from "next/image";
import toast from "react-hot-toast";

export default function Cart() {
  const { state, dispatch } = useContext(GlobalContext);
  // const [quantity, setQuantity] = useState(state.);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProductQuantity, setTotalProductQuantity] = useState(0);

  useEffect(() => {
    let subTotal = 0;
    let totalQuantity = 0;
    state.cart.map((item) => {
      //getting total price of all items
      let price = 0;
      price += item.price * item.quantity;
      subTotal += price;
      //getting total quantity of all items
      totalQuantity += item.quantity;
    });
    setTotalProductQuantity(totalQuantity);
    setTotalPrice(subTotal);
  }, [state]);

  const increaseQuantity = (id: string) => {
    dispatch({
      type: "ADD_TO_CARD",
      payload: state.cart.map((cartItem) =>
        cartItem._id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ),
    });
  };

  const decreaseQuantity = (id: string) => {
    dispatch({
      type: "ADD_TO_CARD",
      payload: state.cart.map((cartItem) =>
        cartItem._id === id
          ? {
              ...cartItem,
              quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1,
            }
          : cartItem
      ),
    });
  };
  
  const removeItem = (id: string) => {
    dispatch({
      type: "ADD_TO_CARD",
      payload: state.cart.filter((cartItem) => cartItem._id !== id),
    });
    toast.success("Product Removed from Cart");
  };

  console.log(
    "🚀 ~ file: QuantityCounter.tsx:8 ~ QuantityCounter ~ state:",
    state.cart
  );
  return (
    <main>
      {" "}
      Shopping Cart page
      {!state.cart.length ? <h2>Start Shopping</h2> : ""}
      <div className="main grid grid-cols-3">
        <div className="cart col-span-2">
          {state.cart.map((item) => (
            <div key={item._id}>
              <Image
                width={300}
                height={300}
                src={item.productImage}
                alt={item.productName}
              />
              <p>Name {item.productName}</p>
              <button onClick={() => removeItem(item._id)}>remove</button>
              <p>category {item.category}</p>
              <p>tag {item.tags}</p>
              <p>single item price {item.price}</p>

              <p>
                Quantity :
                <button
                  onClick={() => decreaseQuantity(item._id)}
                  className="h-8 w-8 rounded-full border border-black p-1 font-black"
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => increaseQuantity(item._id)}
                  className="h-8 w-8 rounded-full border border-black p-1 font-black"
                >
                  +
                </button>
              </p>
              <p>Total item price {item.price * item.quantity}</p>
            </div>
          ))}
        </div>
        <div className="order col-span-1">
          <br />
          <br />
          <br />
          <h2>Order Summary</h2>
          <div className="flex flex-col"></div>
          <p>Quantity {totalProductQuantity}</p>

          <p>Product Sub Total ${totalPrice}</p>
          <button>Process to Checkout</button>
        </div>
      </div>
    </main>
  );
}
