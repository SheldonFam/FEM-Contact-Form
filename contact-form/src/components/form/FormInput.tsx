import React from "react";
import { FormInputProps } from "@/types/form.types";
import { FormField } from "./FormField";
import { FORM_STYLES } from "@/constants/form.constants";

export const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  required,
  error,
  type = "text",
  placeholder,
  register,
  validation,
}) => {
  return (
    <FormField
      label={label}
      name={name}
      required={required}
      error={error}
      validation={validation}
    >
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className={`${FORM_STYLES.input.base} ${
          error ? FORM_STYLES.input.error : FORM_STYLES.input.normal
        }`}
        aria-invalid={!!error}
        aria-required={required}
      />
    </FormField>
  );
};
