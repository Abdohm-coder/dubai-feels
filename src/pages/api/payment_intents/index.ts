import { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
    return;
  }
  const {
    amount,
    payment_intent_id,
    retrieve,
  }: { amount: number; payment_intent_id?: string; retrieve: boolean } =
    req.body;

  if (payment_intent_id) {
    try {
      const current_intent = await stripe.paymentIntents.retrieve(
        payment_intent_id
      );

      // If just retrieve we will return the payment intents
      if (retrieve) {
        res.status(200).json(current_intent);
        return;
      }
      if (current_intent) {
        // If PaymentIntent has been created, just update the amount.
        const updated_intent = await stripe.paymentIntents.update(
          payment_intent_id,
          {
            amount,
          }
        );
        res.status(200).json(updated_intent);
        return;
      }
    } catch (e) {
      if ((e as any).code !== "resource_missing") {
        const errorMessage =
          e instanceof Error ? e.message : "Internal server error";
        res.status(500).json({ statusCode: 500, message: errorMessage });
        return;
      }
    }
  }
  try {
    // Create PaymentIntent from body params.
    const params: Stripe.PaymentIntentCreateParams = {
      description: process.env.STRIPE_PAYMENT_DESCRIPTION ?? "",
      automatic_payment_methods: {
        enabled: true,
      },
      currency: "usd",

      amount,
    };
    const payment_intent: Stripe.PaymentIntent =
      await stripe.paymentIntents.create(params);

    res.status(200).json(payment_intent);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ statusCode: 500, message: errorMessage });
  }
}
