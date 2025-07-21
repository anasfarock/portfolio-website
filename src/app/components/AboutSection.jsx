"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [showFullEducation, setShowFullEducation] = useState(false);
  const [showFullExperience, setShowFullExperience] = useState(false);

  return (
    <section className="text-white py-6" id="about">
      <div className="flex flex-col items-start text-left py-8 px-4 sm:py-16 sm:px-6 max-w-1xl mx-auto">
        <div className="w-full text-center">
          <h2 className="text-4xl font-bold text-white mb-4 inline-block">
            About Me
          </h2>
        </div>
        <p className="text-base lg:text-lg text-white">
          Hi, I&apos;m Anas Farooq, a Computer Science student currently pursuing my
          degree at SZABIST with a strong interest in technology, data science,
          and innovation. My journey in the tech world has been shaped by
          hands-on experiences through internships, including my roles as a
          Technical Intern at Techaccess Pakistan and Zayup Communication. These
          opportunities have allowed me to enhance my skills in IT
          infrastructure, system troubleshooting, and customer service, while
          also fueling my passion for solving complex problems. In addition to
          my technical background, I have a keen interest in data science, which
          I’ve explored through my proficiency in Python and its applications in
          analyzing and interpreting data. With a strong foundation in
          programming, data structures, system administration, and now Python
          and data science, I am constantly seeking to grow and contribute to
          projects that blend my love for technology and data-driven solutions.
          I’m always open to collaborating on exciting projects and exploring
          new opportunities to further my skills.
        </p>

        <div className="grid gap-6 w-full mt-12 grid-cols-1 lg:grid-cols-3 lg:grid-rows-2">
          {/* Education Box - Left Column, Full Height */}
          <div className="row-span-2 sm:border-[#33353F] sm:border rounded-md py-8 px-6 px-4 md:px-8 lg:px-12">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Education
            </h3>
            <ul className="list-disc pl-5 text-[#ADB7BE] space-y-2">
              <li>
                <strong>BS in Computer Science - SZABIST, Islamabad</strong>
                <p
                  className={`text-sm text-[#ADB7BE] mt-1 ${
                    showFullEducation ? "" : "line-clamp-5 sm:line-clamp-none"
                  }`}
                >
                  I am currently pursuing a Bachelor&apos;s degree in Computer
                  Science at SZABIST, where I am dedicated to developing a
                  strong and comprehensive foundation in key areas such as
                  software development, data structures, algorithms, and systems
                  design. My academic journey so far has been enriched with a
                  combination of theoretical learning and practical, hands-on
                  projects that have significantly sharpened my analytical
                  thinking, and problem-solving abilities. Through coursework
                  and team-based assignments, I have gained experience in
                  designing and implementing scalable software solutions, and
                  understanding how modern computing infrastructures work under
                  the hood. These experiences have not only enhanced my
                  technical skills but also helped me build soft skills like
                  teamwork, time management, and effective
                  communication—essential traits for tech industry.
                </p>
                {/* Toggle Button (mobile only) */}
                <button
                  className="text-blue-400 text-sm mt-2 sm:hidden"
                  onClick={() => setShowFullEducation((prev) => !prev)}
                >
                  {showFullEducation ? "See Less" : "See More"}
                </button>
              </li>
            </ul>
          </div>

          {/* Certifications Box - Top Middle */}
          <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-6 px-4 md:px-8 lg:px-12">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Certifications
            </h3>
            <ul className="list-disc pl-5 text-[#ADB7BE]">
              <li>Programming with Python 3.X - Simplilearn</li>
              <li>JPMorgan Chase - Investment Banking Job Simulation</li>
              <li>
                Moreton Bay Regional Council - Entrepreneurship and Innovation
                Job Simulation
              </li>
            </ul>
          </div>

          {/* Experience Box - Right Column, Full Height */}
          <div className="row-span-2 sm:border-[#33353F] sm:border rounded-md py-8 px-6 px-4 md:px-8 lg:px-12">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Experience
            </h3>
            <ul className="list-disc pl-5 text-[#ADB7BE] space-y-4">
              <li>
                <strong>Technical Intern - Techaccess Pakistan</strong>
                <p
                  className={`text-sm text-[#ADB7BE] mt-1 ${
                    showFullExperience ? "" : "line-clamp-5 sm:line-clamp-none"
                  }`}
                >
                  During my internship at Techaccess Pakistan, I worked closely
                  with technical teams to support IT infrastructure,
                  troubleshoot system issues, and contribute to various
                  projects. I gained practical experience in managing systems,
                  understanding configurations, and improving overall system
                  performance. This role provided me with hands-on exposure to
                  industry-standard tools and practices in IT services.
                </p>
                {/* Button to expand */}
                {/** Place this button only once after all paragraphs if you want 1 toggle for all */}
                <button
                  className="text-blue-400 text-sm mt-2 sm:hidden"
                  onClick={() => setShowFullExperience((prev) => !prev)}
                >
                  {showFullExperience ? "See Less" : "See More"}
                </button>
              </li>
              <li>
                <strong>
                  Customer Support Executive - Zayup Communication
                </strong>
                <p
                  className={`text-sm text-[#ADB7BE] mt-1 ${
                    showFullExperience ? "" : "line-clamp-5 sm:line-clamp-none"
                  }`}
                >
                  In my role as a Customer Support Executive at Zayup
                  Communication, I was responsible for handling customer
                  queries, providing real-time technical support, and resolving
                  issues related to communication services. I developed strong
                  communication and problem-solving skills while ensuring a high
                  level of customer satisfaction.
                </p>
                {/* Button to expand */}
                {/** Place this button only once after all paragraphs if you want 1 toggle for all */}
                <button
                  className="text-blue-400 text-sm mt-2 sm:hidden"
                  onClick={() => setShowFullExperience((prev) => !prev)}
                >
                  {showFullExperience ? "See Less" : "See More"}
                </button>
              </li>
            </ul>
          </div>

          {/* Skills Box - Bottom Middle */}
          <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-6 px-4 md:px-8 lg:px-12">
            <h3 className="text-2xl font-semibold mb-4 text-white">Skills</h3>
            <ul className="grid grid-cols-2 list-disc pl-5 text-[#ADB7BE] gap-y-2">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
