import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import DefaultHeader from "../components/header/default-header";
import DefaultFooter from "../components/footer/default";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Seo pageTitle="About" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item col-12">
          <Image
            width={1920}
            height={400}
            src="/img/pages/about/1.png"
            alt="image"
            priority
          />
        </div>
        {/* End section-bg__item */}

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="text-40 md:text-25 fw-600 text-white">
                Looking for joy?
              </h1>
              <div className="text-white mt-15">
                Your trusted trip companion
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End About Banner Section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
                <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20">
                  You can consider Dubai feel like the gateway to the world of
                  entertainment in Dubai for the global tourists. Assume us as
                  the Dubai gateway for you! We are always there to provide you
                  with the best possible activities around the world. You will
                  receive a special travel experience. We are a specialist
                  retailer to book your attraction, travel, and experience
                  tickets. We are working with a great number of experiences
                  (almost all the quality ones) in Dubai suitable for all the
                  global tourists. Operating with the best local providers from
                  all over the world in Dubai, we offer travel services,
                  products, and content, making sure that our clients are
                  perfectly informed and, in a position, to select the ideal
                  experience. We only present the best to all our clients at
                  Dubai feel! Our expert travel team handpicked products. Our
                  group is always looking for quality, unique travel experiences
                  to suit according to different interests and budgets clients.
                  This comprehensive process of selection of the activities,
                  trips, and tours has led to an increasing client base of over
                  150 nations worldwide. We are proud of our high client
                  satisfaction ratings of 90% (provided by an independent rating
                  agency). The Dubai feel is the tour company which only deals
                  with activities and experiences in Dubai only. We are the
                  members of top travel groups in the world and have a high
                  reputation of providing outstanding service in Dubai for all
                  sorts of activities. We made a portfolio website called Dubai
                  feel through which we sell our activities and tours to clients
                  across the globe coming to spend a meaningful holiday or for
                  some business activities while taking some time out to feel
                  the Dubai entertainment. We are constantly searching for
                  interesting talent and exciting projects to add to our
                  arsenal. We have a well-organized team to cover every aspect
                  of the business, including proper support functions, product
                  management, customer support, marketing, and technology. Each
                  team must be the finest in its class to service the ideal
                  model of business. For instance, the team of technology could
                  work on a model to allow cross-device customers to travel
                  through cloud technologies that offer both security and
                  opportunity to scale. The marketing group continues to try to
                  be present at the top position of the Google search results to
                  reach more potential clients. Customer support may help the
                  clients with their ideal advice and support to help them
                  choose their next ideal travel experience. At the same time,
                  the team of product management could use data to comprehend
                  what we may deliver to our market sections to keep on
                  expanding and evolving. Our compact yet efficient group of
                  professionals ensures accountability and ownership.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Choose Us section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });
