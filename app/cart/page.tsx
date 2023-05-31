"use client";

import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context";
import Image from "next/image";
import toast from "react-hot-toast";
import { getStripe } from "@/lib/getStripe";
import { CartLogo } from "@/lib/icons";
import Link from "next/link";

export default function Cart() {
  const { state, dispatch } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
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

  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await getStripe();
      const res = await fetch("/api/v1/payments", {
        method: "POST",
        body: JSON.stringify({ cartItems: state.cart }),
      });
      const data = await res.json();
      if (!res.ok) console.log("responsce !ok");

      // console.log("🚀 ~ file: page.tsx:73 ~ handleCheckout ~ data:", data);
      stripe.redirectToCheckout({ sessionId: data.session.id });
    } catch (err: any) {
      console.log("err", err);
      toast.error(`${err.message}`);
    } finally {
      setLoading(false);
    }
    // toast.loading("Redirecting...");
  };

  return (
    <main>
      <h1 className="my-4 text-center text-3xl font-bold capitalize text-secondary md:text-4xl">
        Shopping Cart page
      </h1>
      {!state.cart.length ? (
        <div className="flex min-h-[50vh] flex-col items-center justify-center">
          <CartLogo className="text-4xl" />
          <Link href="/products" className="text-4xl">
            Start Shopping
          </Link>
        </div>
      ) : (
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
                <button
                  className="bg-slate-800 text-white"
                  onClick={() => removeItem(item._id)}
                >
                  remove
                </button>
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
            <button
              className="btn disabled:cursor-not-allowed "
              disabled={!state.cart.length}
              title={!state.cart.length ? "Add Products First" : ""}
              onClick={handlePayment}
            >
              {/* {state.cart.length ? "Proceed to Checkout"  } */}
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
