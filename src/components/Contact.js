import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Contact = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const result = await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID, 
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY 
            );
            console.log("Success:", result.text);
            setMessageSent(true);
            form.current.reset();
        } catch (error) {
            console.error("Error:", error.text);
            setError("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
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

                {error && (
                    <p className="text-red-500 text-center mb-4">
                        ❌ {error}
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
                        disabled={loading}
                        className={`px-4 py-2 rounded-lg transition duration-300 ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300"}`}
                    >
                        {loading ? "Sending..." : "Send Message"}
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

