import React from "react";

interface SuccessMessageProps {
  title?: string;
  message?: string;
}

export default function SuccessMessage({
  title = "Message Sent!",
  message = "Thanks for completing the form. We'll be in touch soon!",
}: SuccessMessageProps) {
  return (
    <div className="fixed top-6 left-1/2 z-50 w-[90vw] max-w-xl -translate-x-1/2 rounded-xl bg-[hsl(187,24%,22%)] px-6 py-4 shadow-lg flex items-start gap-3 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6 mt-1 text-[hsl(148,38%,91%)]"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 12l2.5 2.5L16 9"
        />
      </svg>
      <div>
        <div className="font-bold text-base mb-1">{title}</div>
        <div className="text-sm text-white/90">{message}</div>
      </div>
    </div>
  );
}
