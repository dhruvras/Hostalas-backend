import Brevo from "@getbrevo/brevo";

function generate4DigitOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}

export async function sendMail(req, res) {
  try {
    const otp = generate4DigitOTP();
    const email = req.params.email;

    const apiInstance = new Brevo.TransactionalEmailsApi();

    apiInstance.setApiKey(
      Brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );

    const sendSmtpEmail = {
      sender: { 
        name: "Hostalas",
        email: "dhruvrastogi2020@gmail.com", // MUST be verified in Brevo
      },
      to: [{ email: email }],
      subject: "OTP for Account Creation",
      htmlContent: `
        <h2>Almost done 🎉</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP is valid for 10 minutes.</p>
      `,
    };

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    res.status(200).json({
      message: "Email sent successfully",
      // ❌ REMOVE IN PRODUCTION
      otp: otp,
    });

  } catch (error) {
    console.error("Brevo error:", error.response?.body || error);
    res.status(500).json({ message: "Email failed" });
  }
}