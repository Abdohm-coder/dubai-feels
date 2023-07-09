import PricingSummary from "./sidebar/PricingSummary";
import PaymentSchedule from "./sidebar/PaymentSchedule";
import { PaymentIntent } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "@/utils/get-stripe";
import { useEffect, useState } from "react";
import axios from "axios";
import ElementsForm from "./ElementsForm";

const PaymentInfo: React.FC<{
  previousStep: () => void;
  email: string;
}> = ({ previousStep, email }) => {
  const [paymentIntent, setPaymentIntent] = useState<PaymentIntent | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    // Get Booking Details from locale Storage
    const data = localStorage.getItem("booking-details");
    const bookingDetails = data ? JSON.parse(data) : null;
    setPrice(bookingDetails?.price);
    const getPaymentIntents = async () => {
      try {
        const response = await axios.post("/api/payment_intents", {
          amount: (bookingDetails?.price ?? 200) * 100,
        });
        setPaymentIntent(response.data);
      } catch (err: any) {
        console.log(err);
        setErrorMessage(err.response.data.message);
      }
    };
    getPaymentIntents();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-xl-7 col-lg-8">
          <div className="mt-40">
            <h3 className="text-22 fw-500 mb-20">
              Fill Your Payment Card Info
            </h3>
            {paymentIntent && paymentIntent.client_secret ? (
              <Elements
                stripe={getStripe()}
                options={{
                  appearance: {
                    variables: {
                      colorIcon: "#6772e5",
                      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                    },
                  },
                  clientSecret: paymentIntent.client_secret,
                }}>
                <ElementsForm email={email} paymentIntent={paymentIntent} />
              </Elements>
            ) : errorMessage ? (
              <p>{errorMessage}</p>
            ) : (
              <p>Loading...</p>
            )}
            {/* End .row */}
          </div>
          {/* End mt-40 */}

          <div className="row y-gap-20 items-center justify-between">
            <div className="col-auto">
              <div className="form-checkbox d-flex items-center">
                <input type="checkbox" name="name" />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-14 lh-10 text-light-1 ml-10">
                  I understand and agree to the{" "}
                  <a
                    href="/terms-and-conditions"
                    target="_blank"
                    rel="noreferrer">
                    {" "}
                    Terms & Conditions
                  </a>{" "}
                  of Dubaifeel!
                </div>
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End terms and conditons */}
        </div>
        {/* End payment details */}

        <div className="col-xl-5 col-lg-4">
          <div className="booking-sidebar">
            <PricingSummary price={price} />
            <PaymentSchedule price={price} />
          </div>
        </div>
        {/* payment sidebar info */}
      </div>
      {/* End Row */}
      <div className="row x-gap-20 y-gap-20 pt-20">
        <div className="col-auto">
          <button
            className="button h-60 px-24 -blue-1 bg-light-2"
            onClick={previousStep}>
            Previous
          </button>
        </div>
        {/* End prvious btn */}
        <div className="col-auto">
          <button
            className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
            disabled={!!errorMessage}
            type="submit"
            form="payment">
            Confirm Booking
            <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
        {/* End next btn */}
      </div>
      {/* End stepper button */}
    </>
  );
};

export default PaymentInfo;
