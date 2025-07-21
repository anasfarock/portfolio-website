"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C++</li>
        <li>React.js</li>
        <li>React Native</li>
        <li>Tailwind CSS</li>
        <li>Python</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>Git/Github</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SZABIST, Islamabad</li>
        <li>Punjab Group of Colleges</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Programming with Python 3.X - Simplilearn</li>
        <li>An Introduction to Forex Trading - Alison</li>
        <li>JPMorgan Chase - Investment Banking Job Simulation</li>
        <li>Moreton Bay Regional Council - Entrepreneurship and Innovation Job Simulation</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Image wrapper to handle aspect ratio and cropping */}
        <div className="relative w-full h-full">
          <div className="md:w-auto md:h-auto w-full h-full aspect-square">
            <Image
              src="/images/about-image.png"
              alt="About Me Image"
              className="object-cover md:object-contain w-full h-full"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, I’m Anas Farooq, a Computer Science student currently pursuing
            my degree at SZABIST with a strong interest in technology, data
            science, and innovation. My journey in the tech world has been
            shaped by hands-on experiences through internships, including my
            roles as a Technical Intern at Techaccess Pakistan and Zayup
            Communication. These opportunities have allowed me to enhance my
            skills in IT infrastructure, system troubleshooting, and customer
            service, while also fueling my passion for solving complex problems.
            In addition to my technical background, I have a keen interest in
            data science, which I’ve explored through my proficiency in Python
            and its applications in analyzing and interpreting data. With a
            strong foundation in programming, data structures, system
            administration, and now Python and data science, I am constantly
            seeking to grow and contribute to projects that blend my love for
            technology and data-driven solutions. I’m always open to
            collaborating on exciting projects and exploring new opportunities
            to further my skills.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
