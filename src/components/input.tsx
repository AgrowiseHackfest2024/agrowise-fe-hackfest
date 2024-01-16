import { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Input = ({
  label,
  id,
  register,
  errors,
  required,
  type = "text",
}: {
  label: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
  type?: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full relative">
      <input
        {...register(id, { required })}
        className={`w-full outline-none px-4 pt-7 pb-2 rounded-md peer ${
          errors[id] && "focus:ring-rose-500"
        }`}
        id={id}
        placeholder=" "
        type={type === "password" ? (showPassword ? "text" : "password") : type}
      />
      <label
        htmlFor={id}
        className="
          absolute top-1/2 left-4 font-semibold -translate-y-5 text-sm text-gray-400
          peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
          peer-focus:-translate-y-5 peer-focus:text-sm 
          transition
        "
      >
        {label}
      </label>
      {type === "password" && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 scale-100 peer-placeholder-shown:scale-0 transition duration-300 text-gray-400"
          onClick={togglePassword}
        >
          {showPassword ? <HiEyeOff /> : <HiEye />}
        </button>
      )}
    </div>
  );
};

export default Input;
