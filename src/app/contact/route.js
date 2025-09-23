import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "fakharkhan3312@gmail.com", // your Gmail
      pass: process.env.GMAIL_APP_PASSWORD
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "fakharkhan3312@gmail.com",
      subject: `New message from ${name}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Email sending failed" }), { status: 500 });
  }
}
