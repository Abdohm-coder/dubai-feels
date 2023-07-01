"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  categorieMobileItems,
} from "../../data/mainMenuData";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";

const MobileMenu = () => {
  const router = useRouter();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <img src="/img/general/logo-dark.svg" alt="brand" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close">
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <ProSidebarProvider>
        <Sidebar width="400" backgroundColor="#fff">
          <Menu>
            <MenuItem
              component={
                <Link
                  href="/about"
                  className={
                    router.pathname === "/about" ? "menu-active-link" : ""
                  }
                />
              }>
              About
            </MenuItem>
            {/* End About  Menu */}

            <SubMenu label="Experiences">
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
                      {item.menuItems.map((menu) => (
                        <MenuItem
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
            </SubMenu>
            {/* End  All Categories Menu */}

            <MenuItem
              component={
                <Link
                  href="/contact"
                  className={
                    router.pathname === "/contact" ? "menu-active-link" : ""
                  }
                />
              }>
              Contact
            </MenuItem>
            {/* End Contact  Menu */}
          </Menu>
        </Sidebar>
      </ProSidebarProvider>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
