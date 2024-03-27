"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { TextArea } from "../ui/text-area";
import { cn } from "@/utils/cn";
import { sendEmail } from "@/actions/sendEmail";
import { SubmitButton } from "./submit-btn";
import toast from "react-hot-toast";

export function ContactForm() {
  return (
    <div className="max-w-md w-full mx-auto rounded-lg md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-zinc-950">
      <h2 className="font-semibold text-xl text-neutral-800 dark:text-gray-300">
        Please get in touch if you would like to have a chat 🤟🏼
      </h2>

      <form
        className="my-8"
        action={async (formData: FormData) => {
          const res = await sendEmail(formData);

          if (res?.error) {
            toast.error(res.error);
            return;
          }

          toast.success("Message sent! I'll get back to you soon.");
        }}
      >
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-gray-800 dark:text-gray-500">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="supercoolemail@cool.person"
            name="senderEmail"
            type="email"
            required
            maxLength={100}
            className="text-black dark:text-white"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message" className="text-gray-800 dark:text-gray-500">
            Message
          </Label>
          <TextArea
            id="message"
            placeholder="Write your message here..."
            name="senderMessage"
            required
            maxLength={5000}
            className="text-black dark:text-white"
          />
        </LabelInputContainer>
        <SubmitButton />
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
