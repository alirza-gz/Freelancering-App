import React from "react";
import { NavLink } from "react-router-dom";

function NavItems({ menuItems, onCloseHandler }) {
  const navlinkClasses =
    "flex items-center gap-x-2 h-10 px-3 rounded-lg dark:text-white transition-colors";

  return (
    <div className="w-full space-y-4 md:space-y-6 font-DanaBold">
      {menuItems.map(({ id, link, icon, title }) => {
        return (
          <React.Fragment key={id}>
            <NavLink
              onClick={onCloseHandler}
              to={link}
              className={({ isActive }) =>
                isActive
                  ? `bg-primary-900 text-white hover:bg-primary-800 ${navlinkClasses}`
                  : `bg-gray-200/50 hover:bg-gray-200 hover:dark:bg-gray-400 ${navlinkClasses}`
              }
            >
              {icon}
              {title}
            </NavLink>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default NavItems;
