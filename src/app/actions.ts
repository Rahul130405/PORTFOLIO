'use server'
// This file handles server-side logic for sending emails securely.

import { Resend } from 'resend';

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  const apiKey = process.env.RESEND_API_KEY;
  console.log('API Key present:', !!apiKey);
  if (apiKey) {
    console.log('API Key starts with:', apiKey.substring(0, 5));
  }
  
  if (!apiKey) {
    console.error('RESEND_API_KEY is missing');
    return { success: false, error: 'Configuration error: API Key missing' };
  }

  const resend = new Resend(apiKey);

  try {
    console.log('Attempting to send email via Resend...');
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['yashckp@gmail.com'],
      subject: `New Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: error.message };
    }

    console.log('Email sent successfully:', data);
    return { success: true };
  } catch (e) {
    console.error('Server Action Error:', e);
    return { success: false, error: 'Failed to send message: ' + (e instanceof Error ? e.message : String(e)) };
  }
}
