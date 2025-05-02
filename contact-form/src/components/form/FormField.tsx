import React from "react";
import { FormFieldProps } from "@/types/form.types";
import { FORM_STYLES } from "@/constants/form.constants";

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  required,
  error,
  children,
}) => {
  return (
    <div>
      <label htmlFor={name} className={FORM_STYLES.label.base}>
        {label}
        {required && <span className={FORM_STYLES.label.required}>*</span>}
      </label>
      {children}
      {error && <p className={FORM_STYLES.error.base}>{error}</p>}
    </div>
  );
};
