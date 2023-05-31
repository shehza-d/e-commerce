"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context";
import { getStripe } from "@/lib/getStripe";
import toast from "react-hot-toast";
import { CartLogo, MinusIcons, PlusIcons } from "@/lib/icons";
import deleteIcon from "@/public/assets/DeleteIcon.svg";
import { Loader } from "@/components";

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
        <div className="main grid grid-cols-1 md:grid-cols-3">

          <div className="cart col-span-2 flex flex-col gap-6">
            {state.cart.map((item) => (
              <div
                className="group flex h-52 items-stretch justify-around rounded-lg border p-4 hover:shadow-xl"
                key={item._id}
              >
                <div className="mx-auto h-48 w-48 overflow-hidden rounded-lg">
                  <Image
                    className="transition-transform duration-300 group-hover:scale-110"
                    width={300}
                    height={300}
                    src={item.productImage}
                    alt={item.productName}
                  />
                </div>

                <div>
                  <p>Name {item.productName}</p>
                  <p>category {item.category}</p>
                  <p>tag {item.tags}</p>
                  <p>single item price {item.price}</p>
                  <p>Total item price {item.price * item.quantity}</p>
                </div>

                <div className="flex flex-col items-center justify-between">
                  <button className="" onClick={() => removeItem(item._id)}>
                    <Image
                      src={deleteIcon}
                      width={28}
                      height={28}
                      alt="delete icon"
                    />
                  </button>
                  <div className="flex items-center">
                    <button
                      onClick={() => decreaseQuantity(item._id)}
                      className="h-8 w-8 p-1 text-2xl font-black"
                    >
                      <MinusIcons />
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => increaseQuantity(item._id)}
                      className="h-8 w-8 p-1 text-2xl font-black"
                    >
                      <PlusIcons />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="order order-first md:order-none md:sticky top-36 col-span-1 mx-auto flex h-fit w-[75%] flex-col gap-4">
            <h2 className="text-center text-xl font-bold text-secondary">
              Order Summary
            </h2>
            {/* <div className="flex flex-col"></div> */}
            <p className="flex justify-between">
              <span>Quantity</span>
              <span>{totalProductQuantity}</span>
            </p>

            <p className="flex justify-between">
              <span>Product Sub Total</span>
              <span>{totalPrice}</span>
            </p>

            <button
              className={`btn flex h-10 items-center justify-evenly py-2 ${
                loading ? "bg-[#c2825d]" : ""
              } disabled:cursor-not-allowed`}
              disabled={loading}
              title={!state.cart.length ? "Add Products First" : ""}
              onClick={handlePayment}
            >
              {/* {state.cart.length ? "Proceed to Checkout"  } */}
              <div className="w-4">
                {loading ? <Loader width="w-4" height="h-4" /> : ""}
              </div>
              <span className="text-center">Proceed to Payment</span>
              <div className="w-4"></div>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
