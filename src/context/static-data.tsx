import { fetchTours } from "@/settings/site.settings";
import { ToursRes } from "@/types/response-type";
import { useContext, createContext, useState, useEffect } from "react";

export const DataContext = createContext<{
  staticData: ToursRes["result"];
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
}>({
  customerInfo: {
    full_name: "",
    email: "",
    phone: "",
    address_1: "",
    address_2: "",
    state: "",
    zip: "",
    special_request: "",
  },
  setCustomerInfo: () => {},
  staticData: [],
});

export const DataProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [staticData, setStaticData] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTours({
        countryId: 1,
        cityId: 1,
      });
      setStaticData(data ?? []);
    };
    fetchData();
  }, []);
  return (
    <DataContext.Provider value={{ staticData, customerInfo, setCustomerInfo }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useDataContext must used inside DataProvider");

  return context;
};
