import nodemailer from "nodemailer";

function generate4DigitOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}

export async function sendMail(req, res) {
  try {
    const otp = generate4DigitOTP();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dhruvrastogi2020@gmail.com",
        pass: "xnulbrvaelnbacbj", // Gmail App Password
      },
    });

    const mailOptions = {
      from: "dhruvrastogi2020@gmail.com",
      to: req.params.email,
      subject: "OTP for Account Creation",
      text: `Your OTP is: ${otp}. It is valid for 10 minutes.`,
      html: `<h2>Almost done 🎉</h2>
             <p>Your OTP is: <b>${otp}</b></p>`,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);

    res.status(200).json({
      message: "Email sent successfully",
      otp: otp, // remove this in production
    });

  } catch (error) {
    console.log("Error sending email:", error);
    res.status(500).json({ message: "Email failed" });
  }
} 
