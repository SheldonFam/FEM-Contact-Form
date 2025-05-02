"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormData } from "@/types/form.types";
import { QUERY_TYPES, FORM_VALIDATION } from "@/constants/form.constants";
import { FormInput } from "@/components/form/FormInput";
import { FormTextArea } from "@/components/form/FormTextArea";
import { FormRadio } from "@/components/form/FormRadio";
import { FormCheckbox } from "@/components/form/FormCheckbox";
import { Toast } from "@/components/common/Toast";
import { Button } from "@/components/common/Button";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      setError(null);
      // Here you would typically make an API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      console.log("Form Submitted:", data);
      setIsSubmitted(true);
      reset();
    } catch {
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDismissSuccess = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[hsl(148,38%,91%)] p-6">
      {isSubmitted && <Toast onDismiss={handleDismissSuccess} />}
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-[hsl(187,24%,22%)] font-karla">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {error && (
            <div role="alert" className="p-3 bg-red-50 text-red-600 rounded-md">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormInput
              label="First Name"
              name="firstName"
              required
              error={errors.firstName?.message}
              register={register}
              placeholder="First Name"
              validation={FORM_VALIDATION.firstName}
            />
            <FormInput
              label="Last Name"
              name="lastName"
              required
              error={errors.lastName?.message}
              register={register}
              placeholder="Last Name"
              validation={FORM_VALIDATION.lastName}
            />
          </div>

          <FormInput
            label="Email Address"
            name="email"
            type="email"
            required
            error={errors.email?.message}
            register={register}
            placeholder="you@example.com"
            validation={FORM_VALIDATION.email}
          />

          <FormRadio
            label="Query Type"
            name="queryType"
            required
            error={errors.queryType?.message}
            options={QUERY_TYPES}
            register={register}
            watch={watch}
            validation={FORM_VALIDATION.queryType}
          />

          <FormTextArea
            label="Message"
            name="message"
            required
            error={errors.message?.message}
            register={register}
            placeholder="Write your message here..."
            validation={FORM_VALIDATION.message}
          />

          <FormCheckbox
            label="I consent to being contacted by the team"
            name="consent"
            required
            error={errors.consent?.message}
            register={register}
            validation={FORM_VALIDATION.consent}
          />

          <Button type="submit" isLoading={isSubmitting}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
