import Link from "next/link";
import BookingDetails from "./sidebar/BookingDetails";

interface IProps {
  customerInfo: {
    full_name: string;
    email: string;
    phone: string;
    address_1: string;
    address_2: string;
    state: string;
    zip: string;
    special_request: string;
  };
  setCustomerInfo: React.Dispatch<
    React.SetStateAction<{
      full_name: string;
      email: string;
      phone: string;
      address_1: string;
      address_2: string;
      state: string;
      zip: string;
      special_request: string;
    }>
  >;
  nextStep: () => void;
}

const CustomerInfo: React.FC<IProps> = ({
  customerInfo,
  setCustomerInfo,
  nextStep,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;

    // Store the info in localeStorage
    localStorage.setItem("customer_info", JSON.stringify(customerInfo));
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xl-7 col-lg-8 mt-30">
          <div className="py-15 px-20 rounded-4 text-15 bg-blue-1-05">
            Sign in to book with your saved details or{" "}
            <Link href="/signup" className="text-blue-1 fw-500">
              register
            </Link>{" "}
            to manage your bookings on the go!
          </div>
          {/* End register notify */}

          <h2 className="text-22 fw-500 mt-40 md:mt-24">
            Let us know who you are
          </h2>

          <div className="row x-gap-20 y-gap-20 pt-20">
            <div className="col-12">
              <div className="form-input ">
                <input
                  type="text"
                  required
                  value={customerInfo.full_name}
                  onChange={(e) =>
                    setCustomerInfo((state) => ({
                      ...state,
                      full_name: e.target.value,
                    }))
                  }
                />
                <label className="lh-1 text-16 text-light-1">Full Name</label>
              </div>
            </div>
            {/* End col-12 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input
                  type="email"
                  required
                  value={customerInfo.email}
                  onChange={(e) =>
                    setCustomerInfo((state) => ({
                      ...state,
                      email: e.target.value,
                    }))
                  }
                />
                <label className="lh-1 text-16 text-light-1">Email</label>
              </div>
            </div>
            {/* End col-12 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input
                  type="text"
                  required
                  value={customerInfo.phone}
                  onChange={(e) =>
                    setCustomerInfo((state) => ({
                      ...state,
                      phone: e.target.value,
                    }))
                  }
                />
                <label className="lh-1 text-16 text-light-1">
                  Phone Number
                </label>
              </div>
            </div>
            {/* End col-12 */}

            <div className="col-12">
              <div className="form-input ">
                <input
                  type="text"
                  required
                  value={customerInfo.address_1}
                  onChange={(e) =>
                    setCustomerInfo((state) => ({
                      ...state,
                      address_1: e.target.value,
                    }))
                  }
                />
                <label className="lh-1 text-16 text-light-1">
                  Address line 1
                </label>
              </div>
            </div>
            {/* End col-12 */}

            <div className="col-12">
              <div className="form-input ">
                <input
                  type="text"
                  value={customerInfo.address_2}
                  onChange={(e) =>
                    setCustomerInfo((state) => ({
                      ...state,
                      address_2: e.target.value,
                    }))
                  }
                />
                <label className="lh-1 text-16 text-light-1">
                  Address line 2
                </label>
              </div>
            </div>
            {/* End col-12 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input
                  type="text"
                  required
                  value={customerInfo.state}
                  onChange={(e) =>
                    setCustomerInfo((state) => ({
                      ...state,
                      state: e.target.value,
                    }))
                  }
                />
                <label className="lh-1 text-16 text-light-1">
                  State/Province/Region
                </label>
              </div>
            </div>
            {/* End col-12 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input
                  type="text"
                  required
                  value={customerInfo.zip}
                  onChange={(e) =>
                    setCustomerInfo((state) => ({
                      ...state,
                      zip: e.target.value,
                    }))
                  }
                />
                <label className="lh-1 text-16 text-light-1">
                  ZIP code/Postal code
                </label>
              </div>
            </div>
            {/* End col-12 */}

            <div className="col-12">
              <div className="form-input ">
                <textarea
                  rows={6}
                  defaultValue={""}
                  value={customerInfo.special_request}
                  onChange={(e) =>
                    setCustomerInfo((state) => ({
                      ...state,
                      special_request: e.target.value,
                    }))
                  }
                />
                <label className="lh-1 text-16 text-light-1">
                  Special Requests ( if any )
                </label>
              </div>
            </div>
            {/* End col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col-xl-7 */}

        <div className="col-xl-5 col-lg-4 mt-30">
          <div className="booking-sidebar">
            <BookingDetails />
          </div>
        </div>
      </div>
      {/* End Row */}
      <div className="row x-gap-20 y-gap-20 pt-20">
        <div className="col-auto">
          <button className="button h-60 px-24 -blue-1 bg-light-2" disabled>
            Previous
          </button>
        </div>
        {/* End prvious btn */}
        <div className="col-auto">
          <button
            className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
            type={"submit"}>
            Proceed to Payment
            <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
        {/* End next btn */}
      </div>
      {/* End stepper button */}
    </form>
  );
};

export default CustomerInfo;
