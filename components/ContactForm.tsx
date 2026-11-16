"use client";

import { sendContactEmail } from "@/actions/contact";
import { useState } from "react";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";
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

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
  },
  {
    name: "phoneNumber",
    label: "Phone number",
    type: "tel",
    placeholder: "Your phone number",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "What would you like to discuss?",
  },
] as const;

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
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (name in errors) {
      setErrors((previous) => ({
        ...previous,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await sendContactEmail(result.data);
      if (!response.success) {
        toast.error(response.error);
        console.error(response.error);
        return;
      }

      toast.success("Message sent! I'll get back to you soon.");
      setSubmitted(true);
    } catch (error) {
      toast.error("We couldn’t send your message. Please try again.");
      console.error("Contact form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="flex min-h-72 w-full flex-col items-center justify-center rounded-3xl border border-primary/20 bg-card p-8 text-center shadow-sm sm:p-12"
      >
        <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
          <Check size={26} aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
          Thanks for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-6 rounded-full px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full rounded-3xl border border-border/80 bg-card/85 p-5 shadow-[0_20px_60px_-42px_rgba(20,50,37,0.35)] sm:p-8 md:p-10"
    >
      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2 sm:gap-y-6">
        {fields.map((field) => (
          <Field
            key={field.name}
            id={field.name}
            label={field.label}
            error={errors[field.name]}
          >
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              autoComplete={
                field.name === "phoneNumber" ? "tel" : field.name
              }
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={
                errors[field.name] ? `${field.name}-error` : undefined
              }
              className={inputClass(Boolean(errors[field.name]))}
            />
          </Field>
        ))}
        <div className="sm:col-span-2">
          <Field id="message" label="Message" error={errors.message}>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="A little about what you’re looking to build..."
              rows={5}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? "message-error" : undefined
              }
              className={`${inputClass(Boolean(errors.message))} min-h-36 resize-y`}
            />
          </Field>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-muted-foreground">
          Your details are only used to reply to your message.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle size={16} className="animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              Send message <ArrowRight size={16} aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-foreground"
      >
        {label} <span className="text-primary">*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-2xl border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:ring-4",
    hasError
      ? "border-destructive/60 focus:border-destructive focus:ring-destructive/10"
      : "border-border focus:border-primary/60 focus:ring-primary/10",
  ].join(" ");
}
