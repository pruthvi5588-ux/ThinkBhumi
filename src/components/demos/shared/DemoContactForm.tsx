"use client";

import { useState } from "react";

interface DemoContactFormProps {
  fields: { id: string; label: string; type: string; required?: boolean }[];
  submitLabel: string;
  buttonClass: string;
  successMessage?: string;
}

export default function DemoContactForm({
  fields,
  submitLabel,
  buttonClass,
  successMessage = "Thank you! We'll get back to you shortly.",
}: DemoContactFormProps) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="p-6 rounded-xl bg-white/10 border border-white/20 text-center text-white">
        <p className="font-semibold">{successMessage}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4"
    >
      {fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              name={field.id}
              rows={4}
              required={field.required}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-400/30"
            />
          ) : (
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              required={field.required}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-400/30"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className={`w-full py-3 rounded-lg font-semibold text-white transition-all hover:scale-[1.02] ${buttonClass}`}
      >
        {submitLabel}
      </button>
    </form>
  );
}
