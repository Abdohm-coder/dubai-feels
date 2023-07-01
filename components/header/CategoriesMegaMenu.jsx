import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { categorieMegaMenuItems } from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

const CategoriesMegaMenu = () => {
  const router = useRouter();

  const itemList = [
    "Flying Experiences",
    "Desert Safari",
    "City Tours",
    "Cruises",
    "Water Activities",
    "Theme Parks & Water Parks",
    "Limousine Tours",
    "Luxury Yacht Tours",
    { name: "Private Transfers", routePath: "/private-transfers" },
    { name: "Adventure Tours", routePath: "/adventure-tours" },
    { name: "Sightseeing", routePath: "/sightseeing" },
  ];

  return (
    <Tabs className="tabs -underline-2 js-tabs">
      <TabList className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 pb-30 js-tabs-controls">
        {itemList.map((item, i) => (
          <Tab className="col-auto" key={i}>
            <button
              onClick={() => {
                if (typeof item !== "string")
                  router.push(`/dubai-activities${item.routePath}`);
              }}
              className="tabs__button text-light-1 fw-500 js-tabs-button">
              {typeof item === "string" ? item : item.name}
            </button>
          </Tab>
        ))}
      </TabList>
      {/* End tab-controls */}

      <div className="tabs__content js-tabs-content">
        {categorieMegaMenuItems.map((megaMenu) => (
          <TabPanel className={"row"} key={megaMenu.id}>
            {megaMenu?.menuCol?.map((megaCol, i) => (
              <div
                key={i}
                className={`col-4
                  ${
                    isActiveLink(
                      `/dubai-activities${megaCol.routePath}`,
                      router.asPath
                    )
                      ? "current"
                      : ""
                  }}`}>
                <Link href={`/dubai-activities${megaCol.routePath}`}>
                  {megaCol.name}
                </Link>
              </div>
            ))}
          </TabPanel>
        ))}
      </div>
      {/* End tab_content */}
    </Tabs>
  );
};

export default CategoriesMegaMenu;
