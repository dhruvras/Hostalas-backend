import * as Brevo from "@getbrevo/brevo";

function generate4DigitOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}

export async function sendMail(req, res) {
  try {
    const otp = generate4DigitOTP();
    const email = req.params.email;

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Hostalas",
          email: "dhruvrastogi2020@gmail.com", // must be verified in Brevo
        },
        to: [{ email }],
        subject: "OTP for Account Creation",
        htmlContent: `
          <h2>Almost done 🎉</h2>
          <p>Your OTP is:</p>
          <h1>${otp}</h1>
          <p>This OTP is valid for 10 minutes.</p>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Brevo API error:", data);
      return res.status(500).json({ message: "Email failed" });
    }

    res.status(200).json({
      message: "Email sent successfully",
      otp, // remove in production
    });

  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Email failed" });
  }
}