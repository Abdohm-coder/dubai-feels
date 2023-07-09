import Link from "next/link";
import { useRouter } from "next/router";
import { isActiveLink } from "@/utils/linkActiveChecker";
import { categorieMobileItems } from "@/data/mainMenuData";
import { Menu, MenuItem, ProSidebarProvider, SubMenu } from "react-pro-sidebar";

const CategoriesMegaMenu = () => {
  const router = useRouter();

  // const itemList = [
  //   "Flying Experiences",
  //   "Desert Safari",
  //   "City Tours",
  //   "Cruises",
  //   "Water Activities",
  //   "Theme Parks & Water Parks",
  //   "Limousine Tours",
  //   "Luxury Yacht Tours",
  //   { name: "Private Transfers", routePath: "/private-transfers" },
  //   { name: "Adventure Tours", routePath: "/adventure-tours" },
  //   { name: "Sightseeing", routePath: "/sightseeing" },
  // ];

  return (
    <ProSidebarProvider>
      <Menu>
        {categorieMobileItems.map((item) => (
          <>
            {item.routePath ? (
              <MenuItem
                key={`item-${item.title}`}
                component={
                  <Link
                    href={`/dubai-activities${item.routePath}`}
                    className={
                      isActiveLink(
                        `/dubai-activities${item.routePath}`,
                        router.asPath
                      )
                        ? "menu-active-link"
                        : ""
                    }
                  />
                }>
                {item.title}
              </MenuItem>
            ) : (
              <SubMenu label={item.title} key={item.id}>
                {item.menuItems?.map((menu) => (
                  <MenuItem
                    style={{ paddingLeft: "9px" }}
                    key={`item-${menu.name}`}
                    component={
                      <Link
                        href={`/dubai-activities${menu.routePath}`}
                        className={
                          isActiveLink(
                            `/dubai-activities${menu.routePath}`,
                            router.asPath
                          )
                            ? "menu-active-link"
                            : ""
                        }
                      />
                    }>
                    {menu.name}
                  </MenuItem>
                ))}
              </SubMenu>
            )}
          </>
        ))}
      </Menu>
    </ProSidebarProvider>
  );
};

export default CategoriesMegaMenu;
