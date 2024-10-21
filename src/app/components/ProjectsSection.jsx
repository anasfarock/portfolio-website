import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData =[
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/images/projects/01.png",
        tag: ["All","Web"],
    },
    {
        id: 2,
        title: "Photography Portfolio Website",
        description: "Project 2 description",
        image: "/images/projects/02.png",
        tag: ["All","Web"],
    },
    {
        id: 3,
        title: "E-commerce Portfolio Website",
        description: "Project 3 description",
        image: "/images/projects/03.png",
        tag: ["All","Web"],
    },
]

const ProjectsSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div>{projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} />)}</div>
    </>
  )
}

export default ProjectsSection