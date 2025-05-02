export const FORM_VALIDATION = {
  firstName: {
    required: "This field is required",
    minLength: {
      value: 2,
      message: "First name must be at least 2 characters",
    },
  },
  lastName: {
    required: "This field is required",
    minLength: {
      value: 2,
      message: "Last name must be at least 2 characters",
    },
  },
  email: {
    required: "This field is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  queryType: {
    required: "Please select a query type",
  },
  message: {
    required: "This field is required",
    minLength: {
      value: 10,
      message: "Message must be at least 10 characters",
    },
  },
  consent: {
    required: "To submit this form, please consent to being contacted",
  },
};

export const QUERY_TYPES = ["General Enquiry", "Support Request"];

export const FORM_STYLES = {
  input: {
    base: "mt-1 w-full rounded-md border p-2 font-karla transition focus:border-[hsl(169,82%,27%)] focus:outline-none resize-none",
    error: "border-[hsl(0,66%,54%)]",
    normal: "border-[hsl(186,15%,59%)]",
  },
  label: {
    base: "block text-base font-medium text-[hsl(187,24%,22%)] font-karla",
    required: "text-[hsl(169,82%,27%)] pl-2",
  },
  error: {
    base: "mt-1 text-sm text-[hsl(0,66%,54%)] font-karla",
  },
  button: {
    base: "w-full rounded-md bg-[hsl(169,82%,35%)] p-3 text-white hover:bg-[hsl(169,82%,27%)] transition font-karla font-bold cursor-pointer",
    disabled: "opacity-50 cursor-not-allowed",
  },
};
