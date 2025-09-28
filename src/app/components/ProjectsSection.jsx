"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my projects and skills.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/anasfarock/portfolio-website",
    previewUrl: "https://anasfarooq.com",
    showLivePreview: true, // Flag to show live website
  },
  {
    id: 2,
    title: "IKSU Buisness Website",
    description: "A business website for IKSU, showcasing their services and offerings.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/anasfarock/iksu",
    previewUrl: "https://www.iksuconsulting.com/",
    showLivePreview: true, // Flag to show live website
  },
  {
    id: 3,
    title: "Zithai Sweets Website",
    description: "A business website for Zithai, showcasing their services and offerings.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/anasfarock/zithai",
    previewUrl: "https://zithai.vercel.app/",
    showLivePreview: true, // Flag to show live website
  },
  {
    id: 4,
    title: "Event Management Application",
    description: "Event management mobile application for managing events and registrations.",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/anasfarock/app-event-management",
    previewUrl: "https://github.com/anasfarock/app-event-management",
    showLivePreview: false,
  },
  {
    id: 5,
    title: "User Authentication App",
    description: "User authentication app built with React Native, featuring login and registration.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/anasfarock/login-reactnative",
    previewUrl: "https://github.com/anasfarock/login-reactnative",
    showLivePreview: false,
  },
  {
    id: 6,
    title: "Trading View Indicator",
    description: "Trading view indicator based on ICT stratigies for technical analysis.",
    image: "/images/projects/5.png",
    tag: ["Other"],
    gitUrl: "https://github.com/anasfarock/tradingview-indicator",
    previewUrl: "https://github.com/anasfarock/tradingview-indicator",
    showLivePreview: false,
  },
  {
    id: 7,
    title: "Forest Fire Dataset",
    description: "Data Analysis - Forest fire dataset for machine learning projects.",
    image: "/images/projects/6.png",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/anasfarock/forestfire-dataset",
    previewUrl: "https://github.com/anasfarock/forestfire-dataset",
    showLivePreview: false,
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <br className="mt-12"/>
      <h2 className="text-center text-4xl font-bold text-[#ffffff] mt-12 mb-6 md:mb-8">
        My Projects
      </h2>
      <div className="text-[#ffffff] flex flex-row justify-center items-center gap-2 pb-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "Other"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              showLivePreview={project.showLivePreview}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;