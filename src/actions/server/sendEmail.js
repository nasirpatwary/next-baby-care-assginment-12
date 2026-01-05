import nodemailer from "nodemailer";

export const sendEmail = async ({to, subject, html}) => {
    const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // e.g., smtp.gmail.com
    port:  465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, 
    },
  });
 await transporter.sendMail({
  from: `"Hero toys" <${process.env.EMAIL_USER}>`,
  to,
  subject,
  html
 })
}