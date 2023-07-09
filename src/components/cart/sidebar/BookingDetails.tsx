import { useState, useEffect } from "react";
import Image from "next/image";
import { formatDate } from "@/utils/format-date";
import Link from "next/link";
import dayjs from "dayjs";

const BookingDetails = () => {
  const [bookingDetails, setBookingDetails] = useState<any>();

  useEffect(() => {
    // Get Booking Details from locale Storage
    const data = localStorage.getItem("booking-details");
    if (data) setBookingDetails(JSON.parse(data));
  }, []);

  return (
    <div className="px-30 py-30 border-light rounded-4">
      <div className="text-20 fw-500 mb-30">Your booking details</div>
      <div className="row x-gap-15 y-gap-20">
        <div className="col-auto">
          <Image
            width={140}
            height={140}
            src={bookingDetails?.slideImg[0] ?? "/img/backgrounds/1.png"}
            alt="image"
            className="size-140 rounded-4 object-cover"
          />
        </div>
        {/* End .col */}
        <div className="col">
          <div className="d-flex x-gap-5 pb-10">
            {new Array(Math.trunc(bookingDetails?.reviewCount ?? 5))
              .fill("")
              .map((_, i) => (
                <i
                  key={`review ${i}`}
                  className="icon-star text-yellow-1 text-10"
                />
              ))}
          </div>
          {/* End ratings */}
          <div className="lh-17 fw-500">
            {bookingDetails?.tourName ??
              `Great Northern Hotel, a Tribute Portfolio Hotel, London`}
          </div>
          <div className="text-14 lh-15 mt-5">
            {bookingDetails?.cityId ?? `Westminster Borough, London`}
          </div>
          <div className="row x-gap-10 y-gap-10 items-center pt-10">
            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="size-30 flex-center bg-blue-1 rounded-4">
                  <div className="text-12 fw-600 text-white">
                    {bookingDetails?.reviewCount ?? `4.8`}
                  </div>
                </div>
                <div className="text-14 fw-500 ml-10">Exceptional</div>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-14">
                {bookingDetails?.rating ?? `3,014`} reviews
              </div>
            </div>
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}

      <div className="border-top-light mt-30 mb-20" />
      <div className="row y-gap-20 justify-between">
        <div className="col-auto">
          <div className="text-15">Check-in</div>
          <div className="fw-500">
            {bookingDetails?.checkin
              ? formatDate({
                  date: bookingDetails.checkin * 1000,
                  format: "ll",
                })
              : `Thu 21 Apr 2022`}
          </div>
          {/* <div className="text-15 text-light-1">15:00 – 23:00</div> */}
        </div>
        <div className="col-auto md:d-none">
          <div className="h-full w-1 bg-border" />
        </div>
        <div className="col-auto text-right md:text-left">
          <div className="text-15">Check-out</div>
          <div className="fw-500">
            {bookingDetails?.checkout
              ? formatDate({
                  date: bookingDetails.checkout * 1000,
                  format: "ll",
                })
              : `Sat 30 Apr 2022`}
          </div>
          {/* <div className="text-15 text-light-1">01:00 – 11:00</div> */}
        </div>
      </div>
      {/* End row */}
      <div className="border-top-light mt-30 mb-20" />
      <div>
        <div className="text-15">Total length of stay:</div>
        <div className="fw-500">
          {dayjs(bookingDetails?.checkout * 1000).diff(
            dayjs(bookingDetails?.checkin * 1000),
            "day"
          ) + 1}
          {` nights`}
        </div>
        <a href="#" className="text-15 text-blue-1 underline">
          Travelling on different dates?
        </a>
      </div>

      <div className="border-top-light mt-30 mb-20" />
      <div className="row y-gap-20 justify-between items-center">
        <div className="col-auto">
          <div className="text-15">You selected:</div>
          <div className="fw-500">
            {bookingDetails?.tourName ?? `Superior Double Studio`}
          </div>
          <Link
            href={`/activity/${bookingDetails?.tourId}`}
            className="text-15 text-blue-1 underline">
            Change your selection
          </Link>
        </div>
        <div className="col-auto">
          <div className="text-15">
            {bookingDetails?.guestCounts.rooms > 0 &&
              `${bookingDetails?.guestCounts.rooms} room,`}
            {bookingDetails?.guestCounts.adults > 0 &&
              `${bookingDetails?.guestCounts.adults} adult,`}
            {bookingDetails?.guestCounts.children > 0 &&
              `${bookingDetails?.guestCounts.children} children`}
          </div>
        </div>
      </div>
      {/* End row */}
    </div>
    // End px-30
  );
};

export default BookingDetails;
