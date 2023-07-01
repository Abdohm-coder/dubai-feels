import Link from "next/link";
import Social from "../../common/social/Social";

const Copyright = () => {
  return (
    <div className="row justify-between items-center y-gap-10">
      <div className="col-auto">
        <div className="row x-gap-30 y-gap-10">
          <div className="col-auto">
            <div className="d-flex items-center">
              © {new Date().getFullYear()} by
              <span
                href="https://themeforest.net/user/ib-themes"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer">
                DubaiFeel.com
              </span>
              All rights reserved.
            </div>
          </div>
          {/* End .col */}
          <div className="col-auto">
            <div className="d-flex x-gap-15">
              <Link href="/terms-and-conditions">Terms</Link>
              <Link href="/sitemap">Site Map</Link>
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default Copyright;
