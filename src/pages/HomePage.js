import { ReactTyped } from "react-typed";

import profilePic from "../assets/dp.jpg"; 


const HomePage = () => {

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-8 md:px-16 lg:px-32 bg-white dark:bg-black text-black dark:text-white">
      {/* Left Section - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, My name is Tousif Izaz</h1>
        <ReactTyped
          className="text-xl md:text-2xl mt-4 text-purple-500"
          strings={["I build AI-driven systems.", "I craft efficient solutions.", "I push tech boundaries."]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>

      {/* Right Section - Profile Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="w-102 h-102 md:w-128 md:h-128 rounded-full border-4 border-purple-500 flex items-center justify-center overflow-hidden">
          <img
            src={profilePic}
            alt="Tousif Izaz"
            className="w-96 h-96 md:w-115 md:h-115 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
