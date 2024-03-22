import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
};

export function ContactFormEmail({ message }: ContactFormEmailProps) {
  // TODO - Get this integrated with the email sending
  return (
    <Html>
      <Head>
        <Tailwind />
      </Head>
      <Body>
        <Section className="bg-gray-100 p-8">
          <Container className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-4">
            <Heading className="text-2xl mb-4 text-center font-bold text-gray-900">Someone Contacted You</Heading>
            <Hr className="mb-4" />
            <p className="text-gray-700">{message}</p>
          </Container>
        </Section>
      </Body>
    </Html>
  );
}

export default ContactFormEmail;