import React from "react";

const ProjectCard = ({ project }) => {
  console.log(project);

  return (
    <div className="w-full m-2 p-2 font-inter my-4 ">
      <div className="grid grid-flow-row gap-3 w-full">
        <h2 className="text-xl text-orange-400 font-bold">
          {project.id}. {project.title}
        </h2>
        <p className="text-sm">{project.description}</p>
        <h2 className="bg-zinc-50 w-36 text-black text-md font-semibold text-center">
          User-Friendly UI
        </h2>
        <ul className="text-sm">
          {project.usage.map((item, idx) => (
            <li className="list-disc ml-10" key={idx}>
              {item}
            </li>
          ))}
        </ul>
        <div className="">
          <h2 className="bg-zinc-50 w-36 text-black text-sm font-semibold text-center">
            Technologies
          </h2>
          <div className="flex flex-wrap items-center gap-4 ml-10">
            {project.technologiesUsed.map((tech, idx) => (
              <h2
                key={idx}
                className="p-1 px-2 text-xs rounded-sm mt-3 text-white border"
              >
                {tech}
              </h2>
            ))}
          </div>
        </div>
        <hr className="mt-3" />
      </div>
    </div>
  );
};

export default ProjectCard;
