"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import SuccessMessage from "./SuccessMessage";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: boolean;
};

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[hsl(148,38%,91%)] p-6">
      {isSubmitted && <SuccessMessage />}
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-[hsl(187,24%,22%)] font-karla">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-base font-medium text-[hsl(187,24%,22%)] font-karla">
                First Name
                <span className="text-[hsl(169,82%,27%)]">*</span>
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                className={`mt-1 w-full rounded-md border p-2 font-karla transition focus:border-[hsl(169,82%,27%)] focus:ring-2 focus:ring-[hsl(169,82%,27%)] focus:bg-white focus:outline-none ${
                  errors.firstName
                    ? "border-[hsl(0,66%,54%)]"
                    : "border-[hsl(186,15%,59%)]"
                }`}
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-[hsl(0,66%,54%)] font-karla">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-base font-medium text-[hsl(187,24%,22%)] font-karla">
                Last Name <span className="text-[hsl(169,82%,27%)]">*</span>
              </label>
              <input
                {...register("lastName", {
                  required: "Last name is required",
                })}
                className={`mt-1 w-full rounded-md border p-2 font-karla transition focus:border-[hsl(169,82%,27%)] focus:ring-2 focus:ring-[hsl(169,82%,27%)] focus:bg-white focus:outline-none ${
                  errors.lastName
                    ? "border-[hsl(0,66%,54%)]"
                    : "border-[hsl(186,15%,59%)]"
                }`}
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-[hsl(0,66%,54%)] font-karla">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-base font-medium text-[hsl(187,24%,22%)] font-karla">
              Email Address <span className="text-[hsl(169,82%,27%)]">*</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className={`mt-1 w-full rounded-md border p-2 font-karla transition focus:border-[hsl(169,82%,27%)] focus:ring-2 focus:ring-[hsl(169,82%,27%)] focus:bg-white focus:outline-none ${
                errors.email
                  ? "border-[hsl(0,66%,54%)]"
                  : "border-[hsl(186,15%,59%)]"
              }`}
              placeholder="you@example.com"
              type="email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-[hsl(0,66%,54%)] font-karla">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Query Type */}
          <div>
            <label className="block text-base font-medium text-[hsl(187,24%,22%)] mb-2 font-karla">
              Query Type <span className="text-[hsl(169,82%,27%)]">*</span>
            </label>
            <div className="flex flex-col gap-2 md:flex-row">
              <label
                className={`flex items-center gap-2 font-karla w-full md:w-auto border rounded-md p-3 cursor-pointer transition ${
                  // highlight if checked
                  "border-[hsl(186,15%,59%)] data-[state=checked]:border-[hsl(169,82%,27%)]"
                } ${
                  // highlight if checked
                  "[&>input:checked]:border-[hsl(169,82%,27%)] [&>input:checked]:bg-[hsl(148,38%,91%)]"
                }`}
              >
                <input
                  type="radio"
                  value="General Enquiry"
                  {...register("queryType", {
                    required: "Please select a query type",
                  })}
                  className="h-4 w-4 accent-[hsl(169,82%,27%)] border-[hsl(186,15%,59%)] focus:ring-2 focus:ring-[hsl(169,82%,27%)] focus:outline-none"
                />
                General Enquiry
              </label>
              <label
                className={`flex items-center gap-2 font-karla w-full md:w-auto border rounded-md p-3 cursor-pointer transition ${"border-[hsl(186,15%,59%)] data-[state=checked]:border-[hsl(169,82%,27%)]"} ${"[&>input:checked]:border-[hsl(169,82%,27%)] [&>input:checked]:bg-[hsl(148,38%,91%)]"}`}
              >
                <input
                  type="radio"
                  value="Support Request"
                  {...register("queryType", {
                    required: "Please select a query type",
                  })}
                  className="h-4 w-4 accent-[hsl(169,82%,27%)] border-[hsl(186,15%,59%)] focus:ring-2 focus:ring-[hsl(169,82%,27%)] focus:outline-none"
                />
                Support Request
              </label>
            </div>
            {errors.queryType && (
              <p className="mt-1 text-sm text-[hsl(0,66%,54%)] font-karla">
                {errors.queryType.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-base font-medium text-[hsl(187,24%,22%)] font-karla">
              Message <span className="text-[hsl(169,82%,27%)]">*</span>
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className={`mt-1 w-full rounded-md border p-2 font-karla transition focus:border-[hsl(169,82%,27%)] focus:ring-2 focus:ring-[hsl(169,82%,27%)] focus:bg-white focus:outline-none ${
                errors.message
                  ? "border-[hsl(0,66%,54%)]"
                  : "border-[hsl(186,15%,59%)]"
              }`}
              rows={5}
              placeholder="Write your message here..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-[hsl(0,66%,54%)] font-karla">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Consent */}
          <div>
            <label className="flex items-center gap-2 font-karla">
              <input
                type="checkbox"
                {...register("consent", {
                  required: "You must consent to be contacted",
                })}
                className="h-4 w-4 accent-[hsl(169,82%,27%)] border-[hsl(186,15%,59%)] focus:ring-2 focus:ring-[hsl(169,82%,27%)] focus:outline-none"
              />
              I consent to being contacted by the team{" "}
              <span className="text-[hsl(169,82%,27%)]">*</span>
            </label>
            {errors.consent && (
              <p className="mt-1 text-sm text-[hsl(0,66%,54%)] font-karla">
                {errors.consent.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-[hsl(169,82%,27%)] p-3 text-white hover:bg-[hsl(169,82%,35%)] transition font-karla font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
