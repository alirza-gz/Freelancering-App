import { IoIosArrowBack } from "react-icons/io";
import useMoveBack from "../../Hooks/useMoveBack";
import NotFoundImg from "./../../Assets/Images/NotFound/NotFound.svg";

const NotFound = () => {
  const moveBack = useMoveBack();
  return (
    <div className="w-full container xl:max-w-screen-xl bg-secondary-0">
      <div className="sm:max-w-sm mx-auto flex justify-center mt-16">
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-xl font-bold text-secondary-600">
            صفحه ای که دنبال آن بودید پیدا نشد!
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
        src={NotFoundImg}
        alt="404 Not Found"
        className="sm:max-w-lg mx-auto"
      />
    </div>
  );
};

export default NotFound;
