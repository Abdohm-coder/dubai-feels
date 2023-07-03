import { fetchTours } from "@/settings/site.settings";
import { ToursRes } from "@/types/response-type";
import { useContext, createContext, useState, useEffect } from "react";

export const DataContext = createContext<{
  staticData: ToursRes["result"];
}>({
  staticData: [],
});

export const DataProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [staticData, setStaticData] = useState([]);

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
    <DataContext.Provider value={{ staticData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useDataContext must used inside DataProvider");

  return context;
};
