import React from "react";
import NotAccessImg from "../../Assets/Images/NotAccess/NotAccess.svg";
import useMoveBack from "../../Hooks/useMoveBack";
import { IoIosArrowBack } from "react-icons/io";

const NotAccess = () => {
  const moveBack = useMoveBack();

  return (
    <div className="w-full container xl:max-w-screen-xl">
      <div className="sm:max-w-sm mx-auto flex justify-center mt-16">
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-xl font-bold text-secondary-600">
            شما به این صفحه دسترسی ندارید!
          </h1>
          <button
            className="flex items-center gap-x-1 text-primary-900"
            onClick={moveBack}
          >
            <span>برگشت</span>
            <IoIosArrowBack className="w-4 h-4" />
          </button>
        </div>
      </div>
      <img
        src={NotAccessImg}
        alt="Not Access"
        className="sm:max-w-lg mx-auto"
      />
    </div>
  );
};

export default NotAccess;
