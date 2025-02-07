import dummy from "../assets/pr.jpg"
import covid from "../assets/dataviz.jpg"
import backend from "../assets/backend.jpg"
import cafe from "../assets/cafe.jpg"
import turtle from "../assets/turtlebot.jpeg"

const projectsData = [
  {
    title: "Vision Transformer Model",
    description: "Developed a Vision Transformer (ViT) model for CIFAR-10 classification.",
    image: dummy,
    technologies: ["PyTorch", "ViT", "CUDA"],
    featured: true,
    findings: "Achieved 92% accuracy on CIFAR-10 dataset.",
    accomplishments: "Reduced training time by 40% using GPU optimization.",
    challenges: "Handling large-scale attention mechanisms efficiently.",
    date: "November 2024",
  },
  {
    title: "TurtleBot Navigation",
    description: "Implemented SLAM and obstacle avoidance on TurtleBot3.",
    image: turtle,
    technologies: ["ROS2", "OpenCV", "Gazebo", "Pytorch", "Python"],
    featured: true,
    findings: "Reduced navigation errors to less than 5cm.",
    accomplishments: "Achieved 95% static obstacle avoidance accuracy.",
    challenges: "Tuning PID control for stable movement.",
    date: "September 2024",
  },
  {
    title: "FriendMe Backend Development",
    description: "Built and integrated a scalable backend using Django Rest Framework for a social networking app.",
    image: backend,
    technologies: ["Django", "Django-Rest-Framework", "PostgreSQL"],
    featured: true,
    findings: "Enabled seamless interaction between frontend and backend through RESTful API.",
    accomplishments: "Designed and implemented a custom schedule builder program to enhance user engagement.",
    challenges: "Optimizing API response times for large-scale user interactions.",
    date: "May 2024",
  },
  {
    title: "Covid-19 Donation Project",
    description: "Developed a decision tree regression model to optimize donation allocation.",
    image: covid,
    technologies: ["Python", "Scikit-learn", "Data Analytics"],
    featured: false,
    findings: "Predicted donation allocations with 92% accuracy, streamlining donation planning.",
    accomplishments: "Reduced manual forecasting efforts by 30% using predictive analytics.",
    challenges: "Ensuring accurate data collection for effective model training.",
    date: "September 2020",
  },
  {
    title: "Breaking Bistro",
    description: "Managed operations and marketing strategies for a food business.",
    image: cafe,
    technologies: ["Business Strategy", "Operations Management", "Marketing"],
    featured: true,
    findings: "Enhanced efficiency by 25% through automation and data-driven strategies.",
    accomplishments: "Led a team of 8 in optimizing workflows and increasing sales.",
    challenges: "Balancing operational efficiency with customer experience.",
    date: "November 2020 – July 2023",
  }
];
  export default projectsData;
  