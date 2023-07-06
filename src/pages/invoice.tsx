import OrderSubmittedInfo from "@/components/cart/OrderSubmittedInfo";
import React from "react";

const Invoice = () => {
  return (
    <div>
      <OrderSubmittedInfo
        customerInfo={{
          full_name: "",
          email: "",
          phone: "",
          address_1: "",
          address_2: "",
          state: "",
          zip: "",
          special_request: "",
        }}
      />
    </div>
  );
};

export default Invoice;
