import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import Seo from "@/components/common/Seo";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import NotFound from "@/components/common/NotFound";

const Index = () => {
  return (
    <>
      <Seo pageTitle="404" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <NotFound />
      {/* End 404 section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
