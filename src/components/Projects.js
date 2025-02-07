import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = ({ projects }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-10 bg-gray-100 dark:bg-black">
      <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-10">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-purple-700 text-white p-6 rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105"
            onClick={() => navigate(`/projects/${index}`, { state: project })}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm">{project.description}</p>
            <div className="mt-4">
              <h3 className="text-lg font-medium">Technologies:</h3>
              <ul className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="bg-gray-200 text-black px-3 py-1 rounded-md text-sm">{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
