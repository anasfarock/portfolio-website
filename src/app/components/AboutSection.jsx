"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [showFullEducation, setShowFullEducation] = useState(false);
  const [showFullExperience, setShowFullExperience] = useState(false);

  return (
    <section className="text-white py-6" id="about">
      <div className="flex flex-col items-start text-left mt-12 px-0 sm:px-0 md:px-0 py-4 max-w-full mx-auto">
        <div className="w-full text-center">
          <h2 className="text-center text-4xl font-bold text-whites mb-6 md:mb-8">
            About Me
          </h2>
        </div>
        <p className="text-base lg:text-lg text-[#ADB7BE]">
          Hi, I&apos;m Anas Farooq, a Computer Science student currently pursuing my
          degree at SZABIST with a strong interest in technology, data science,
          and innovation. My journey in the tech world has been shaped by
          hands-on experiences through internships, including my roles as a
          Technical Intern at Techaccess Pakistan and Zayup Communication. These
          opportunities have allowed me to enhance my skills in IT
          infrastructure, system troubleshooting, and customer service, while
          also fueling my passion for solving complex problems. In addition to
          my technical background, I have a keen interest in data science, which
          I&apos;ve explored through my proficiency in Python and its applications in
          analyzing and interpreting data. With a strong foundation in
          programming, data structures, system administration, and now Python
          and data science, I am constantly seeking to grow and contribute to
          projects that blend my love for technology and data-driven solutions.
          I&apos;m always open to collaborating on exciting projects and exploring
          new opportunities to further my skills.
        </p>

        <div className="grid gap-3 sm:gap-6 w-full mt-12 grid-cols-1 lg:grid-cols-3 lg:grid-rows-2">
          {/* Education Box - Left Column, Full Height */}
          <div className="relative row-span-2 border border-[#33353F] rounded-md overflow-hidden">
            <div className="relative bg-[#121212] rounded-md py-4 sm:py-8 px-4 md:px-8 lg:px-12">
              <h3 className="text-2xl font-semibold mb-4 text-white text-center">
                Education
              </h3>
              <ul className="list-disc pl-5 text-[#ADB7BE] space-y-2">
                <li>
                  <strong>BS in Computer Science - SZABIST, Islamabad</strong>
                  <div>
                    <p
                      className={`text-sm text-[#ADB7BE] mt-1 ${showFullEducation ? "" : "line-clamp-5 sm:line-clamp-none"
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
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Certifications Box - Top Middle */}
          <div className="relative border border-[#33353F] rounded-md overflow-hidden">
            <div className="relative bg-[#121212] rounded-md py-4 sm:py-8 px-4 md:px-8 lg:px-12">
              <h3 className="text-2xl font-semibold mb-4 text-white text-center">
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
          </div>

          {/* Experience Box - Right Column, Full Height */}
          <div className="relative row-span-2 border border-[#33353F] rounded-md overflow-hidden">
            <div className="relative bg-[#121212] rounded-md py-4 sm:py-8 px-4 md:px-8 lg:px-12">
              <h3 className="text-2xl font-semibold mb-4 text-white text-center">
                Experience
              </h3>
              <ul className="list-disc pl-5 text-[#ADB7BE] space-y-4">
                <li>
                  <strong>Technical Intern - Techaccess Pakistan</strong>
                  <div>
                    <p
                      className={`text-sm text-[#ADB7BE] mt-1 ${showFullExperience ? "" : "line-clamp-5 sm:line-clamp-none"
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
                  </div>
                </li>
                <li>
                  <strong>
                    Customer Support Executive - Zayup Communication
                  </strong>
                  <div>
                    <p
                      className={`text-sm text-[#ADB7BE] mt-1 ${showFullExperience ? "" : "line-clamp-5 sm:line-clamp-none"
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
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Skills Box - Bottom Middle */}
          <div className="relative border border-[#33353F] rounded-md overflow-hidden">
            <div className="relative bg-[#121212] rounded-md py-4 sm:py-8 px-4 md:px-8 lg:px-12">
              <h3 className="text-2xl font-semibold mb-4 text-white text-center">Skills</h3>
              <ul className="grid grid-cols-2 list-disc pl-5 text-[#ADB7BE] gap-y-2">
                <li>C++</li>
                <li>React Native</li><li>React.js</li>

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
      </div>
    </section>
  );
};

export default AboutSection;