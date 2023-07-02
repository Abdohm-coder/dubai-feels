import Seo from "@/components/common/Seo";
import Header11 from "@/components/header/header-11";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/tour-list/tour-list-v1/TopHeaderFilter";
import TourProperties from "@/components/tour-list/tour-list-v1/TourProperties";
import { useRouter } from "next/router";
import { capitalizeString } from "@/utils/capitalize-string";

const Index = () => {
  const { query } = useRouter();
  const id = query["category-page"] as string;
  const title = capitalizeString(id?.replaceAll("-", " "));
  return (
    <>
      <Seo pageTitle={`Dubai ${title}`} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <section className="pt-40 pb-40 bg-light-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-30 fw-600">{title} in Dubai</h1>
              </div>
              {/* End text-center */}
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      {/* Top SearchBanner */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div>
              <TopHeaderFilter />
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30">
                <TourProperties />
              </div>
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <DefaultFooter />
    </>
  );
};

export default Index;
