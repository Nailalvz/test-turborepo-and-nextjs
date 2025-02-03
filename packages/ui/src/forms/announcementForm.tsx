"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import InputField from "../inputField";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  class: z.string().min(1, { message: "Class is required" }),
  date: z.date({ message: "Date is required" }),

});

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
      <h1 className="ui-text-xl ui-font-semibold">Create a new announcement</h1>
      <span className="ui-text-xs ui-text-gray-500 ui-font-medium">
        Information
      </span>
      <div className="ui-flex ui-justify-between ui-flex-wrap ui-gap-4">
        <InputField
          label="Title"
          name="title"
          defaultValue={data?.title}
          register={register}
          error={errors.title}
        />
        <InputField
          label="Class"
          name="class"
          type="class"
          defaultValue={data?.class}
          register={register}
          error={errors.class}
        />
        <InputField
          label="Date"
          name="date"
          type="date"
          defaultValue={data?.date}
          register={register}
          error={errors.date}
        />
      </div>
      <button className="ui-bg-blue-400 ui-text-white ui-p-2 ui-rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default AnnouncementForm;
