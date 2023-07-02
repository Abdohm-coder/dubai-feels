import axios from "axios";

export const fetchCountries = async () => {
  try {
    const response = await axios.post("/api/getData", {
      url: "Tour/countries",
    });
    return response.data;
  } catch (err) {
    console.error("get countries err: ", err);
  }
  return [];
};

export const fetchCities = async (countryId) => {
  try {
    const response = await axios.post("/api/getData", {
      CountryId: countryId,
      url: "Tour/cities",
    });
    return response.data;
  } catch (err) {
    console.error("get cities err: ", err);
  }
  return [];
};

export const fetchTours = async ({ countryId, cityId }) => {
  try {
    const response = await axios.post("/api/getData", {
      url: "Tour/tourstaticdata",
      countryId,
      cityId,
    });
    return response.data;
  } catch (err) {
    console.error("get tours err: ", err);
  }
  return [];
};

export const fetchTourById = async ({
  countryId,
  cityId,
  tourId,
  contractId,
  travelDate,
}) => {
  try {
    const response = await axios.post("/api/getData", {
      url: "Tour/tourStaticDataById",
      countryId,
      cityId,
      tourId,
      contractId,
      travelDate,
    });
    return response.data;
  } catch (err) {
    console.error("get tour id err: ", err);
  }
  return [];
};

export const fetchTourOptionById = async ({ tourId, contractId }) => {
  try {
    const response = await axios.post("/api/getData", {
      url: "Tour/touroptionstaticdata",
      tourId,
      contractId,
    });
    return response.data;
  } catch (err) {
    console.error("get tour option id err: ", err);
  }
  return [];
};

export const fetchTourList = async ({ countryId, cityId, travelDate }) => {
  try {
    const response = await axios.post("/api/getData", {
      url: "Tour/tourlist",
      countryId,
      cityId,
      travelDate,
    });
    return response.data;
  } catch (err) {
    console.error("get tour list err: ", err);
  }
  return [];
};

export const fetchTourOption = async ({
  tourId,
  contractId,
  travelDate,
  noOfAdult,
  noOfChild,
  noOfInfant,
}) => {
  try {
    const response = await axios.post("/api/getData", {
      url: "Tour/touroption",
      tourId,
      contractId,
      travelDate,
      noOfAdult,
      noOfChild,
      noOfInfant,
    });
    return response.data;
  } catch (err) {
    console.error("get tour list err: ", err);
  }
  return [];
};

export const fetchTourAvailability = async ({
  tourId,
  contractId,
  travelDate,
  tourOptionId,
  transferId,
  adult,
  child,
  infant,
}) => {
  try {
    const response = await axios.post("/api/getData", {
      url: "Tour/availability",
      tourId,
      contractId,
      travelDate,
      tourOptionId,
      transferId,
      adult,
      child,
      infant,
    });
    return response.data;
  } catch (err) {
    console.error("get tour availability err: ", err);
  }
  return [];
};

export const fetchTourBooking = async ({
  uniqueNo,
  tourId,
  optionId,
  adult,
  child,
  infant,
  tourDate,
  timeSlotId,
  startTime,
  transferId,
  pickup,
  adultRate,
  childRate,
  serviceTotal,
  passengers,
}) => {
  try {
    const response = await axios.post("/api/getData", {
      url: "Booking/bookings",
      uniqueNo,
      TourDetails: [
        {
          tourId,
          optionId,
          adult,
          child,
          infant,
          tourDate,
          timeSlotId,
          startTime,
          transferId,
          pickup,
          adultRate,
          childRate,
          serviceTotal,
        },
      ],
      passengers,
    });
    return response.data;
  } catch (err) {
    console.error("get tour booking err: ", err);
  }
  return [];
};

export const fetchTicketDetails = async ({
  uniqNO,
  bookingId,
  referenceNo,
  serviceUniqueId,
}) => {
  try {
    const response = await axios.post("/api/getData", {
      url: "Booking/GetBookedTickets",
      uniqNO,
      referenceNo,
      bookedOption: [
        {
          serviceUniqueId,
          bookingId,
        },
      ],
    });
    return response.data;
  } catch (err) {
    console.error("get cancel booking err: ", err);
  }
  return [];
};

export const fetchCancelBooking = async ({
  bookingId,
  referenceNo,
  cancellationReason,
}) => {
  try {
    const response = await axios.post("/api/getData", {
      url: "Booking/cancelbooking",
      bookingId,
      referenceNo,
      cancellationReason,
    });
    return response.data;
  } catch (err) {
    console.error("get cancel booking err: ", err);
  }
  return [];
};
