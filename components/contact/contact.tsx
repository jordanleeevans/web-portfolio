"use client";
import React from "react";
import { ContactForm } from "@/components/contact/contact-form";
import SectionHeading from "@/components/section-heading";
import useSectionInView from "@/hooks/active-section";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref, inView } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <ContactForm />;
    </motion.section>
  );
}
