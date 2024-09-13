import React from "react";
import AppLayout from "../../UI/AppLayout";
import AppSidebar from "../../UI/AppSidebar";
import { HiOutlineHome } from "react-icons/hi";
import { BiListUl } from "react-icons/bi";
import NavItems from "../../UI/NavItems";

export const ownerMenuItems = [
  {
    id: 1,
    link: "dashboard",
    icon: <HiOutlineHome />,
    title: "نمای کلی",
  },
  {
    id: 2,
    link: "projects",
    icon: <BiListUl />,
    title: "پروژه ها",
  },
];

const OwnerLayout = () => {
  return (
    <AppLayout>
      <AppSidebar>
        <NavItems menuItems={ownerMenuItems} />
      </AppSidebar>
    </AppLayout>
  );
};

export default OwnerLayout;
