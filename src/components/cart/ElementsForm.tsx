import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { PaymentIntent } from "@stripe/stripe-js";
import axios from "axios";

const ElementsForm: React.FC<{
  paymentIntent: PaymentIntent | null;
  email: string;
}> = ({ paymentIntent, email }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [sendToEmail, setSendToEmail] = useState(false);

  const [payment, setPayment] = useState({ status: "initial" });
  const [errorMessage, setErrorMessage] = useState("");
  const [cardNameHolder, setCardNameHolder] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    if (!elements) return;

    setPayment({ status: "processing" });

    // Create a PaymentIntent with the specified amount.
    const res = await axios.post("/api/payment_intents", {
      amount: 200,
      payment_intent_id: paymentIntent?.id,
      cardNameHolder,
    });
    const response = res.data;
    setPayment(response);

    if (response.statusCode === 500) {
      setPayment({ status: "error" });
      setErrorMessage(response.message);
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe!.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/cart`,
        payment_method_data: {
          billing_details: {
            name: cardNameHolder,
          },
        },
        receipt_email: sendToEmail ? email : undefined,
      },
    });

    if (error) {
      setPayment({ status: "error" });
      setErrorMessage(error.message ?? "An unknown error occurred");
    } else if (paymentIntent) {
      setPayment(paymentIntent);
      console.log(paymentIntent);
    }
  };

  // Payment Status Component
  const PaymentStatus = ({ status }: { status: string }) => {
    switch (status) {
      case "processing":
      case "requires_payment_method":
      case "requires_confirmation":
        return <h2>Processing...</h2>;

      case "requires_action":
        return <h2>Authenticating...</h2>;

      case "succeeded":
        return <h2>Payment Succeeded 🥳</h2>;

      case "error":
        return (
          <>
            <h2>Error 😭</h2>
            <p className="error-message">{errorMessage}</p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <form id="payment" onSubmit={handleSubmit}>
      <div className="form-input mb-20">
        <input
          type="text"
          required
          value={cardNameHolder}
          onChange={(e) => setCardNameHolder(e.target.value)}
        />
        <label className="lh-1 text-16 text-light-1">Card holder name *</label>
      </div>
      <PaymentElement />
      <div className="w-full h-1 bg-border mt-40 mb-40" />

      <div className="row y-gap-20 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input
              type="checkbox"
              name="name"
              // @ts-ignore
              value={sendToEmail}
              onChange={(e) => setSendToEmail(e.target.checked)}
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-14 lh-10 text-light-1 ml-10">
              Send the receipt for the resulting payment to the email address
            </div>
          </div>
        </div>
        {/* End col-auto */}
      </div>
      {/* End terms and conditons */}
      <PaymentStatus status={payment.status} />
    </form>
  );
};

export default ElementsForm;
