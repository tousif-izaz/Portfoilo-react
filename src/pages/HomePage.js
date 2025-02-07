import { ReactTyped } from "react-typed";
import profilePic from "../assets/dp.jpg";
import projectsData from "../data/projectsData";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const navigate = useNavigate();
  const featuredProjects = projectsData.filter(project => project.featured);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 md:px-16 lg:px-32 bg-white dark:bg-black text-black dark:text-white">
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

      {/* Featured Projects Carousel */}
      <div className="w-full mt-16">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Projects</h2>
        <Slider {...settings}>
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="p-4 cursor-pointer"
              onClick={() => navigate(`/projects/${index}`, { state: project })}
            >
              <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-bold text-center">{project.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;

