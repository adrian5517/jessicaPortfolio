import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured. Missing RESEND_API_KEY.' },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
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

    const fromEmail = process.env.FROM_EMAIL?.trim() || 'no-reply@jessica.ph';
    const toEmail = process.env.CONTACT_EMAIL || 'jesscallanta27@gmail.com';

    const data = await resend.emails.send({
      from: `Contact Form <${fromEmail}>`,
      to: toEmail,
      reply_to: body.email,
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
      const resendMessage = data.error.message || '';
      const isDomainVerificationError = /domain is not verified/i.test(resendMessage);
      const isTestModeRecipientError = /only send testing emails/i.test(resendMessage);
      return NextResponse.json(
        {
          error:
            process.env.NODE_ENV === 'development'
              ? isDomainVerificationError
                ? 'Failed to send email: Sender domain is not verified. Verify your custom domain in Resend and use a matching FROM_EMAIL.'
                : isTestModeRecipientError
                  ? 'Failed to send email: Resend is still in test mode. Verify your domain and use a verified sender/recipient for production.'
                : `Failed to send email: ${resendMessage}`
              : 'Failed to send email',
        },
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
      {
        error:
          process.env.NODE_ENV === 'development'
            ? `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}`
            : 'Internal server error',
      },
      { status: 500 }
    );
  }
}
