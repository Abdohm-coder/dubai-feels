import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Stripe from "stripe";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

const OrderSubmittedInfo: React.FC<{
  data: Stripe.PaymentIntent;
}> = ({ data }) => {
  const router = useRouter();
  console.log(data);

  const [customerInfo, setCustomerInfo] = useState<{
    full_name: string;
    email: string;
    phone: string;
    address_1: string;
    address_2: string;
    state: string;
    zip: string;
    special_request: string;
  }>();

  useEffect(() => {
    setCustomerInfo(JSON.parse(localStorage.getItem("customer_info")!));
  }, []);

  return (
    <>
      <div className="order-completed-wrapper">
        <div className="d-flex flex-column items-center mt-40 lg:md-40 sm:mt-24">
          <div className="size-80 flex-center rounded-full bg-dark-3">
            <i className="icon-check text-30 text-white" />
          </div>
          <div className="text-30 lh-1 fw-600 mt-20">
            System, your order was submitted successfully!
          </div>
          {data.receipt_email && (
            <div className="text-15 text-light-1 mt-10">
              Booking details has been sent to: {data.receipt_email}
            </div>
          )}
        </div>
        {/* End header */}

        <div className="border-type-1 rounded-8 px-50 py-35 mt-40">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="text-15 lh-12">Order Number</div>
              <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                13119
              </div>
            </div>
            {/* End .col */}
            <div className="col-lg-3 col-md-6">
              <div className="text-15 lh-12">Date</div>
              <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                {dayjs(data.created * 1000).format("llll")}
              </div>
            </div>
            {/* End .col */}
            <div className="col-lg-3 col-md-6">
              <div className="text-15 lh-12">Total</div>
              <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                ${(data.amount / 100).toFixed(2)}
              </div>
            </div>
            {/* End .col */}
            <div className="col-lg-3 col-md-6">
              <div className="text-15 lh-12">Payment Method</div>
              <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">Card</div>
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* order price info */}

        <div className="border-light rounded-8 px-50 py-40 mt-40">
          <h4 className="text-20 fw-500 mb-30">Your Information</h4>
          <div className="row y-gap-10">
            <div className="col-12">
              <div className="d-flex justify-between ">
                <div className="text-15 lh-16">Full name</div>
                <div className="text-15 lh-16 fw-500 text-blue-1">
                  {customerInfo?.full_name}
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-12">
              <div className="d-flex justify-between border-top-light pt-10">
                <div className="text-15 lh-16">Email</div>
                <div className="text-15 lh-16 fw-500 text-blue-1">
                  {customerInfo?.email}
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-12">
              <div className="d-flex justify-between border-top-light pt-10">
                <div className="text-15 lh-16">Phone</div>
                <div className="text-15 lh-16 fw-500 text-blue-1">
                  {customerInfo?.phone}
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-12">
              <div className="d-flex justify-between border-top-light pt-10">
                <div className="text-15 lh-16">Address line 1</div>
                <div className="text-15 lh-16 fw-500 text-blue-1">
                  {customerInfo?.address_1}
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-12">
              <div className="d-flex justify-between border-top-light pt-10">
                <div className="text-15 lh-16">Address line 2</div>
                <div className="text-15 lh-16 fw-500 text-blue-1">
                  {customerInfo?.address_2}
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-12">
              <div className="d-flex justify-between border-top-light pt-10">
                <div className="text-15 lh-16">State/Province/Region</div>
                <div className="text-15 lh-16 fw-500 text-blue-1">
                  {customerInfo?.state}
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-12">
              <div className="d-flex justify-between border-top-light pt-10">
                <div className="text-15 lh-16">ZIP code/Postal code</div>
                <div className="text-15 lh-16 fw-500 text-blue-1">
                  {customerInfo?.zip}
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-12">
              <div className="d-flex justify-between border-top-light pt-10">
                <div className="text-15 lh-16">State</div>
                <div className="text-15 lh-16 fw-500 text-blue-1">
                  {customerInfo?.state}
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-12">
              <div className="d-flex justify-between border-top-light pt-10">
                <div className="text-15 lh-16">Special Requirements</div>
                <div className="text-15 lh-16 fw-500 text-blue-1">
                  {customerInfo?.special_request}
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End order information */}
      </div>
      {/* End Row */}
      <div className="row x-gap-20 y-gap-20 pt-20">
        {/* End prvious btn */}
        <div className="col-auto">
          <button
            className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
            onClick={() => router.push("/")}>
            Back to Homepage
            <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
        {/* End next btn */}
      </div>
      {/* End stepper button */}
    </>
  );
};

export default OrderSubmittedInfo;
