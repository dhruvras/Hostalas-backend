import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function generate4DigitOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}

export async function sendMail(req, res) {
  try {
    const otp = generate4DigitOTP();
    const email = req.params.email;

    await resend.emails.send({
      from: "onboarding@resend.dev", // Use this for testing
      to: email,
      subject: "OTP for Account Creation",
      html: `
        <h2>Almost done 🎉</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP is valid for 10 minutes.</p>
      `,
    });

    res.status(200).json({
      message: "Email sent successfully",
      // ❌ REMOVE THIS IN PRODUCTION
      otp: otp
    });

  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Email failed" });
  }
}