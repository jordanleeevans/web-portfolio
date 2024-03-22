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
        <Section>
          <Container>
            <Heading>Message from your website</Heading>
            <Hr />
            <p>{message}</p>
          </Container>
        </Section>
      </Body>
    </Html>
  );
}
