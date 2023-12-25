"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "Rocky, el robot autonomo",
      description: "Soy un super robot amigo, que mas tengo que decir?",
      image: "/images/project01/project01-00.jpg",
      tag: ["Todos", "Otros 1"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Proximamente",
      description: "Project 2 description",
      image: "/images/coming-soon.png",
      tag: ["Todos", "Otros 2"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Proximamente",
      description: "Project 3 description",
      image: "/images/coming-soon.png",
      tag: ["Todos", "Otros 1"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Proximamente",
      description: "Project 4 description",
      image: "/images/coming-soon.png",
      tag: ["Todos", "Otros 2"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Proximamente",
      description: "Authentication and CRUD operations",
      image: "/images/coming-soon.png",
      tag: ["Todos", "Otros 1"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Proximamente",
      description: "Project 5 description",
      image: "/images/coming-soon.png",
      tag: ["Todos", "Otros 1"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];  

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Nuestros proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Otros 1"
          isSelected={tag === "Otros 1"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Otros 2"
          isSelected={tag === "Otros 2"}
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;