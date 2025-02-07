import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/projectsData";
const projectList = [...projectsData, ...projectsData]; 

const Featured = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrame;
    const scroll = () => {
      if (!isHovered && carouselRef.current) {
        carouselRef.current.scrollLeft += 5; 
  
        // Reset scroll when reaching halfway
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };
  
    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  return (
    <div className="w-full mt-0">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Projects</h2>
      <div
        className="relative overflow-hidden whitespace-nowrap"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {projectList.map((project, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] transition-transform duration-300 ease-in-out cursor-pointer"
              onClick={() => navigate(`/projects/${index}`, { state: project })}
              onMouseEnter={(e) => e.currentTarget.classList.add("shadow-2xl")}
              onMouseLeave={(e) => e.currentTarget.classList.remove("shadow-2xl")}
            >
              <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold text-center">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;