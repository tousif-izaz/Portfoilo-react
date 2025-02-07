import dummy from "../assets/pr.jpg"

const projectsData = [
    {
      title: "AI Image Classifier",
      description: "An AI-powered web app for image classification.",
      image: dummy, // Dummy image for all projects
      technologies: ["React", "TensorFlow", "Tailwind"],
      featured: true,
      findings: "Improved image recognition accuracy by 15%.",
      accomplishments: "Successfully deployed on AWS.",
      challenges: "Optimizing model inference time.",
      date: "December 2024",
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce website with Stripe integration.",
      image: dummy,
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      featured: true,
      findings: "Increased conversion rate by 20% after UI changes.",
      accomplishments: "Handled 10,000+ transactions securely.",
      challenges: "Ensuring smooth checkout experience.",
      date: "October 2024",
    },
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
      image: dummy,
      technologies: ["ROS2", "OpenCV", "Gazebo", "Pytorch", "Python"],
      featured: true,
      findings: "Reduced navigation errors to less than 5cm.",
      accomplishments: "Achieved 95% static obstacle avoidance accuracy.",
      challenges: "Tuning PID control for stable movement.",
      date: "September 2024",
    },
  ];
  
  export default projectsData;
  