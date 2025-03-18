"use client";

import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I&apos;ll try my best to get 
          back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/yourusername">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Contact Details</h5>
        <div className="text-[#ADB7BE] mb-4">
          <p className="flex items-center gap-2">
            <span className="font-medium text-white">Email:</span>
            <a href="mailto:m.anas.farooq@outlook.com" className="hover:text-primary-500">
              m.anas.farooq@outlook.com
            </a>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <span className="font-medium text-white">Phone:</span>
            <a href="tel:+923468653531" className="hover:text-primary-500">
              +92 346 8653531
            </a>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <span className="font-medium text-white">Address:</span>
            <span>Islamabad Capital Territory, Pakistan, 44000</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;

// Code in case of future development and Mailing Feature in the Website

// const EmailSection = () => {
// 	const [emailSubmitted, setEmailSubmitted] = useState(false);
// 	const [error, setError] = useState(""); // State for error messages

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		setError(""); // Reset any previous errors

		
// 		const data = {
// 			email: e.target.email.value,
// 			subject: e.target.subject.value,
// 			message: e.target.message.value,
// 		};

// 		try {
// 			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/send`, {
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				body: JSON.stringify(data),
// 			});

// 			if (response.ok) {
// 				setEmailSubmitted(true); // Email sent successfully
// 				e.target.reset(); // Clear form fields
// 			} else {
// 				const errorData = await response.json();
// 				setError(
// 					errorData.message || "Failed to send the email. Please try again."
// 				);
// 			}
// 		} catch (err) {
// 			console.error("Error:", err);
// 			setError(
// 				"Something went wrong. Please check your connection and try again."
// 			);
// 		}
// 	};

// 	return (
// 		<section
// 			id="contact"
// 			className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
// 		>
// 			{/* Background Glow */}
// 			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

// 			{/* Contact Info Section */}
// 			<div className="z-10">
// 				<h5 className="text-xl font-bold text-white my-2">
// 					Let&apos;s Connect
// 				</h5>
// 				<p className="text-[#ADB7BE] mb-4 max-w-md">
// 					I&apos;m currently looking for new opportunities, my inbox is always
// 					open. Whether you have a question or just want to say hi, I&apos;ll
// 					try my best to get back to you!
// 				</p>
// 				<div className="socials flex flex-row gap-2">
// 					<Link href="https://github.com">
// 						<Image src={GithubIcon} alt="Github Icon" />
// 					</Link>
// 					<Link href="https://linkedin.com">
// 						<Image src={LinkedinIcon} alt="LinkedIn Icon" />
// 					</Link>
// 				</div>
// 			</div>

// 			{/* Email Form Section */}
// 			<div>
// 				{emailSubmitted ? (
// 					<p className="text-green-500 text-sm mt-2">
// 						Email sent successfully!
// 					</p>
// 				) : (
// 					<form className="flex flex-col" onSubmit={handleSubmit}>
// 						<div className="mb-6">
// 							<label
// 								htmlFor="email"
// 								className="text-white block mb-2 text-sm font-medium"
// 							>
// 								Your email
// 							</label>
// 							<input
// 								name="email"
// 								type="email"
// 								id="email"
// 								required
// 								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
// 								placeholder="jacob@google.com"
// 							/>
// 						</div>

// 						<div className="mb-6">
// 							<label
// 								htmlFor="subject"
// 								className="text-white block text-sm mb-2 font-medium"
// 							>
// 								Subject
// 							</label>
// 							<input
// 								name="subject"
// 								type="text"
// 								id="subject"
// 								required
// 								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
// 								placeholder="Just saying hi"
// 							/>
// 						</div>

// 						<div className="mb-6">
// 							<label
// 								htmlFor="message"
// 								className="text-white block text-sm mb-2 font-medium"
// 							>
// 								Message
// 							</label>
// 							<textarea
// 								name="message"
// 								id="message"
// 								required
// 								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
// 								placeholder="Let's talk about..."
// 							></textarea>
// 						</div>

// 						<button
// 							type="submit"
// 							className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
// 						>
// 							Send Message
// 						</button>
// 					</form>
// 				)}

// 				{/* Error Message */}
// 				{error && <p className="text-red-500 text-sm mt-2">{error}</p>}
// 			</div>
// 		</section>
// 	);
// };

// export default EmailSection;
