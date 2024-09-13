import React from "react";
import Typewriter from "typewriter-effect";
import HomeBanner from "../../Assets/Images/Home/homeBanner.svg";
import useUser from "../Authentication/useUser";
import { useNavigate } from "react-router-dom";
const HomeContent = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  console.log(user);
  const navigateHandler = () => {
    if (user) {
      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید می باشد", { icon: "⏳" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      if (user.role === "ADMIN") return navigate("/admin");
    } else {
      navigate("/auth");
    }
  };
  return (
    <search className="flex flex-col md:flex-between md:flex-row gap-x-8 my-28 relative">
      <div className="dark:hidden hidden md:block w-[500px] h-[500px] lg:w-[630px] lg:h-[630px] bg-pink-300/20 blur-2xl rounded-full -z-10 absolute -left-64 -top-60"></div>
      <div className="flex flex-1">
        <div className="flex flex-col">
          <h2 className="font-MorabbaBold text-5xl block mb-8 mb:mb-0 h-48 lg:text-6xl text-primary-900 dark:text-white leading-[80px] lg:leading-[96px]">
            <Typewriter
              options={{
                strings: `همین حالا همکاری <br className="hidden sm:inline" />  خود را آغاز کنید!`,
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="text-secondary-600  text-center text-lg mb-8 lg:text-2xl mt-5 sm:mt-6 lg:mt-7 max-w-[500px]">
            در اینجا، کارفرماها به دنبال متخصصین حرفه‌ای مانند شما هستند. با ثبت
            مهارت‌ها و تجربه‌های خود، به راحتی می‌توانید پروژه‌های متناسب با
            تخصص خود را پیدا کرده و درخواست همکاری ارسال کنید. <br />
            فرصت‌های کاری مناسب را از دست ندهید و همین حالا به جمع فریلنسرهای
            موفق بپیوندید!
          </p>

          <button
            onClick={navigateHandler}
            className="flex-center btn btn-primary rounded-full"
          >
            از اینجا شروع کن
          </button>
        </div>
      </div>

      <div className="flex flex-1">
        <img src={HomeBanner} alt="alirezagholizadeh.ir" />
      </div>
      <div className="dark:hidden hidden md:block w-[500px] h-[500px] lg:w-[630px] lg:h-[630px] bg-sky-500/20 blur-2xl rounded-full -z-10 absolute -right-[320px] lg:-right-[300px] top-0"></div>
    </search>
  );
};

export default HomeContent;
