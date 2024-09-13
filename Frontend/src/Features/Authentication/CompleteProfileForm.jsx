import React, { useEffect } from "react";
import TextField from "../../UI/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../Services/AuthService";
import toast from "react-hot-toast";
import Loading from "../../UI/Loading";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "./AuthContainer";
import CompleteProfileImg from "./../../Assets/Images/CompleteProfile/completeProfile.svg";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../UI/RadioInputGroup";
import ComponentTitle from "../../UI/ComponentTitle";
import useUser from "./useUser";

const CompleteProfileForm = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { user } = useUser();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });
  const CompleteProfileHandler = async (data) => {
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید می باشد", { icon: "⏳" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <section className="flex h-screen">
        <AuthLayout
          imgSrc={CompleteProfileImg}
          title="پروفایل خودتو تکمیل کن"
          subTitle="این کار و که انجام بدی مشخص میشه که کارفرما هستی یا فریلنسر تا بتونی از قابلیت های اپ کاملا استفاده کنی پس همین الان فرم رو تکمیلش کن"
        >
          <div className="flex-center my-4">
            <ComponentTitle title="تکمیل اطلاعات کاربری" />{" "}
          </div>
          <form
            onSubmit={handleSubmit(CompleteProfileHandler)}
            className="space-y-4"
          >
            <TextField
              label=" نام و نام خانوادگی"
              name="name"
              register={register}
              placeholder=" لطفا نام و نام خانوادگی خودتان را وارد کنید"
              validationSchema={{
                required: "نام و نام خانوادگی اجباری است",
                minLength: {
                  value: 5,
                  message: "حداقل ۵ کاراکتر باید وارد شود",
                },
                maxLength: {
                  value: 30,
                  message: "حداکثر می توانید ۳۰ کاراکتر وارد کنید",
                },
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/g,
                  message: "نام و نام خانوادگی نامعتبر است",
                },
              }}
              errors={errors}
            />
            <TextField
              label=" ایمیل"
              name="email"
              register={register}
              ltr
              placeholder=" لطفا ایمیل خودتان را وارد کنید"
              validationSchema={{
                required: "ایمیل اجباری است",
                minLength: {
                  value: 5,
                  message: "حداقل ۵ کاراکتر باید وارد شود",
                },
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2}/g,
                  message: "ایمیلی که وارد کردین نامعتبر است",
                },
              }}
              errors={errors}
            />
            <RadioInputGroup
              errors={errors}
              register={register}
              watch={watch}
              configs={{
                name: "role",
                validationSchema: { required: "انتخاب نقش کاربری اجباری است" },
                options: [
                  { value: "OWNER", label: "کارفرما" },
                  { value: "FREELANCER", label: "فریلنسر" },
                ],
              }}
            />
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn-primary w-full">
                ثبت اطلاعات
              </button>
            )}
          </form>
        </AuthLayout>
      </section>
    </>
  );
};

export default CompleteProfileForm;
