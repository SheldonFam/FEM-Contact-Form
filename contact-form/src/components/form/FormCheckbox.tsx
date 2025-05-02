import React from "react";
import { FormCheckboxProps } from "@/types/form.types";
import { FORM_STYLES } from "@/constants/form.constants";

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  label,
  name,
  required,
  error,
  register,
  validation,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 font-karla">
        <input
          type="checkbox"
          id={name}
          {...register(name, validation)}
          className="h-4 w-4 accent-[hsl(169,82%,27%)] border-[hsl(186,15%,59%)] cursor-pointer"
          aria-invalid={!!error}
          aria-required={required}
        />
        <label
          htmlFor={name}
          className="text-base font-medium text-[hsl(187,24%,22%)] cursor-pointer"
        >
          {label}
          {required && <span className={FORM_STYLES.label.required}>*</span>}
        </label>
      </div>
      {error && <p className={FORM_STYLES.error.base}>{error}</p>}
    </div>
  );
};
