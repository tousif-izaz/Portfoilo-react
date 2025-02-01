import React from "react";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
    // Dark mode state
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    // Toggle dark mode
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
                {["About Me", "Projects", "Resume", "Contact"].map((item, index) => (
                    <li key={index}>
                        <a
                            href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                            className="px-4 py-2 transition duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg"
                        >
                            {item}
                        </a>
                    </li>
                ))}
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
                <a href="#contact" className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition duration-300 dark:hover:bg-white dark:hover:text-black rounded-lg">
                    Email Me
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
