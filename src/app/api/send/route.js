import nodemailer from "nodemailer";

export async function POST(req) {
	try {
		const { email, subject, message } = await req.json();

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		const mailOptions = {
			from: process.env.EMAIL_USER, // Sender email
			to: process.env.EMAIL_USER, // Your Gmail address to receive the email
			subject: `New message from ${email}: ${subject}`, // Customize the subject
			text: `You have received a new message from ${email}.\n\nMessage:\n${message}`,
		};

		const info = await transporter.sendMail(mailOptions);

		return new Response(
			JSON.stringify({ success: true, message: "Email sent", info }),
			{ status: 200 }
		);
	} catch (error) {
		return new Response(
			JSON.stringify({ success: false, message: "Email not sent", error }),
			{ status: 500 }
		);
	}
}
