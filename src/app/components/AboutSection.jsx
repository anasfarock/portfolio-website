"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [showFullEducation, setShowFullEducation] = useState(false);
  const [showFullExperience, setShowFullExperience] = useState(false);

  return (
    <section className="text-[#ffffff] py-6" id="about">
      <div className="flex flex-col items-start text-left mt-12 px-0 sm:px-0 md:px-0 py-4 max-w-full mx-auto">
        <div className="w-full text-center">
          <h2 className="text-center text-4xl font-bold text-[#ffffff] mb-6 md:mb-8">
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

        <div className="grid gap-4 sm:gap-6 md:gap-8 w-full mt-8 sm:mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {/* Education Card - Left Column, Full Height */}
          <div className="relative md:row-span-2 lg:row-span-2 group">
            <div className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-2xl sm:rounded-3xl py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10 shadow-2xl border border-[#2a2d3a] hover:border-[#4a90e2] transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(74,144,226,0.25)] md:h-full flex flex-col">
              {/* Animated background glow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-300 mr-3 sm:mr-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#ffffff] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Education
                  </h3>
                </div>
                <ul className="list-none space-y-3 sm:space-y-4">
                  <li className="relative pl-3 sm:pl-4">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <strong className="text-white text-base sm:text-lg">BS in Computer Science - SZABIST, Islamabad</strong>
                    <div>
                      <p className={`text-sm text-[#ADB7BE] mt-1 sm:mt-2 leading-relaxed ${showFullEducation ? "" : "line-clamp-4 sm:line-clamp-5 md:line-clamp-none"}`}>
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
                        communication&mdash;essential traits for tech industry.
                      </p>
                      <button
                        className="text-blue-400 hover:text-blue-300 text-sm mt-2 sm:mt-3 sm:hidden font-medium transition-colors duration-200"
                        onClick={() => setShowFullEducation((prev) => !prev)}
                      >
                        {showFullEducation ? "See Less" : "See More"}
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications Card - Top Middle */}
          <div className="relative md:col-start-2 md:row-start-1 lg:col-start-2 lg:row-start-1 group">
            <div className="relative bg-gradient-to-br from-[#2d1b69] via-[#1a1a2e] to-[#16213e] rounded-2xl sm:rounded-3xl py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10 shadow-2xl border border-[#2a2d3a] hover:border-[#9d4edd] transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(157,78,221,0.25)] md:h-full flex flex-col">
              {/* Animated background glow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-shadow duration-300 mr-3 sm:mr-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#ffffff] bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Certifications
                  </h3>
                </div>
                <ul className="list-none space-y-2 sm:space-y-3">
                  <li className="relative pl-3 sm:pl-4 text-[#ADB7BE] hover:text-white transition-colors duration-200 text-sm sm:text-base">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    Programming with Python 3.X - Simplilearn
                  </li>
                  <li className="relative pl-3 sm:pl-4 text-[#ADB7BE] hover:text-white transition-colors duration-200 text-sm sm:text-base">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    JPMorgan Chase - Investment Banking Job Simulation
                  </li>
                  <li className="relative pl-3 sm:pl-4 text-[#ADB7BE] hover:text-white transition-colors duration-200 text-sm sm:text-base">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    Moreton Bay Regional Council - Entrepreneurship and Innovation Job Simulation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Card - Right Column, Full Height */}
          <div className="relative md:row-span-2 md:col-start-1 md:row-start-2 lg:row-span-2 lg:col-start-3 lg:row-start-1 group">
            <div className="relative bg-gradient-to-br from-[#0f4c75] via-[#1a1a2e] to-[#16213e] rounded-2xl sm:rounded-3xl py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10 shadow-2xl border border-[#2a2d3a] hover:border-[#00d4aa] transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(0,212,170,0.25)] md:h-full flex flex-col">
              {/* Animated background glow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-cyan-500/10 via-teal-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-shadow duration-300 mr-3 sm:mr-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#ffffff] bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    Experience
                  </h3>
                </div>
                <ul className="list-none space-y-4 sm:space-y-6">
                  <li className="relative pl-3 sm:pl-4">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></div>
                    <strong className="text-white text-base sm:text-lg">Technical Intern - Techaccess Pakistan</strong>
                    <div>
                      <p className={`text-sm text-[#ADB7BE] mt-1 sm:mt-2 leading-relaxed ${showFullExperience ? "" : "line-clamp-3 sm:line-clamp-5 md:line-clamp-none"}`}>
                        During my internship at Techaccess Pakistan, I worked closely
                        with technical teams to support IT infrastructure,
                        troubleshoot system issues, and contribute to various
                        projects. I gained practical experience in managing systems,
                        understanding configurations, and improving overall system
                        performance. This role provided me with hands-on exposure to
                        industry-standard tools and practices in IT services.
                      </p>
                      <button
                        className="text-cyan-400 hover:text-cyan-300 text-sm mt-2 sm:mt-3 sm:hidden font-medium transition-colors duration-200"
                        onClick={() => setShowFullExperience((prev) => !prev)}
                      >
                        {showFullExperience ? "See Less" : "See More"}
                      </button>
                    </div>
                  </li>
                  <li className="relative pl-3 sm:pl-4">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></div>
                    <strong className="text-white text-base sm:text-lg">Customer Support Executive - Zayup Communication</strong>
                    <div>
                      <p className={`text-sm text-[#ADB7BE] mt-1 sm:mt-2 leading-relaxed ${showFullExperience ? "" : "line-clamp-3 sm:line-clamp-5 md:line-clamp-none"}`}>
                        In my role as a Customer Support Executive at Zayup
                        Communication, I was responsible for handling customer
                        queries, providing real-time technical support, and resolving
                        issues related to communication services. I developed strong
                        communication and problem-solving skills while ensuring a high
                        level of customer satisfaction.
                      </p>
                      <button
                        className="text-cyan-400 hover:text-cyan-300 text-sm mt-2 sm:mt-3 sm:hidden font-medium transition-colors duration-200"
                        onClick={() => setShowFullExperience((prev) => !prev)}
                      >
                        {showFullExperience ? "See Less" : "See More"}
                      </button>
                    </div>
                  </li>
                </ul>
                <div className="hidden sm:block">
                  <button
                    className="text-cyan-400 hover:text-cyan-300 text-sm mt-2 sm:mt-3 font-medium transition-colors duration-200"
                    onClick={() => setShowFullExperience((prev) => !prev)}
                  >
                    {showFullExperience ? "See Less" : "See More"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Card - Bottom Middle */}
          <div className="relative md:col-start-2 md:row-start-2 lg:col-start-2 lg:row-start-2 group">
            <div className="relative bg-gradient-to-br from-[#ff6b6b] via-[#ee5a24] to-[#ffa502] rounded-2xl sm:rounded-3xl py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10 shadow-2xl border border-[#2a2d3a] hover:border-[#ff6b6b] transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(255,107,107,0.25)] md:h-full flex flex-col">
              {/* Animated background glow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-500/10 via-red-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25 transition-shadow duration-300 mr-3 sm:mr-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#ffffff] bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Skills
                  </h3>
                </div>
                <ul className="grid grid-cols-2 list-none gap-y-2 sm:gap-y-3 gap-x-2 sm:gap-x-4">
                  {[
                    "C++", "React Native", "React.js", "Tailwind CSS", 
                    "Python", "Node.js", "Express.js", "MySQL", "Git/Github"
                  ].map((skill, index) => (
                    <li key={index} className="relative pl-3 sm:pl-4 text-[#ffffff] hover:text-yellow-300 transition-colors duration-200 font-medium text-sm sm:text-base">
                      <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;