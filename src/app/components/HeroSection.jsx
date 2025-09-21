"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#4A6118_0%,#5A7D2A_20%,#6B8E23_35%,#88A454_50%,#6B8E23_65%,#5A7D2A_80%,#4A6118_100%)] bg-[length:200%_100%] animate-gradient-slide">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Anas Farooq",
                1000,
                "Mobile Developer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="relative mb-6">
            <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl relative z-10">
              A Computer Science student at SZABIST with experience in IT support and system troubleshooting through internships at Techaccess Pakistan and Zayup Communication. I also have a strong interest in finance and have developed skills through coursework and self-directed projects.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-[#6B8E23]/10 to-transparent blur-lg -z-10"></div>
          </div>
          <div className="relative z-10">
            <Link
              href="https://www.linkedin.com/in/anasfarock/"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-[linear-gradient(90deg,#4A6118_0%,#5A7D2A_20%,#6B8E23_35%,#88A454_50%,#6B8E23_65%,#5A7D2A_80%,#4A6118_100%)] bg-[length:200%_100%] animate-gradient-slide"></span>
              <span className="relative text-white font-medium">Hire Me</span>
            </Link>
            <Link
              href="/AnasFarooq_Resume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full relative overflow-hidden group mt-3"
            >
              <span className="absolute inset-0 bg-[linear-gradient(90deg,#4A6118_0%,#5A7D2A_20%,#6B8E23_35%,#88A454_50%,#6B8E23_65%,#5A7D2A_80%,#4A6118_100%)] bg-[length:200%_100%] animate-gradient-slide"></span>
              <span className="block bg-[#121212] rounded-full px-5 py-2 relative text-white group-hover:bg-slate-800 transition-colors">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="col-span-5 flex justify-center">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden relative">
              <Image
                src="/images/file.jpeg"
                alt="Profile Picture"
                className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
                width={400}
                height={400}
              />
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
