// type Res = {
//   statuscode: number;
//   error: string;
//   url: string;
//   count: number;
// };

export interface CountryRes {
  countryId: number;
  countryName: string;
}

export interface CityRes {
  cityId: number;
  cityName: string;
}

export interface ToursRes {
  tourId: number;
  countryId: number;
  countryName: string;
  cityId: number;
  cityName: string;
  tourName: string;
  reviewCount: number;
  rating: number;
  duration: string;
  imagePath: string;
  imageCaptionName: string;
  cityTourTypeId: number;
  cityTourType: string;
  tourShortDescription: string;
  cancellationPolicyName: string;
  isSlot: string;
  onlyChild: string;
  contractId: string;
}

export interface TourByIdRes {
  tourId: number;
  countryId: number;
  countryName: string;
  cityId: number;
  cityName: string;
  tourName: string;
  reviewCount: number;
  rating: number;
  duration: string;
  imagePath: string;
  imageCaptionName: string;
  cityTourTypeId: number;
  cityTourType: string;
  tourDescription: string;
  tourInclusion: string;
  raynaToursAdvantage: string;
  tourShortDescription: string;
  cancellationPolicyName: string;
  whatsInThisTour: string;
  importantInformation: string;
  itenararyDescription: string;
  usefulInformation: string;
  faqDetails: string;
  termsAndConditions: string;
  childCancellationPolicyName: string;
  childCancellationPolicyDescription: string;
  childAge: string;
  infantAge: string;
  infantCount: string;
  isSlot: string;
  onlyChild: string;
  contractId: string;
  tourImages: Array<{
    tourId: number;
    isFrontImage: number;
    isBannerImage: number;
    isBannerRotateImage: number;
    imagePath: string;
    imageCaptionName: string;
  }>;
  tourReview: Array<{
    id: number;
    tourId: number;
    reviewId: number;
    rating: number;
    reviewTitle: string;
    reviewContent: string;
    visitMonth: string;
    imagePath: string;
    guestName: string;
  }>;
}

export interface TourOptionsRes {
  touroption: Array<{
    tourId: number;
    tourOptionId: number;
    countryId: number;
    cityId: number;
    minPax: number;
    maxPax: number;
    duration: string;
    timeZone: string;
    optionName: string;
    childAge: string;
    infantAge: string;
    optionDescription: string;
    cancellationPolicy: string;
    cancellationPolicyDescription: string;
    childPolicyDescription: string;
    xmlcode: string;
    xmloptioncode: string;
  }>;
  operationdays: Array<{
    tourId: number;
    tourOptionId: number;
    monday: number;
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
    saturday: number;
    sunday: number;
  }>;
  specialdates: [];
  transfertime: Array<{
    tourId: number;
    tourOptionId: number;
    transferType: string;
    transferTime: string;
    duration: string;
  }>;
}

export interface TourListRes {
  tourId: number;
  contractId: number;
  amount: number;
  discount: number;
  sortOrder: number;
}

export interface TourOptionRes {
  tourId: number;
  tourOptionId: number;
  transferId: number;
  adultPrice: number;
  childPrice: number;
  infantPrice: number;
  withoutDiscountAmount: number;
  finalAmount: number;
  cutOff: number;
  isDefaultTransfer: number;
  inventoryId: number;
  startTime: string;
  departureTime: string;
  transferName: string;
  rateKey: string;
  disableChild: boolean;
  disableInfant: boolean;
  allowTodaysBooking: boolean;
  isSlot: boolean;
}

export interface TourTimeSlotRes {
  tourOptionId: number;
  timeSlotId: number;
  adultPrice: number;
  childPrice: number;
  available: number;
  timeSlot: string;
  isDynamicPrice: boolean;
}

export interface TourAvailabilityRes {
  status: number;
  productType: number;
  message: string;
}

export interface TourCancelationPolicyRes {
  tourId: number;
  optionId: number;
  percentage: number;
  fromDate: string;
  toDate: string;
}

export interface TourBookingRes {
  bookingId: number;
  refernceNo: string;
  status: string;
  serviceUniqueId: string;
  servicetype: string;
  confirmationNo: string;
  downloadRequired: boolean;
}

export interface TicketDetailsRes {
  bookingId: number;
  refernceNo: string;
  BookingStatus: string;
  ticketURL: string;
  optionName: string;
  validity: string;
  validityExtraDetails: string;
  printType: string;
  slot: string;
  pnrNumber: string;
  ticketDetails: Array<{
    barCode: string;
    type: string;
    noOfAdult: number;
    noOfchild: number;
  }>;
}
