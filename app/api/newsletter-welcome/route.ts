import WelcomeEmail from "@/components/emails/welcome";
import { uuid } from "@/util/uuid";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  // Extract body from request
  const body = await req.json();
  const { email } = body;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Subscribe the user to the email list
    const { data: contactData, error: contactError } = await resend.contacts.create({
      email,
      unsubscribed: false, // Set to false to subscribe the user
      audienceId: process.env.RESEND_AUDIENCE_ID as string, 
    });

    if (contactError) {
      return NextResponse.json(
        { message: "Failed to subscribe user to email list", contactError },
        { status: 400 }
      );
    }

    // Send the welcome email
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: `Asadbek Savronov - Blog <blog@blog.asadbek.tech>`,
      to: email,
      subject: "Asadbek's Blog - Thank You for Subscribing!",
      react: WelcomeEmail({ email }), // Use the custom React component to render email content
    });

    if (emailError) {
      return NextResponse.json(
        { message: "Email sending failed", emailError },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Subscription and welcome email sent successfully",
        contactData,
        emailData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling subscription and email:", error);
    return NextResponse.json(
      { message: "Failed to process request", error },
      { status: 500 }
    );
  }
}
