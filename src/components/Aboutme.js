import { FaLaptopCode, FaUniversity, FaDumbbell, FaHiking,  FaCookie, FaBasketballBall } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
import Skills from "./Skills";
import { useNavigate } from "react-router-dom";



const AboutMe = () => {
  const navigate = useNavigate();
  
  return (
<section id="aboutme" className="min-h-screen p-10 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-4xl mx-auto p-4 md:p-6 border shadow-lg bg-gray-100 dark:bg-gray-900 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          
          {/* Left - Professional Background */}
          <div>
            <motion.div 
              className="p-4 border-l-4 border-purple-500 bg-gray-200 dark:bg-gray-800 rounded-md mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="italic">"Most people get amazed at the fact that my undergraduate was in Business Administration."</p>
            </motion.div>

            <p className="text-lg leading-relaxed mb-4 flex items-center gap-3">
              <FaUniversity className="text-purple-500 text-xl" /> I am currently pursuing <strong>Master’s in Computer Science</strong> with a focus on AI, deep learning, and full-stack web development.
            </p>
            <p className="text-lg leading-relaxed mb-4 flex items-center gap-3">
              <FaLaptopCode className="text-purple-500 text-xl" /> I’ve worked on a variety of projects involving full-stack development, AI-driven applications, and automation tools.
            </p>
            <p className="text-lg leading-relaxed">
              I also have experience running multiple businesses during my undergraduate studies, which has shaped my problem-solving mindset and entrepreneurial approach to tech.
            </p>
          </div>

          {/* Right - Personal Interests */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg flex flex-col items-center shadow-md">
              <FaDumbbell className="text-purple-500 text-3xl mb-2" />
              <p>Weightlifting</p>
            </div>
            <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg flex flex-col items-center shadow-md">
              <FaBasketballBall className="text-purple-500 text-3xl mb-2" />
              <p>Soccer</p>
            </div>
            <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg flex flex-col items-center shadow-md">
              <FaCookie className="text-purple-500 text-3xl mb-2" />
              <p>Cooking</p>
            </div>
            <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg flex flex-col items-center shadow-md">
              <FaHiking className="text-purple-500 text-3xl mb-2" />
              <p>Hiking</p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-6">
          <button  className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition" 
          onClick= {() => {navigate('/contact')}} >
            Let's Collaborate
          </button>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default AboutMe;