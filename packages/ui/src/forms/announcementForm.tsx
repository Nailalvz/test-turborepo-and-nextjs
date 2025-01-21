"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import InputField from "../inputField";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  class: z.string().min(1, { message: "Last name is required" }),
  date: z.date({ message: "Birthday is required" }),

});
// * Minuto 3:53:37
type Inputs = z.infer<typeof schema>;

const AnnouncementForm = ({
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
      <h1 className="ui-text-xl ui-font-semibold">Create a new Student</h1>
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
      </div>

      <button className="ui-bg-blue-400 ui-text-white ui-p-2 ui-rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default AnnouncementForm;
