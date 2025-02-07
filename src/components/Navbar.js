import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import ml from "../assets/Tousif_Izaz_resume_ML.pdf"
import fullstack from "../assets/Tousif_Izaz_resume.pdf"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
    const navigate = useNavigate();

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
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 bg-white dark:bg-black dark:text-white shadow-md">

            {/* Logo */}
            <button className="text-2xl font-bold" onClick={() => {navigate(`/`)}}>TI</button>

            {/* Navigation Links */}
            <ul className="flex space-x-8 text-lg">
                {["Home", "Projects", "Contact"].map((item, index) => (
                    <li key={index} className="relative">
                        <button
                            onClick={() => {navigate(`/${item.toLowerCase().replace(/\s+/g, "")}`)}}
                            className="px-4 py-2 transition duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg"
                        >
                            {item}
                        </button>
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
                <button
                    onClick={() => {navigate("/contact")}}
                    className="border px-8 py-4 rounded-lg hover:bg-black hover:text-white transition duration-300 dark:hover:bg-white dark:hover:text-black"
                >
                    Let's Connect!
                </button>
            </div>
        </nav>
    );
};

export default Navbar;


