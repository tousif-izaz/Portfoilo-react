import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state;

  if (!project) {
    return <div className="text-center text-xl p-10">Project Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black p-10">
      <button
        className="mb-6 px-4 py-2 bg-purple-700 text-white rounded-lg"
        onClick={() => navigate(-1)}
      >
        ← Back to Projects
      </button>

      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-md mb-6" />
        <h1 className="text-3xl font-bold text-black dark:text-white">{project.title}</h1>
        <p className="mt-4 text-lg">{project.description}</p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Technologies Used:</h2>
          <ul className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, i) => (
              <li key={i} className="bg-purple-700 text-white px-3 py-1 rounded-md text-sm">{tech}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Findings:</h2>
          <p className="mt-2">{project.findings}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Accomplishments:</h2>
          <p className="mt-2">{project.accomplishments}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Challenges:</h2>
          <p className="mt-2">{project.challenges}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Project Date:</h2>
          <p className="mt-2">{project.date}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
