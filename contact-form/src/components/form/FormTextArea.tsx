import React from "react";
import { FormTextAreaProps } from "@/types/form.types";
import { FormField } from "./FormField";
import { FORM_STYLES } from "@/constants/form.constants";

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  label,
  name,
  required,
  error,
  rows = 5,
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
      <textarea
        id={name}
        rows={rows}
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
