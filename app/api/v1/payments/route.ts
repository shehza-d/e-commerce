import { type NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { ICart } from "@/types";

// const paymentIntent = await stripe.paymentIntents.create({
//   amount: 500,
//   currency: 'gbp',
//   payment_method: 'pm_card_visa',
// });

export async function GET() {
  return NextResponse.json({
    status: "OK",
    message: "API running Good by SHEHZAD.",
  });
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!
  , {apiVersion: "2022-11-15",}
  );

export const POST = async (req: NextRequest, res: NextResponse) => {
  // console.log("next url", req.nextUrl);
  console.log("req", req);

  try {
    const body = await req.json();
    console.log("bodyyyyyyyy", body);
    // Create Checkout Sessions from body params.
    const cartDataForCheckOut = body?.map((item: ICart) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.productName,
            images: [item.productImage],
          },
          unit_amount: item.price * 100,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
        },
        quantity: item.quantity,
      };
    })
    console.log('cartDataForCheckOut',cartDataForCheckOut);
    
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
    })

    // res.redirect(303, session.url);
    return NextResponse.json({ session: session }, { status: 200 });
  } catch (err: any) {
    console.log("🚀 ~ file: route.ts:64 ~ POST ~ err:", err);
    // res.status(err.statusCode || 500).json(err.message);
  }
};

// const session = await stripe.checkout.sessions.create({
//   line_items: [
//     {
//       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//       price: "{{PRICE_ID}}",
//       quantity: 1,
//     },
//   ],
//   mode: "payment",
//   success_url: `${req.headers.origin}/?success=true`,
//   cancel_url: `${req.headers.origin}/?canceled=true`,
// });
