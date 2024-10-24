import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface WelcomeEmailProps {
    email: string;
  }
  

  export const WelcomeEmail = ({ email }: WelcomeEmailProps) => (
    <Html>
      <Head />
      <Preview>Welcome to Asadbek's Tech Blog</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://asadbek.tech/favicon.png"
            width="50"
            height="50"
            alt="Asadbek's Blog"
            style={logo}
          />
          <Text style={paragraph}>Hello {email},</Text>
          <Text style={paragraph}>
            Thank you for subscribing to my tech blog! I’m excited to share the
            latest insights, tutorials, and updates with you.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://www.asadbek.tech/blog">
             Explore
            </Button>
          </Section>
          <Text style={paragraph}>
            Best regards,
            <br />
            Asadbek
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
          <p>asadbek.tech &nbsp; ✦ &nbsp; 2024 </p>
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  WelcomeEmail.PreviewProps = {
    email: "Subscriber",
  } as WelcomeEmailProps;
  
  export default WelcomeEmail;
  
  const main = {
    backgroundColor: "#f9f9f9",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    padding: "20px",
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 8px 48px",
    maxWidth: "600px",
    backgroundColor: "#ffffff",
    borderRadius: "6px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
  };
  
  const logo = {
    display: "block",
    margin: "0 auto 20px",
  };
  
  const paragraph = {
    fontSize: "18px",
    lineHeight: "28px",
    color: "#333333",
    marginBottom: "20px",
    textAlign: "center" as const
  };
  
  const btnContainer = {
    textAlign: "center" as const,
    marginBottom: "20px",
  };
  
  const button = {
    backgroundColor: "#35af51",
    borderRadius: "5px",
    color: "#ffffff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    padding: "12px 20px",
    display: "inline-block",
  };
  
  const hr = {
    borderColor: "#eeeeee",
    margin: "30px 0",
  };
  
  const footer = {
    color: "#888888",
    fontSize: "14px",
    textAlign: "center" as const,
    textDecoration: "none",
  };
  