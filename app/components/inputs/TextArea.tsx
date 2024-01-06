import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextAreaProps {
  id: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const TextArea = ({
  id,
  label,
  disabled,
  required,
  register,
  errors,
}: TextAreaProps) => {
  return (
    <div className="w-full relative">
      <label
        htmlFor={id}
        className={`cursor-text text-md 
        ${errors[id] ? "text-rose-500" : "text-slate-400"}
        
        `}
      >
        {label}
      </label>
      <textarea
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        className={`peer w-full max-h-[150px] min-h-[150px] p-2 outline-none bg-white font-light border-2 rounded-md disabled:opacity-70 disabled:cursor-not-allowed
        ${errors[id] ? "border-rose-400" : "border-slate-300"}
        ${errors[id] ? "focus:border-rose-400" : "focus:border-slate-300"}
        `}
      />
    </div>
  );
};

export default TextArea;
