"use client";

import React, { useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="my-6 md:my-18 py-24 relative">
      {/* Centered Heading */}
      <h2 className="text-4xl font-bold text-white mb-16 text-center">
        Contact Me
      </h2>

      {/* Two Column Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side - Contact Info */}
        <div className="z-10">
          <h5 className="text-xl font-bold text-white mb-3">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-8 max-w-md">
            I&apos;m currently looking for new opportunities, and my inbox is
            always open. Feel free to reach out, and I&apos;ll get back to you
            as soon as possible!
          </p>

          <h5 className="text-xl font-bold text-white mb-3">Contact Details</h5>
          <div className="text-[#ADB7BE] space-y-2">
            <p>
              <span className="font-medium text-white">Email:</span>{" "}
              <a
                href="mailto:contact@anasfarooq.com"
                className="hover:text-primary-500"
              >
                contact@anasfarooq.com
              </a>
            </p>
            <p>
              <span className="font-medium text-white">Phone:</span>{" "}
              <a href="tel:+923468653531" className="hover:text-primary-500">
                +92-346-8653531
              </a>
            </p>
            <p>
              <span className="font-medium text-white">Address:</span> Islamabad
              Capital Territory, Pakistan, 44000
            </p>
          </div>
          <div className="socials flex flex-row gap-4 mt-4">
            <Link href="https://github.com/anasfarock">
              <Image src={GithubIcon} alt="Github Icon" className="h-10 w-10" />
            </Link>
            <Link href="https://linkedin.com/in/anasfarock">
              <Image
                src={LinkedinIcon}
                alt="LinkedIn Icon"
                className="h-10 w-10"
              />
            </Link>
          </div>
        </div>

        {/* Right Side - Send Message Form */}
        <div className="z-10">
          <h5 className="text-xl font-bold text-white mb-4">
            Send me a Message
          </h5>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="bg-[#18191E] p-3 rounded text-white border border-[#33353F] focus:outline-none focus:border-primary-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="bg-[#18191E] p-3 rounded text-white border border-[#33353F] focus:outline-none focus:border-primary-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="bg-[#18191E] p-3 rounded text-white border border-[#33353F] focus:outline-none focus:border-primary-500"
            />
            <button
              type="submit"
              className="bg-[#A68A64] text-white px-6 py-2 rounded hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Gradient Background */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A68A64] to-[#355E0D] rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default EmailSection;
