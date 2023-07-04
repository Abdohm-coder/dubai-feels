import PricingSummary from "./sidebar/PricingSummary";
import PaymentSchedule from "./sidebar/PaymentSchedule";

const PaymentInfo = () => {
  return (
    <>
      <div className="col-xl-7 col-lg-8">
        <div className="mt-40">
          <h3 className="text-22 fw-500 mb-20">Fill Your Payment Card Info</h3>

          <div className="row x-gap-20 y-gap-20 pt-20">
            <div className="col-md-6">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Card holder name *
                </label>
              </div>

              <div className="form-input mt-20">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Credit/debit card number *
                </label>
              </div>

              <div className="row x-gap-20 y-gap-20 pt-20">
                <div className="col-md-6">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      Expiry date *
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      CVC/CVV *
                    </label>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End col */}
            <div className="col-md-6">
              <img
                src="/img/booking-pages/card.png"
                alt="image"
                className="h-full"
              />
            </div>
            {/* End col */}
          </div>
          {/* End .row */}
        </div>
        {/* End mt-40 */}

        <div className="w-full h-1 bg-border mt-40 mb-40" />

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
          <PricingSummary />
          <PaymentSchedule />
        </div>
      </div>
      {/* payment sidebar info */}
    </>
  );
};

export default PaymentInfo;
