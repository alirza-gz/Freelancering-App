import React from "react";
import HorizontalLine from "./HorizontalLine";
import DarkModeLogo from "./../Assets/Images/Logo/DarkModeLogo.png";
import LightModeLogo from "./../Assets/Images/Logo/LightModeLogo.png";
import { useDarkMode } from "../Context/DarkModeContext";
import { Link } from "react-router-dom";

const AppSidebar = ({ children }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <aside className="hidden md:flex flex-col items-center row-start-1 row-span-2 p-4">
      {isDarkMode ? (
        <Link to="/">
          <img src={DarkModeLogo} alt="alirezagholizadeh.ir" />
        </Link>
      ) : (
        <Link to="/">
          <img src={LightModeLogo} alt="alirezagholizadeh.ir" />
        </Link>
      )}
      <HorizontalLine />
      {children}
    </aside>
  );
};

export default AppSidebar;
