import { UseFormRegister, UseFormWatch } from "react-hook-form";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: boolean;
}

export interface ValidationRules {
  required?: string | boolean;
  minLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
}

export interface FormFieldProps {
  label: string;
  name: keyof FormData;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  validation?: ValidationRules;
}

export interface FormInputProps extends Omit<FormFieldProps, "children"> {
  type?: "text" | "email" | "tel";
  placeholder?: string;
  register: UseFormRegister<FormData>;
}

export interface FormTextAreaProps extends Omit<FormFieldProps, "children"> {
  rows?: number;
  placeholder?: string;
  register: UseFormRegister<FormData>;
}

export interface FormRadioProps extends Omit<FormFieldProps, "children"> {
  options: string[];
  register: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;
}

export interface FormCheckboxProps extends Omit<FormFieldProps, "children"> {
  register: UseFormRegister<FormData>;
}
