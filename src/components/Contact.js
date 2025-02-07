import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Contact = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_gmk3d1h", 
                "template_6bx1d8k", 
                form.current,
                "YOVRiVxSVRM5qPWvgxC" 
            )
            .then(
                (result) => {
                    console.log("Success:", result.text);
                    setMessageSent(true);
                    form.current.reset();
                },
                (error) => {
                    console.log("Error:", error.text);
                }
            );
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-black text-black dark:text-white px-6 py-12">
            <h2 className="text-4xl font-bold mb-6">Let's Connect!</h2>

            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 max-w-lg w-full">
                {messageSent && (
                    <p className="text-green-500 text-center mb-4">
                        ✅ Message sent successfully! I'll get back to you soon.
                    </p>
                )}

                <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white h-32"
                    ></textarea>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mt-6">
                    <a href="https://www.linkedin.com/in/tousif-izaz" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-500 transition duration-300" />
                    </a>
                    <a href="https://www.facebook.com/Mr.TI7" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-blue-600 text-3xl hover:text-blue-400 transition duration-300" />
                    </a>
                    <a href="https://github.com/tousif-izaz" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-gray-800 dark:text-white text-3xl hover:text-gray-600 transition duration-300" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
