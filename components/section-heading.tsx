import React from "react";

interface SectionHeadingProps {
  title: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}
