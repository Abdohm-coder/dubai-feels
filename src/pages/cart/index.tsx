import Seo from "@/components/common/Seo";
import Header11 from "@/components/header/header-11";
import DefaultFooter from "@/components/footer/default";
import StepperBooking from "@/components/cart/stepper-booking";

const Index = () => {
  return (
    <>
      <Seo pageTitle="Cart" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <section className="pt-40 layout-pb-md">
        <div className="container">
          <StepperBooking />
        </div>
        {/* End container */}
      </section>
      {/* End stepper */}

      <DefaultFooter />
    </>
  );
};

export default Index;
