import React from "react";
import AppLayout from "../../UI/AppLayout";
import AppSidebar from "../../UI/AppSidebar";
import { HiOutlineHome } from "react-icons/hi";
import { BiFolderOpen, BiListUl } from "react-icons/bi";
import NavItems from "../../UI/NavItems";

export const freeLancerMenuItems = [
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
  {
    id: 3,
    link: "proposals",
    icon: <BiFolderOpen />,
    title: "درخواست‌ها",
  },
];

const FreelancerLayout = () => {
  return (
    <AppLayout>
      <AppSidebar>
        <NavItems menuItems={freeLancerMenuItems} />
      </AppSidebar>
    </AppLayout>
  );
};

export default FreelancerLayout;
