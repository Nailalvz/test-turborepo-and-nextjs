import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

// * Minuto 3:38:06 https://www.youtube.com/watch?v=myYlGLFxZas

const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldProps) => {
  return (
    <div className="ui-flex ui-flex-col ui-gap-2 ui-w-full md:ui-w-1/4">
      <label htmlFor="" className="ui-text-sm ui-text-gray-500">
        {label}
      </label>
      <input
        type={type}
        {...register(name)}
        className="ui-ring-[1.5px] ui-ring-gray-300 ui-p-2 ui-rounded-md ui-text-sm ui-w-full"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="ui-text-xs  ui-text-red-400">
          {error?.message.toString()}
        </p>
      )}
    </div>
  );
};

export default InputField;
