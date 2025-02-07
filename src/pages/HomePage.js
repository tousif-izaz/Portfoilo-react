import { ReactTyped } from "react-typed";
import profilePic from "../assets/dp.jpg";
import AboutMe from "../components/Aboutme";
import Featured from "../components/Featured";

const HomePage = () => {

  return (
    <div className="flex flex-col mt-24 items-center justify-center min-h-screen px-8 md:px-16 lg:px-32 bg-white dark:bg-black text-black dark:text-white">
      {/* Introduction Section */}
      <div className="w-full text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, My name is Tousif Izaz</h1>
        <ReactTyped
          className="text-xl md:text-2xl mt-4 text-purple-500"
          strings={["I build AI-driven systems.", "I craft efficient solutions.", "I push tech boundaries."]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>

      {/* Profile Image Section */}
      <div className="w-full flex justify-center mt-8">
        <div className="w-80 h-80 md:w-104 md:h-104 rounded-full border-4 border-purple-500 overflow-hidden">
          <img src={profilePic} alt="Tousif Izaz" className="w-full h-full object-cover" />
        </div>
      </div>
      <AboutMe />
      <Featured />
    </div>
  );
};

export default HomePage;

