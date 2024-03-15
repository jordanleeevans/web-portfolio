import React from "react";

export default function EmailForm() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-lime-900">Email Me</h1>
      <form
        className="flex flex-col items-center justify-center"
        action="mailto:jordanleeevans@hotmail.com"
        method="post"
        encType="text/plain"
      >
        <label htmlFor="name" className="text-lime-900">
          Name:
        </label>
        <input type="text" id="name" name="name" className="rounded-lg" />
        <label htmlFor="email" className="text-lime-900">
          Email:
        </label>
        <input type="text" id="email" name="email" className="rounded-lg" />
        <label htmlFor="message" className="text-lime-900">
          Message:
        </label>
        <textarea id="message" name="message" className="rounded-lg" />
        <input
          type="submit"
          value="Submit"
          className="bg-lime-900 text-lime-100 rounded-lg"
        />
      </form>
    </div>
  );
}
