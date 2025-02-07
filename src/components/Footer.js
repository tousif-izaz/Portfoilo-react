import React from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Tousif Izaz. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          {["About Me", "Projects", "Resume", "Contact"].map((item, index) => (
            <a 
              key={index}
              href={`${item.toLowerCase().replace(/\s+/g, "")}`} 
              className="hover:underline"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/tousif-izaz" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-gray-300 transition duration-300" />
          </a>
          <a href="https://www.facebook.com/Mr.TI7" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl hover:text-gray-300 transition duration-300" />
          </a>
          <a href="https://github.com/tousif-izaz" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-300 transition duration-300" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
