import React, { useState } from "react";

const skillsData = {
  frontend: [
    { name: "React", level: 60 },
    { name: "JavaScript", level: 70 },
    { name: "HTML", level: 75 },
    { name: "CSS", level: 70 },
    { name: "Tailwind CSS", level: 65 },
    { name: "Next.js", level: 60 },
  ],
  backend: [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
    { name: "Django", level: 65 },
    { name: "Django-Rest-Framework", level: 65 },
    { name: "Jest", level: 60 },
  ],
  devops: [
    { name: "Git", level: 80 },
    { name: "GitHub", level: 80 },
    { name: "Docker", level: 70 },
    { name: "Kubernetes", level: 60 },
    { name: "CI/CD", level: 60 },
  ],
  databases: [
    { name: "SQL", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "PostgreSQL", level: 65 },
    { name: "BigQuery", level: 60 },
    { name: "Hadoop", level: 55 },
  ],
  dataScience: [
    { name: "Pandas", level: 85 },
    { name: "NumPy", level: 85 },
    { name: "Matplotlib", level: 75 },
    { name: "Seaborn", level: 70 },
    { name: "Scikit-learn", level: 75 },
    { name: "TensorFlow", level: 70 },
    { name: "PyTorch", level: 85 },
    { name: "PyTorch Lightning", level: 80 },
    { name: "Data Visualization", level: 80 },
    { name: "Data Cleaning", level: 85 },
    { name: "Statistical Analysis", level: 80 },
  ],
  computerVision: [
    { name: "OpenCV", level: 85 },
    { name: "Computer Vision", level: 80 },
    { name: "ROS2", level: 70 },
    { name: "Gazebo", level: 65 },
  ],
  programmingLanguages: [
    { name: "Python", level: 90 },
    { name: "C++", level: 75 },
    { name: "Java", level: 65 },
  ],
  businessLeadership: [
    { name: "Project Management", level: 75 },
    { name: "Team Leadership", level: 80 },
    { name: "Operations Management", level: 70 },
    { name: "Marketing Strategy", level: 65 },
  ],
};

const Skills = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-2 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="border rounded-lg overflow-hidden">
            <button
            onClick={() => toggleCategory(category)}
            className="w-full flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 text-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300"
            >
            <span>{category.replace(/([A-Z])/g, " $1").trim()}</span>
            <span className="text-xl">{openCategory === category ? "−" : "+"}</span>
            </button>
            {openCategory === category && (
              <div className="p-4 bg-white dark:bg-gray-900">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="h-2.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
