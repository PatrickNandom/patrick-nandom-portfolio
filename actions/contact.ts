"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/schemas/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (formData: unknown) => {
  const result = contactSchema.safeParse(formData);

  if (!result.success) {
    return { success: false, error: "Invalid form data" };
  }

  const { name, email, phoneNumber, subject, message } = result.data;

  const { data, error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: ["patricknandom82@gmail.com"],
    subject: `New message: ${subject}`,
    html: `
      <p><b>From:</b> ${name} (${email})</p>
      <p><b>Phone:</b> ${phoneNumber}</p>
      <p><b>Message:</b><br/>${message}</p>
    `,
  });

  if (error) {
    console.error(error);
    return { success: false, error: "Failed to send email" };
  }

  return { success: true, data };
};
