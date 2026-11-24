
import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/validations/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          message: "Please check your submitted information.",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validation.data;
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject: `New Project Inquiry - ${data.name}`,
      text: `
NEW PROJECT INQUIRY
===================

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || "Not provided"}

Service: ${data.service}
Budget: ${data.budget}
Timeline: ${data.timeline}

PROJECT DESCRIPTION
-------------------
${data.message}

===================
Sent from DevCenter Website
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { message: "Unable to send your inquiry. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
