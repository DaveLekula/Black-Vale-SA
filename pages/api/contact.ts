import type { NextApiRequest, NextApiResponse } from 'next';

// Contact form API endpoint
// To enable email delivery, configure CONTACT_EMAIL and a mail provider
// (e.g. SendGrid: set SENDGRID_API_KEY in .env.local)
// Until configured, returns 503 with an honest message.

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const { name, email, company, service, budget, description, privacy } = req.body;

  // Basic server-side validation
  if (!name || !email || !description || !privacy) {
    return res.status(400).json({ message: 'Required fields are missing.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }

  const recipientEmail = process.env.CONTACT_EMAIL;

  if (!recipientEmail) {
    // Delivery not configured — honest unavailable state
    console.log('[Contact form] Delivery not configured. Enquiry received:', { name, email, service });
    return res.status(503).json({
      message:
        'The contact form delivery is not yet configured. Please copy your details and reach out directly once the deployment configuration is complete.',
    });
  }

  // If you add a mail integration, implement it here.
  // Example with SendGrid (add @sendgrid/mail to dependencies):
  //
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // await sgMail.send({
  //   to: recipientEmail,
  //   from: process.env.FROM_EMAIL || recipientEmail,
  //   subject: `New enquiry from ${name}`,
  //   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\nBudget: ${budget}\n\n${description}`,
  // });

  return res.status(200).json({ message: 'Enquiry received.' });
}
