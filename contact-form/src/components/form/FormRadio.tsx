import React from "react";
import { FormRadioProps } from "@/types/form.types";
import { FormField } from "./FormField";

export const FormRadio: React.FC<FormRadioProps> = ({
  label,
  name,
  required,
  error,
  options,
  register,
  watch,
  validation,
}) => {
  const selected = watch(name);

  return (
    <FormField
      label={label}
      name={name}
      required={required}
      error={error}
      validation={validation}
    >
      <div className="flex flex-col gap-2 md:flex-row">
        {options.map((option) => (
          <label
            key={option}
            className={`flex items-center gap-2 font-karla w-full border rounded-md p-3 cursor-pointer transition
              ${
                selected === option
                  ? "border-[hsl(169,82%,27%)] bg-[hsl(148,38%,91%)]"
                  : "border-[hsl(186,15%,59%)]"
              }`}
          >
            <input
              type="radio"
              value={option}
              {...register(name, validation)}
              className="h-4 w-4 accent-[hsl(169,82%,27%)]"
              aria-invalid={!!error}
              aria-required={required}
            />
            {option}
          </label>
        ))}
      </div>
    </FormField>
  );
};
