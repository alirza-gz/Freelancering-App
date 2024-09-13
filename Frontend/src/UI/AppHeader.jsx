import React, { useState } from "react";
import useUser from "../Features/Authentication/useUser";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../Features/Authentication/UserAvatar";
import DashboardMobileMenu from "./DashboardMobileMenu";
import NavItems from "./NavItems";
import { adminMenuItems } from "../Features/Admin/AdminLayout";
import { freeLancerMenuItems } from "../Features/Freelancer/FreelancerLayout";
import { ownerMenuItems } from "../Features/Owner/OwnerLayout";
import { Fade as Hamburger } from "hamburger-react";

const AppHeader = () => {
  const MenuItems = {
    ADMIN: adminMenuItems,
    OWNER: ownerMenuItems,
    FREELANCER: freeLancerMenuItems,
  };
  const { isLoading, user } = useUser();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <section className=" font-DanaBold mt-12 mb-20">
      <div className={`${isLoading && "blur-md opacity-55"} flex-between`}>
        <button
          className="md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <Hamburger
            toggled={showMobileMenu}
            toggle={setShowMobileMenu}
            size={27}
          />
        </button>
        <UserAvatar />
        <HeaderMenu />
      </div>
      <div className="md:hidden relative">
        <div
          className={`${
            showMobileMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          } transform transition-all duration-300 ease-in-out absolute inset-0 z-10`}
        >
          <DashboardMobileMenu>
            <NavItems
              menuItems={MenuItems[user?.role]}
              onCloseHandler={() => setShowMobileMenu((prev) => !prev)}
            />
          </DashboardMobileMenu>
        </div>
      </div>
    </section>
  );
};

export default AppHeader;
