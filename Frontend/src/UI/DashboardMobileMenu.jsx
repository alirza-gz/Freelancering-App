import { Link } from "react-router-dom";
import { useDarkMode } from "../Context/DarkModeContext";
import DarkModeLogo from "./../Assets/Images/Logo/DarkModeLogo.png";
import LightModeLogo from "./../Assets/Images/Logo/LightModeLogo.png";
import HorizontalLine from "./HorizontalLine";

function DashboardMobileMenu({ children }) {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="flex flex-col items-center absolute z-30 w-full px-2 py-3 space-y-2 font-medium text-secondary-400 bg-secondary-100 mt-4 rounded-xl shadow-xl">
      {isDarkMode ? (
        <Link to="/">
          <div className="w-32 ">
            <img src={DarkModeLogo} alt="alirezagholizadeh.ir" />
          </div>
        </Link>
      ) : (
        <Link to="/">
          <div className="w-32">
            <img src={LightModeLogo} alt="alirezagholizadeh.ir" />
          </div>
        </Link>
      )}
      <HorizontalLine />
      {children}
    </div>
  );
}

export default DashboardMobileMenu;
