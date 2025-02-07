import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import ml from "../assets/Tousif_Izaz_resume_ML.pdf"
import fullstack from "../assets/Tousif_Izaz_resume.pdf"

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <nav className="flex justify-between items-center p-6 bg-white dark:bg-black dark:text-white shadow-md">
            {/* Logo */}
            <div className="text-2xl font-bold">TI</div>

            {/* Navigation Links */}
            <ul className="flex space-x-8 text-lg">
                {["About Me", "Projects", "Contact"].map((item, index) => (
                    <li key={index} className="relative">
                        <a
                            href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                            className="px-4 py-2 transition duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg"
                        >
                            {item}
                        </a>
                    </li>
                ))}

                {/* Resume Dropdown */}
                <li
                    className="relative group"
                >
                    <button
                        className="px-4 py-2 transition duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg"
                    >
                        Resume
                    </button>
                    <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <li>
                            <a
                                href = {fullstack}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                Full Stack Engineer
                            </a>
                        </li>
                        <li>
                            <a
                                href= {ml}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                ML Engineer
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

            {/* Dark Mode Toggle */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            >
                {darkMode ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-gray-800 text-xl" />}
            </button>

            {/* Call to Action */}
            <div>
                <a
                    href="#contact"
                    className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition duration-300 dark:hover:bg-white dark:hover:text-black"
                >
                    Let's Connect!
                </a>
            </div>
        </nav>
    );
};

export default Navbar;


