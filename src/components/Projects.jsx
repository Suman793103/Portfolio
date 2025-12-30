import React from "react";

const Projects = () => {
  const projectsData = [
    {
      title: "Swapify – Second-Hand Marketplace",
      techStack:
        "Express.js, MongoDB, React.js, Next.js, DigitalOcean, GitHub, Git",
      features: [
        "Developing a second-hand marketplace for local item listings and requests",
        "Implemented an in-app chat system for buyer-seller communication",
        "Utilizing Express.js and MongoDB for backend services",
        "Deploying on DigitalOcean with Next.js for scalability and SEO",
      ],
      link: "https://github.com/Suman793103/swapify",
    },
    {
      title: "Visual Product Matcher",
      techStack: "JavaScript, Machine Learning, Image Processing",
      features: [
        "Built a visual product matching system using image recognition",
        "Implemented product comparison and similarity detection",
        "Created an intuitive user interface for uploading and matching products",
      ],
      link: "https://github.com/Suman793103/Visual_Product_Matcher-01",
    },
    {
      title: "Voting System",
      techStack: "C, Data Structures",
      features: [
        "Developed a secure electronic voting system",
        "Implemented voter authentication and ballot management",
        "Created real-time vote counting and result display",
      ],
      link: "https://github.com/Suman793103/Voting_System",
    },
    {
      title: "Weather App",
      techStack: "JavaScript, HTML, CSS, Weather API",
      features: [
        "Built a weather forecasting application with real-time data",
        "Integrated weather API for accurate weather information",
        "Designed responsive UI for seamless user experience",
      ],
      link: "https://github.com/Suman793103/Weather",
    },
    {
      title: "Image Compressor",
      techStack: "JavaScript, HTML, CSS",
      features: [
        "Created an image compression tool for reducing file sizes",
        "Implemented client-side compression for fast processing",
        "Maintained image quality while reducing storage requirements",
      ],
      link: "https://github.com/Suman793103/Image_Compressor",
    },
    {
      title: "Todo App with LocalStorage",
      techStack: "JavaScript, HTML, CSS, LocalStorage",
      features: [
        "Built a task management application with persistent storage",
        "Implemented CRUD operations for task management",
        "Used LocalStorage for data persistence across sessions",
      ],
      link: "https://github.com/Suman793103/01_TODO_LOCALSTORAGE",
    },
    {
      title: "Library Management System",
      techStack: "C++, MySQL",
      features: [
        "Developed a comprehensive library management solution",
        "Implemented book management and user management features",
        "Integrated MySQL Connector for database operations",
        "Created a secure, menu-driven interface with validation",
      ],
    },
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-content">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="tech-stack">{project.techStack}</p>
            <ul>
              {project.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
