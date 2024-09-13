import React from "react";
import TextField from "./../../UI/TextField";
import { useForm } from "react-hook-form";
import Loading from "../../UI/Loading";
import useEditCategory from "./useEditCategory";
import useCreateCategory from "./useCreateCategory";

const CreateNewCategory = ({ OnCloseHandler, CategoryToEdit = {} }) => {
  const { value: editId } = CategoryToEdit;
  const isEditSession = Boolean(editId);
  const { label, value, desc, enTitle } = CategoryToEdit;
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title: label,
      description: desc,
      englishTitle: enTitle,
    };
  }
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues, mode: "all" });
  const { isCreating, createCategory } = useCreateCategory();
  const { isUpdating, editCategory } = useEditCategory();
  const AddNewCategoryHandler = (data) => {
    if (isEditSession) {
      editCategory(
        { id: editId, data },
        {
          onSuccess: () => {
            OnCloseHandler();
            reset();
          },
        }
      );
    } else {
      createCategory(data, {
        onSuccess: () => {
          OnCloseHandler();
          reset();
        },
      });
    }
  };
  return (
    <form className="space-y-8" onSubmit={handleSubmit(AddNewCategoryHandler)}>
      <TextField
        label="عنوان دسته‌بندی‌"
        name="title"
        placeholder="لطفا عنوان دسته‌ بندی‌ را وارد کنید "
        register={register}
        required
        validationSchema={{
          required: "عنوان دسته‌بندی‌ اجباری است",
          minLength: {
            value: 3,
            message: "حداقل ۳ کاراکتر باید وارد شود",
          },
          maxLength: {
            value: 35,
            message: "حداکثر می توانید 35 کاراکتر وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات دسته‌بندی‌"
        name="description"
        placeholder="لطفا توضیحات دسته‌بندی‌ را وارد کنید "
        register={register}
        required
        validationSchema={{
          required: "توضیحات دسته‌بندی‌ اجباری است",
          minLength: {
            value: 3,
            message: "حداقل ۳ کاراکتر باید وارد شود",
          },
          maxLength: {
            value: 200,
            message: "حداکثر می توانید ۲۰۰ کاراکتر وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextField
        label="عنوان انگلیسی"
        name="englishTitle"
        placeholder="لطفا عنوان انگلیسی رو وارد کنید "
        register={register}
        required
        validationSchema={{
          required: "عنوان انگلیسی اجباری است",
          minLength: {
            value: 3,
            message: "حداقل ۳ کاراکتر باید وارد شود",
          },
          maxLength: {
            value: 100,
            message: "حداکثر می توانید ۱۰۰ کاراکتر وارد کنید",
          },
        }}
        errors={errors}
      />
      {isCreating || isUpdating ? (
        <Loading />
      ) : (
        <button
          type="submit"
          disabled={!isValid}
          className="btn btn-primary w-full"
        >
          ثبت
        </button>
      )}
    </form>
  );
};

export default CreateNewCategory;
