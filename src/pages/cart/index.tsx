import Seo from "@/components/common/Seo";
import Header11 from "@/components/header/header-11";
import DefaultFooter from "@/components/footer/default";
import StepperBooking from "@/components/cart/stepper-booking";
import { GetServerSideProps } from "next";
import axios from "axios";
import Stripe from "stripe";

const Index = ({
  paymentIntent,
}: {
  paymentIntent: Stripe.PaymentIntent | null;
}) => {
  return (
    <>
      <Seo pageTitle="Cart" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <section className="pt-40 layout-pb-md">
        <div className="container">
          <StepperBooking paymentIntent={paymentIntent} />
        </div>
        {/* End container */}
      </section>
      {/* End stepper */}

      <DefaultFooter />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { payment_intent } = ctx.query;

  if (payment_intent) {
    const response = await axios.post(
      `//${ctx.req.headers.host}/api/payment_intents`,
      {
        retrieve: true,
        payment_intent_id: payment_intent,
      }
    );

    console.log(response.data)

    return {
      props: {
        paymentIntent: response.data,
      },
    };
  }
  return {
    props: {
      paymentIntent: null,
    },
  };
};

export default Index;
