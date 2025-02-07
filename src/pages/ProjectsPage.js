import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/projectsData";

const categories = [
  "All", "AI & ML", "Web Development", "Embedded Systems"
];

const categorizedProjects = {
  "AI & ML": ["AI Image Classifier", "Vision Transformer Model"],
  "Web Development": ["E-commerce Platform"],
  "Embedded Systems": ["TurtleBot Navigation"]
};

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(project => categorizedProjects[selectedCategory].includes(project.title));

  return (
    <div className="min-h-screen p-10 bg-gray-100 dark:bg-black">
      <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-6">Projects</h1>
      
      {/* Category Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          className="px-4 py-2 bg-white dark:bg-gray-800 border rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-purple-700 text-white p-6 rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105"
            onClick={() => navigate(`/projects/${index}`, { state: project })}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;