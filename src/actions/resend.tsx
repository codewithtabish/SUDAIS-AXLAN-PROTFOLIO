'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Zod schema for validating form input
const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormInput = z.infer<typeof contactSchema>;

type ServerActionResponse =
  | { success: true }
  | { success: false; error: string }
  | { success: false; validationErrors: Record<string, string[]> };

export async function sendContactEmail(
  formData: ContactFormInput
): Promise<ServerActionResponse> {
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      validationErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = parsed.data;

  try {
    console.log('📤 Sending email via Resend...');
    const response = await resend.emails.send({
      from: 'Sudais Azlan <onboarding@resend.dev>',
      to: 'tabish01099@gmail.com', // Your own email (can receive in dev)
      subject: `New contact form submission from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6">
          <h2>Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    // ✅ Check if email sent successfully
    if (!response.error) {
      console.log('✅ Email sent successfully:', response);
      return { success: true };
    } else {
      console.error('❌ Resend API returned an error:', response.error);
      return {
        success: false,
        error: 'Email not sent. Resend returned an error.',
      };
    }
  } catch (error: any) {
    console.error('❌ Exception during email send:', error);

    return {
      success: false,
      error: error?.message ?? 'Unexpected error occurred while sending email.',
    };
  }
}
