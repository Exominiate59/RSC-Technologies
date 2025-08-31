// api/contact.js
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(2).max(150),
  message: z.string().min(10).max(5000),
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Healthcheck simple
    return res.status(200).json({ ok: true });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = ContactSchema.parse(req.body);

    // Choix du transport (SMTP custom OU Gmail App Password)
    let transporter;
    if (process.env.SMTP_HOST) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 465),
        secure: String(process.env.SMTP_SECURE || "true") === "true",
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
    } else {
      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_APP_PASS },
      });
    }

    const html = `
      <div style="font-family:Arial,sans-serif;color:#0a0a0a;background:#0b0f14;padding:24px">
        <div style="max-width:640px;margin:0 auto;background:#0f172a;border:1px solid #1f2937;border-radius:12px;padding:24px">
          <h2 style="color:#00d3f2;margin:0 0 12px">Nouveau message – RSC Technologies</h2>
          <p style="color:#cbd5e1;margin:4px 0"><strong>De :</strong> ${name} &lt;${email}&gt;</p>
          <p style="color:#cbd5e1;margin:4px 0"><strong>Sujet :</strong> ${subject}</p>
          <hr style="border:0;border-top:1px solid #1f2937;margin:16px 0" />
          <pre style="white-space:pre-wrap;color:#e2e8f0;font-family:ui-monospace,Menlo,Consolas,monospace">${message}</pre>
        </div>
      </div>`;

    await transporter.sendMail({
      from: `"RSC Contact" <${process.env.MAIL_USER || process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    if (err?.issues) {
      return res.status(400).json({ error: "Invalid payload", details: err.issues });
    }
    console.error("Contact API error:", err);
    return res.status(500).json({ error: "Email failed" });
  }
}