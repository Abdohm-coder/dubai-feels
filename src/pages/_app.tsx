import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "@/components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "@/styles/index.scss";
import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataProvider } from "@/context/static-data";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <main>
      <ToastContainer />
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
      <SrollTop />
    </main>
  );
};

export default App;
