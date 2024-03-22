"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { TextArea } from "../ui/text-area";
import { cn } from "@/utils/cn";
import { FiSend } from "react-icons/fi";
import { sendEmail } from "@/actions/sendEmail";

export function ContactForm() {
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input ">
      <h2 className="font-semibold text-xl text-neutral-800 dark:text-gray-800">
        Please get in touch if you would like to have a chat 🤟🏼
      </h2>

      <form
        className="my-8"
        action={async (formData) => {
          await sendEmail(formData).then((res) => {
            if (res.error) {
              alert(res.error);
            } else {
              alert("Message sent successfully, whoop whoop! 🎉");
            }
          });
        }}
      >
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="dark:text-gray-800">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="supercoolemail@cool.person"
            name="senderEmail"
            type="email"
            required
            maxLength={100}
            className="!text-black"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message" className="dark:text-gray-800">
            Message
          </Label>
          <TextArea
            id="message"
            placeholder="Write your message here..."
            name="senderMessage"
            type="text"
            required
            maxLength={5000}
            className="!text-black"
          />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center gap-2"
          type="submit"
        >
          Submit <FiSend />
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

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
