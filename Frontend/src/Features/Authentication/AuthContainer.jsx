import React, { useEffect, useState } from "react";
import SendOTPForm from "./SendOPTForm";
import CheckOTPForm from "./CheckOTPForm";
import CenterLogin from "./../../Assets/Images/Login/centerLogin.png";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../Services/AuthService";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../Context/DarkModeContext";

const AuthContainer = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const { handleSubmit, register, getValues } = useForm();
  const { user } = useUser();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const {
    isPending: isPendingOtp,
    data: OtpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const SendOtpHandler = async (data) => {
    setStep(2);
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const RenderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            register={register}
            SendOtpHandler={handleSubmit(SendOtpHandler)}
            isPendingOtp={isPendingOtp}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            OnBackHandler={() => setStep((prev) => prev - 1)}
            ResendOtpHandler={SendOtpHandler}
            OtpResponse={OtpResponse}
          />
        );
      default:
        return null;
    }
  };
  return (
    <>
      <AuthLayout
        imgSrc={CenterLogin}
        title="به سادگی پروژه‌های عالی را کشف کن!"
        subTitle="اینجا جایگاه اتصال شما با کارفرماهای متنوع است. با یک جستجوی سریع، پروژه‌هایی را پیدا کنید که با مهارت‌های شما هماهنگ هستند. پیشنهاد خود را ارسال کنید، وارد مذاکره شوید و پروژه‌ها را به اتمام برسانید. اگر در مسیر نیاز به راهنمایی داشتید، تیم مشاوره ما همواره در کنار شماست!
"
      >
        {RenderStep()}
      </AuthLayout>
    </>
  );
};

export default AuthContainer;

const AuthLayout = ({ children, imgSrc, title, subTitle }) => {
  return (
    <>
      <div className="h-full w-full mx-4 lg:mx-0 lg:w-[30%] lg:bg-secondary-0 bg-secondary-0 flex-center lg:justify-end">
        <div className="w-full max-w-sm lg:ml-[-200px] z-20 relative">
          <div className="border border-secondary-200 shadow-ring bg-secondary-0 rounded-2xl p-8 w-full">
            {children}
          </div>
        </div>
      </div>
      <div className="hidden lg:block h-full w-[70%] rounded-tr-4xl rounded-br-4xl z-0 bg-gradient-to-tr from-primary-900 to-primary-800">
        <div className="flex-center h-full w-full">
          <div className="max-w-lg flex-center flex-col">
            <img src={imgSrc} alt="alirezagholizadeh.ir" className="size-96" />
            <h3 className="font-MorabbaBold text-white text-3xl my-6">
              {title}
            </h3>
            <p className="text-white text-justify mt-8">{subTitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { AuthLayout };
