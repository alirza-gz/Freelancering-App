import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  function ChangeFilterHandler(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex-center gap-x-2 text-sm">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 p-1 border border-secondary-100 bg-secondary-0 rounded-lg">
        {options.map(({ label, value }) => {
          const isActive = value === currentFilter;
          return (
            <React.Fragment key={value}>
              <button
                disabled={isActive}
                onClick={() => ChangeFilterHandler(value)}
                className={`whitespace-nowrap rounded-md hover:bg-gray-200 dark:hover:bg-secondary-100 dark:bg-transparent px-4 py-1.5 font-DanaBold transition-colors ${
                  isActive
                    ? "!bg-primary-900 text-white hover:bg-primary-800"
                    : "bg-secondary-0 text-secondary-800"
                }`}
              >
                {label}
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
