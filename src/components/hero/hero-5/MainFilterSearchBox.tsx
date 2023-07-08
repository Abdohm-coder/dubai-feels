import Router from "next/router";
import DateSearch from "../DateSearch";
import GuestSearch from "./GuestSearch";

const MainFilterSearchBox = () => {
  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    Router.push("/search?keyword=");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mainSearch bg-white pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1 mt-35"
      data-aos="fade-up"
      data-aos-delay="600">
      <div className="d-flex items-center">
        <div className="px-30 flex-fill lg:py-18 lg:px-0">
          <div className="form-input">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">Tour Name</label>
          </div>
        </div>
        {/* End tour input */}

        <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Check in - Check out</h4>
            <DateSearch />
          </div>
        </div>
        {/* End check-in-out */}

        <div className="button-item">
          <button
            className="mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white"
            type="submit">
            <i className="icon-search text-20 mr-10" />
            Search
          </button>
        </div>
        {/* End search button_item */}
      </div>
    </form>
  );
  {
    /* End .mainSearch */
  }
};

export default MainFilterSearchBox;
