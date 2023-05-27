import { NextRequest, NextResponse } from "next/server";
// import * as Stripe from 'stripe'
// const stripe = new Stripe('sk..tst')

// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
// const stripe = require('stripe')('sk_test_51NBck0EyHCbMuFLhsmZRzfr2nHVv1A6wYrjIfWbTbUIUfswOZRsyieDdbjlBNJDuZT9GiMkAWb53F982yotdh1XG00TVz8FShK');

// const paymentIntent = await stripe.paymentIntents.create({
//   amount: 500,
//   currency: 'gbp',
//   payment_method: 'pm_card_visa',
// });

export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: "OK",
    message: "API running Good by SHEHZAD.",
  });
}