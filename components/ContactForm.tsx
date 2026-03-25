"use client";

import { sendContactEmail } from "@/actions/contact";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z
    .string()
    .min(7, "Phone number is too short")
    .regex(/^[+\d\s\-()]+$/, "Invalid phone number format"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    const response = await sendContactEmail(formData);
    setIsSubmitting(false);

    if (response.success) {
      toast.success("Message sent! I'll get back to you soon.");
      setSubmitted(true);
    } else {
      toast.error("Something went wrong. Please try again.");
      console.error(response.error);
    }
  };

  if (submitted) {
    return (
      <div className="w-full max-w-6xl mx-auto bg-white dark:bg-gray-900/60 dark:backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700/60 shadow-sm dark:shadow-[0_2px_20px_rgba(0,0,0,0.4)] p-12 text-center">
        <div className="w-14 h-14 bg-gray-900 dark:bg-gray-950 border-2 border-transparent dark:border-gray-700 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md dark:shadow-[0_0_12px_rgba(0,0,0,0.6)]">
          <svg
            className="w-7 h-7 text-white dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Thanks for reaching out. I&apos;ll get back to you as soon as
          possible.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phoneNumber: "",
              subject: "",
              message: "",
            });
          }}
          className="mt-6 text-sm text-gray-500 dark:text-gray-500 underline underline-offset-2 cursor-pointer hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-900/60 dark:backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700/60 shadow-sm dark:shadow-[0_2px_20px_rgba(0,0,0,0.4)] p-8 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Name" error={errors.name}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass(!!errors.name)}
          />
        </Field>

        <Field label="Email" error={errors.email}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className={inputClass(!!errors.email)}
          />
        </Field>

        <Field label="Phone Number" error={errors.phoneNumber}>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Your phone number"
            className={inputClass(!!errors.phoneNumber)}
          />
        </Field>

        <Field label="Subject" error={errors.subject}>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className={inputClass(!!errors.subject)}
          />
        </Field>

        <div className="md:col-span-2">
          <Field label="Message" error={errors.message}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={6}
              className={`${inputClass(!!errors.message)} resize-none`}
            />
          </Field>
        </div>
      </div>

      <div className="flex justify-center sm:justify-end mt-8">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-950 hover:bg-gray-700 dark:hover:bg-gray-800 dark:border dark:border-gray-700 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-white dark:text-gray-300 text-sm font-medium px-6 py-3 rounded-xl transition-colors duration-200"
        >
          {isSubmitting ? (
            <>
              <svg
                className="w-4 h-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// Helper: Field wrapper
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label} <span className="text-gray-400 dark:text-gray-600">*</span>
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-500 dark:text-red-400 mt-0.5">{error}</p>
      )}
    </div>
  );
}

// Helper: Input class
function inputClass(hasError: boolean) {
  return [
    "w-full px-4 py-3 rounded-xl border text-sm placeholder:text-gray-400 dark:placeholder:text-gray-600",
    "outline-none transition-colors duration-150",
    hasError
      ? "text-gray-800 dark:text-gray-200 border-red-400 dark:border-red-500/60 bg-red-50 dark:bg-red-950/20 focus:border-red-500 dark:focus:border-red-500/80 focus:ring-2 focus:ring-red-100 dark:focus:ring-red-900/30"
      : "text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700/40",
  ].join(" ");
}
