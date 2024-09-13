import React from "react";
import AppLayout from "../../UI/AppLayout";
import AppSidebar from "../../UI/AppSidebar";
import { HiOutlineHome } from "react-icons/hi";
import { BiCategory, BiListCheck } from "react-icons/bi";
import { HiListBullet, HiOutlineUserGroup } from "react-icons/hi2";
import NavItems from "../../UI/NavItems";

export const adminMenuItems = [
  {
    id: 1,
    link: "dashboard",
    icon: <HiOutlineHome />,
    title: "نمای کلی",
  },
  {
    id: 2,
    link: "users",
    icon: <HiOutlineUserGroup />,
    title: "کاربرها",
  },
  {
    id: 3,
    link: "projects",
    icon: <HiListBullet />,
    title: "پروژه‌ها",
  },
  {
    id: 4,
    link: "proposals",
    icon: <BiListCheck />,
    title: "درخواست‌ها",
  },

  {
    id: 5,
    link: "categories",
    icon: <BiCategory />,
    title: "دسته‌بندی‌ها",
  },
];

const AdminLayout = () => {
  return (
    <AppLayout>
      <AppSidebar>
        <NavItems menuItems={adminMenuItems} />
      </AppSidebar>
    </AppLayout>
  );
};

export default AdminLayout;
