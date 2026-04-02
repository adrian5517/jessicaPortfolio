import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate form data
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email to your inbox
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'jesscallanta27@gmail.com',
      replyTo: body.email,
      subject: `New Contact Form Submission: ${body.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0d0d0d; border-bottom: 3px solid #0d0d0d; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #fff; border-left: 4px solid #ffe500;">
            <p style="margin: 10px 0;"><strong>From:</strong> ${body.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${body.subject}</p>
          </div>

          <div style="margin: 20px 0; padding: 15px; background-color: #fff; border: 2px solid #0d0d0d;">
            <h3 style="color: #0d0d0d; margin-top: 0;">Message:</h3>
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${body.message}</p>
          </div>

          <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    });

    if (data.error) {
      console.error('Resend error:', data.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        id: data.data?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
