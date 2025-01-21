"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import InputField from "../inputField";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email Address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  bloodType: z.string().min(1, { message: "Blood type is required" }),
  birthday: z.date({ message: "Birthday is required" }),
  sex: z.enum(["male", "female"], { message: "Sex is required" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="ui-flex ui-flex-col ui-gap-8" onSubmit={onSubmit}>
      <h1 className="ui-text-xl ui-font-semibold">Create a new Teacher</h1>
      <span className="ui-text-xs ui-text-gray-500 ui-font-medium">
        Authentication Information
      </span>
      <div className="ui-flex ui-justify-between ui-flex-wrap ui-gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors.password}
        />
      </div>

      <span className="ui-text-xs ui-text-gray-500 ui-font-medium">
        Personal Information
      </span>
      <div className="ui-flex ui-justify-between ui-flex-wrap ui-gap-4">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Blood type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Date of Birth"
          name="birthday"
          type="date"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
        />

        <div className="ui-flex ui-flex-col ui-gap-2 ui-w-full md:ui-w-1/4">
          <label htmlFor="" className="ui-text-sm ui-text-gray-500">
            Sex
          </label>
          <select
            className="ui-ring-[1.5px] ui-ring-gray-300 ui-p-2 ui-rounded-md ui-text-sm ui-w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="ui-text-xs  ui-text-red-400">
              {errors.sex?.message.toString()}
            </p>
          )}
        </div>

        <div className="ui-flex ui-flex-col ui-gap-2 ui-w-full md:ui-w-1/4 ui-justify-center">
          <label htmlFor="img" className="ui-text-sm ui-text-gray-500 ui-flex ui-items-center ui-gap-2 ui-cursor-pointer">
            <img src="/upload.png" alt="" width={20} height={20}/>
            Upload a photo
          </label>
          <input type="file" id="img" {...register("img")} className="ui-hidden" />
          {errors.img?.message && (
            <p className="ui-text-xs  ui-text-red-400">
              {errors.img?.message.toString()}
            </p>
          )}
        </div>
      </div>

      <button className="ui-bg-blue-400 ui-text-white ui-p-2 ui-rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
