import React, { useState } from "react";
import { useDarkMode } from "../../Context/DarkModeContext";
import DarkModeLogo from "../../Assets/Images/Logo/DarkModeLogo.png";
import LightModeLogo from "../../Assets/Images/Logo/LightModeLogo.png";
import { Link } from "react-router-dom";
import DarkModeToggle from "../../UI/DarkModeToggle";
import MobileNavLink from "../../UI/MobileNavLink";
import useUser from "../Authentication/useUser";
import { HiOutlineUser } from "react-icons/hi2";
import { HiUserAdd } from "react-icons/hi";

const MenuItems = {
  USER: {
    link: "/complete-profile",
  },
  LOGIN: {
    link: "/auth",
  },
  ADMIN: {
    link: "/admin/dashboard",
  },
  OWNER: {
    link: "/owner/dashboard",
  },
  FREELANCER: {
    link: "/freelancer/dashboard",
  },
};

const HomeHeader = () => {
  const { isDarkMode } = useDarkMode();
  const { user } = useUser();

  return (
    <>
      <header className="w-full flex-between bg-secondary-0 h-28 border border-secondary-200 rounded-xl my-8 px-3 py-2">
        {/* Logo */}
        <div>
          {isDarkMode ? (
            <img
              src={DarkModeLogo}
              alt="alirezagholizadeh.ir"
              className="w-40"
            />
          ) : (
            <img
              src={LightModeLogo}
              alt="alirezagholizadeh.ir"
              className="w-40"
            />
          )}
        </div>
        <div className="flex items-center md:gap-x-3">
          <div className="hidden md:block">
            <Link
              className="text-secondary-500 font-DanaBold hover:text-primary-700 transition-colors"
              to={user ? MenuItems[user.role].link : MenuItems["LOGIN"].link}
            >
              <button className="flex-center size-10 bg-secondary-50 border border-secondary-200 rounded-full child:size-7 child:text-secondary-500">
                <HiOutlineUser />
              </button>
            </Link>
          </div>
          <MobileNavLink
            MenuItems={MenuItems}
            path={user ? MenuItems[user.role].link : MenuItems["LOGIN"].link}
          />
          <div>
            <DarkModeToggle />
          </div>
        </div>
      </header>
    </>
  );
};

export default HomeHeader;
