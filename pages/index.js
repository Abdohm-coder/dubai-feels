import Wrapper from "./layout/wrapper";
import Home5 from "./home/home_5";
import { useEffect } from "react";
import axios from "axios";

const MainRoot = () => {

  useEffect(() => {
    const fetchData = async() => {

      const response = await axios.get("https://www.raynab2b.com/api/Tour/countries");
      console.log("Data from Frontend: ", response)
    }
    fetchData();
    const fetchApi = async () => {
      const response = await axios.get("/api/countries");
      console.log("Data from Nodejs", response)
    } 
    fetchApi();
  }, [])
  return (
    <Wrapper>
      <Home5 />
    </Wrapper>
  );
};

export default MainRoot;
