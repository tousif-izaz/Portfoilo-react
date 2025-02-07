import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaTimes, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ml from "../assets/Tousif_Izaz_resume_ML.pdf";
import fullstack from "../assets/Tousif_Izaz_resume.pdf";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
    const [isOpen, setIsOpen] = useState(false);
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
        <nav className="flex justify-between items-center p-6 bg-white dark:bg-black dark:text-white shadow-md relative">
            {/* Logo */}
            <button className="text-2xl font-bold" onClick={() => navigate("/")}>
                TI
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
                {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>

            {/* Navigation Links */}
            <ul className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-black md:flex md:items-center md:space-x-8 text-lg shadow-md md:shadow-none transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
                {["Home", "Projects", "Contact"].map((item, index) => (
                    <li key={index} className="border-b md:border-none">
                        <button
                            onClick={() => {
                                navigate(`/${item.toLowerCase().replace(/\s+/g, "")}`);
                                setIsOpen(false);
                            }}
                            className="block w-full px-6 py-3 transition duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-md"
                        >
                            {item}
                        </button>
                    </li>
                ))}

                {/* Resume Dropdown */}
                <li className="relative group border-b md:border-none">
                    <button className="block w-full px-6 py-3 transition duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-md">
                        Resume
                    </button>
                    <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <li>
                            <a href={fullstack} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                                Full Stack Engineer
                            </a>
                        </li>
                        <li>
                            <a href={ml} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                                ML Engineer
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

            {/* Dark Mode Toggle */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 ml-4"
            >
                {darkMode ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-gray-800 text-xl" />}
            </button>

            {/* Call to Action */}
            <button
                onClick={() => {
                    navigate("/contact");
                    setIsOpen(false);
                }}
                className="hidden md:block border px-6 py-2 rounded-lg hover:bg-black hover:text-white transition duration-300 dark:hover:bg-white dark:hover:text-black"
            >
                Let's Connect!
            </button>
        </nav>
    );
};

export default Navbar;




