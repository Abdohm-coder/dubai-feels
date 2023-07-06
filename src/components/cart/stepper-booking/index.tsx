import React, { useState } from "react";
import CustomerInfo from "../CustomerInfo";
import OrderSubmittedInfo from "../OrderSubmittedInfo";
import Stripe from "stripe";
import PaymentInfo from "../PaymentInfo";

const Index: React.FC<{ paymentIntent: Stripe.PaymentIntent | null }> = ({
  paymentIntent,
}) => {
  const [currentStep, setCurrentStep] = useState(paymentIntent ? 2 : 0);
  const [customerInfo, setCustomerInfo] = useState({
    full_name: "",
    email: "",
    phone: "",
    address_1: "",
    address_2: "",
    state: "",
    zip: "",
    special_request: "",
  });

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    {
      title: "Personal Details",
      stepNo: "1",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: (
        <CustomerInfo
          nextStep={nextStep}
          customerInfo={customerInfo}
          setCustomerInfo={setCustomerInfo}
        />
      ),
    },
    {
      title: "Payment Details",
      stepNo: "2",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: (
        <PaymentInfo email={customerInfo.email} previousStep={previousStep} />
      ),
    },
    {
      title: "Final Step",
      stepNo: "3",
      stepBar: "",
      content: <OrderSubmittedInfo data={paymentIntent!} />,
    },
  ];

  const renderStep = () => {
    const { content } = steps[currentStep];
    return <>{content}</>;
  };

  // price: "price_1NQ9GSBYd9B4CHMmZzd0XMrD",

  return (
    <>
      <div className="row x-gap-40 y-gap-30 items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="col-auto">
              <div className="d-flex items-center transition">
                <div
                  className={
                    currentStep === index
                      ? "active size-40 rounded-full flex-center bg-blue-1"
                      : "size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500"
                  }>
                  {currentStep === index ? (
                    <>
                      <i className="icon-check text-16 text-white"></i>
                    </>
                  ) : (
                    <>
                      <span>{step.stepNo}</span>
                    </>
                  )}
                </div>

                <div className="text-18 fw-500 ml-10"> {step.title}</div>
              </div>
            </div>
            {/* End .col */}

            {step.stepBar}
          </React.Fragment>
        ))}
      </div>
      {/* End stepper header part */}

      <div>{renderStep()}</div>
      {/* End main content */}
    </>
  );
};

export default Index;
