// import { EmailTemplate } from '../../../components/EmailTemplate'; 
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { render } from '@react-email/render'; // If you're using this package

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    // Properly extract the body from the request
    const body = await req.json();
    const { email, subject, message } = body;

    // Create the email content as HTML
    const emailContent = render(
      <>
        <h1>{subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New Message Submitted!</p>
        <p>{message}</p>
      </>
    );

    // Send email with the rendered HTML
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['notanasfarooq@icloud.com', email],
      subject: subject,
      html: emailContent,  // Send as static HTML
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
