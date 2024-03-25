import React from "react";
import { useFormStatus } from "react-dom";
import { FiSend } from "react-icons/fi";

export function SubmitButton() {
  const status = useFormStatus();
  return (
    <button
      className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center gap-2 disabled:scale-100 disabled:bg-opacity-65"
      type="submit"
      disabled={status.pending}
    >
      {" "}
      {status.pending ? (
        <div className="animate-spin h-5 w-5 rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit <FiSend />
          <BottomGradient />
        </>
      )}
    </button>
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
