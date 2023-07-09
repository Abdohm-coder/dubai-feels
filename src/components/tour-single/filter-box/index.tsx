import GuestSearch from "./GuestSearch";
import DateSearch from "./DateSearch";
import {
  fetchTourAvailability,
  // fetchTourOptionById,
} from "@/settings/site.settings";
import { useState } from "react";
import { TourAvailabilityRes, TourOptionsRes } from "@/types/response-type";
// import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { toursData } from "@/data/tours";

const Index = ({ tour }: { tour?: (typeof toursData)[0] }) => {
  const router = useRouter();
  const [isAvailable, setIsAvailable] = useState(false);
  const [tourOptions, setTourOptions] = useState<TourOptionsRes["touroption"]>(
    []
  );

  const addToCart = () => {
    localStorage.setItem("booking-details", JSON.stringify(tour));
    router.push("/cart");
  };

  const checkAvailability = async () => {
    setIsAvailable(true);
    const response: TourAvailabilityRes = await fetchTourAvailability({
      tourId: 1,
      adult: 1,
      child: 1,
      infant: 0,
      contractId: 1,
      tourOptionId: 1,
      transferId: 1,
      travelDate: "",
    });
    // const message = response.result[0].message;
    // if (response.result[0].status === 1) {
    //   setIsAvailable(true);
    //   toast.success(message);
    //   const options: TourOptionsRes = await fetchTourOptionById({
    //     tourId: 1,
    //     contractId: 1,
    //   });
    //   setTourOptions(options.result[0].touroption ?? []);
    // } else {
    //   setIsAvailable(false);
    //   toast.warning(message);
    // }
  };

  return (
    <>
      <div className="col-12">
        <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Date</h4>
            <DateSearch />
          </div>
        </div>
        {/* End check-in-out */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <GuestSearch />
        {/* End guest */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <button
          onClick={checkAvailability}
          className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white">
          Book Now
        </button>
      </div>
      {/* End .col-12 */}
      {isAvailable && (
        <>
          <div className="col-12">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example">
                {tourOptions.map(({ optionName, tourOptionId }) => (
                  <option key={tourOptionId} value={tourOptionId}>
                    {optionName}
                  </option>
                ))}
              </select>
              <label htmlFor="floatingSelect">Select an Option</label>
            </div>
            {/* End check-in-out */}
          </div>
          {/* End .col-12 */}
          <div className="col-12">
            <button
              onClick={addToCart}
              className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white">
              Add To Cart
            </button>
          </div>
          {/* End .col-12 */}
        </>
      )}
    </>
  );
};

export default Index;
