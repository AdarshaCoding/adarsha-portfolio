import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
const Projects = () => {
  return (
    <div className="p-10 border border-gray-400 relative font-syne rounded-md mb-20">
      <h2 className="font-semibold text-black absolute top-[-18px] bg-zinc-200 p-2 px-10 rounded-md">
        PROJECTS
      </h2>
      <div className=" text-gray-400">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link to="/blogs">
        <button className="p-2 font-mono absolute  bg-slate-600 right-5 bottom-2 rounded-md hover:text-orange-500">
          Explore My Blogs!
        </button>
      </Link>
    </div>
  );
};

export default Projects;
