import React from "react";
import ComponentTitle from "../../../UI/ComponentTitle";
import FilterDropDown from "../../../UI/FilterDropDown";
import useCategories from "../../../Hooks/useCategories";
import Filter from "../../../UI/Filter";

const sortOptions = [
  {
    label: "مرتب سازی (جدید ترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی (قدیمی ترین)",
    value: "earliest",
  },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

const ProjectHeader = () => {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex flex-col items-center gap-y-6 xs:gap-y-0 xs:flex-row xs:flex-between mb-4">
      <ComponentTitle title="لیست پروژه‌ها" />
      <div className="flex flex-col gap-y-4 md:flex-row md:flex-center md:gap-x-4">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown filterField="sort" options={sortOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            { value: "ALL", label: "دسته‌بندی(همه)" },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
