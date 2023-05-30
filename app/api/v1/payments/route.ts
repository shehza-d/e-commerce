import { type NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import type { ICart } from "@/types";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});
console.log('STRIPE_SECRET_KEY',process.env.STRIPE_SECRET_KEY!);

export const POST = async (req: NextRequest, res: NextResponse) => {
  // console.log("next url", req.nextUrl);
  console.log("req", req);

  try {
    const body = await req.json();
    // console.log("body", body);
    // Create Checkout Sessions from body params.
    const cartDataForCheckOut = body?.cartItems?.map((item: ICart) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.productName,
            images: [item.productImage],
          },
          unit_amount: item.price * 100, //*100 because unit amounts has to be in cents
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
        },
        quantity: item.quantity,
      };
    });
    // console.log("cartDataForCheckOut", cartDataForCheckOut);

    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        { shipping_rate: "shr_1NChL5EyHCbMuFLhwcgZncY0" },
        { shipping_rate: "shr_1NCimJEyHCbMuFLhDUBqgEjd" },
      ],
      line_items: cartDataForCheckOut,
      success_url: `${req.nextUrl.origin}/payments/successful`,
      cancel_url: `${req.nextUrl.origin}/payments/canceled`,
    });

    // res.redirect(303, session.url);
    return NextResponse.json({ session: session }, { status: 200 });
  } catch (err: any) {
    console.log("🚀 ~ file: route.ts:64 ~ POST ~ err:", err);
    // res.status(err.statusCode || 500).json(err.message);
  }
};
