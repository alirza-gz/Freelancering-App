import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";

const MobileNavLink = ({ MenuItems, path }) => {
  return (
    <>
      <nav className="flex md:hidden">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <ul>
            <li>
              <Link
                className="text-secondary-500 font-DanaBold hover:text-primary-700 transition-colors"
                to={path}
              >
                <button className="flex-center size-10 bg-secondary-50 border border-secondary-200 rounded-full child:size-7 child:text-secondary-400">
                  <HiOutlineUser className="w-5 h-5" />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileNavLink;
