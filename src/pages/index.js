import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Header5 from "../components/header/header-5";
import Hero5 from "../components/hero/hero-5";
import Link from "next/link";
import Footer4 from "../components/footer/footer-4";
import Tours2 from "../components/tours/Tours2";

import { useEffect } from "react";
import axios from "axios";
import { fetchCountries } from "../settings/site.settings";

const MainRoot = () => {
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCountries();
      console.log("Data from Frontend: ", response);
    };
    fetchData();
  }, []);

  return (
    <>
      <Seo pageTitle="Local Dubai Tours & Activities with Best Offers & Deals" />
      {/* End Page Title */}

      <Header5 />
      {/* End Header 5 */}

      <Hero5 />
      {/* End Hero 5 */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">THINGS TO DO IN DUBAI</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  DIY recommendations from locals & travel experts
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1">
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Tours Sections */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  POPULAR ATTRACTIONS IN DUBAI
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Most popular Dubai-area attractions
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1">
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Popular Attractions */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">TRAVEL GUIDE</h2>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Travel Guide */}

      <Footer4 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(MainRoot), { ssr: false });
