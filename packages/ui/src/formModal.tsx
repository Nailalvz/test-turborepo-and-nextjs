"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Lazy loading
const TeacherForm = dynamic(() => import("./forms/teacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/studentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
        ? "bg-lamaSky"
        : "bg-lamaPurple";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="ui-p-4 ui-flex ui-flex-col ui-gap-4">
        <span className="ui-text-center ui-font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="ui-bg-red-700 ui-text-white ui-py-2 ui-px-4 ui-rounded-md ui-border-none ui-w-max ui-self-center ">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found"
    );
  };

  return (
    <>
      <button
        className={`${size} ui-flex ui-items-center ui-justify-center ui-rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <img src={`/${type}.png`} alt="" width={14} height={14} />
      </button>
      {open && (
        <div className="ui-w-screen ui-h-screen ui-absolute ui-left-0 ui-top-0 ui-bg-black ui-bg-opacity-60 ui-z-50 ui-flex ui-items-center ui-justify-center">
          <div className="ui-bg-white ui-p-4 ui-rounded-md ui-relative ui-w-[90%] md:ui-w-[70%] lg:ui-w-[60%] xl:ui-w-[50%] 2xl:ui-w-[40%]">
            <Form />
            <div
              className="ui-absolute ui-top-4 ui-right-4 ui-cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <img src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
