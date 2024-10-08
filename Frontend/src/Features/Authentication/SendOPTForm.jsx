import React from "react";
import TextField from "../../UI/TextField";
import DarkModeLogo from "../../Assets/Images/Logo/DarkModeLogo.png";
import LightModeLogo from "../../Assets/Images/Logo/LightModeLogo.png";
import Loading from "../../UI/Loading";
import { useDarkMode } from "../../Context/DarkModeContext";
const SendOPTForm = ({ SendOtpHandler, isPendingOtp, register }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <div className="flex-center mb-8">
        {isDarkMode ? (
          <img src={DarkModeLogo} alt="alirezagholizadeh.ir" className="w-56" />
        ) : (
          <img
            src={LightModeLogo}
            alt="alirezagholizadeh.ir"
            className="w-56"
          />
        )}
      </div>
      <h2 className="font-MorabbaBold mb-4">ورود | ثبت نام</h2>
      <form className="w-full space-y-11" onSubmit={SendOtpHandler}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          register={register}
          ltr
          placeholder=" لطفا شماره موبایل خودتو وارد کن"
        />
        {isPendingOtp ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn-primary w-full">
            ارسال کد تایید
          </button>
        )}
      </form>
    </>
  );
};

export default SendOPTForm;
