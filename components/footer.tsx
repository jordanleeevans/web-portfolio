import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-600 dark:text-gray-400 p-4 text-center">
      <p className="text-center text-sm mb-2">
        &copy; 2024 Jordan&apos;s Portfolio
      </p>
      <p className="text-center text-xs">
        {" "}
        Built with React & Next.js, Tailwind CSS, TypeScript, Framer Motion,
        Aceternity UI, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
