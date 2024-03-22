"use server";
import { Resend } from "resend";
import { isValidString, getErrorMessage } from "@/lib/helpers";
import { ContactFormEmail } from "@/components/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const senderMessage = formData.get("senderMessage");

  if (!isValidString(senderEmail, 100)) {
    return {
      error: "Invalid email",
    };
  }

  if (!isValidString(senderMessage, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "Web Portfolio Contact <onboarding@resend.dev>",
      to: "jordanleeevans@hotmail.com",
      subject: "New message from your website",
      reply_to: senderEmail as string,
      react: <ContactFormEmail message={senderMessage as string} />,
      // text: senderMessage as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  } finally {
    return {
      status: 200,
      body: "Message sent successfully, whoop whoop! 🎉",
    };
  }
};
