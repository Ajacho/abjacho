import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  const spotlightProjects = [
    {
      id: 1,
      src: "./UxCheckmate_webapp.png",
      alt: "UxCheckmate screenshot",
      title: "UxCheckmate",
      desc: "An accessible web checker that analyzes web pages and provides detailed reports and suggestions for improvement.",
      link: "https://github.com/rausches/deep-blue-repo",
    },
    {
      id: 2,
      src: "./restful_web_service.png",
      alt: "Restful Web Service",
      title: "Restful Web Service",
      desc: "A hands-on project where I designed and built a simple RESTful web service, gradually extending it to include concepts like microservices, load balancing, and distributed system design.",
      link: "https://github.com/wou-cs/hw03-writing-a-simple-restful-web-service-Ajacho",
    },
    // {
    //     id: 2,
    //     src: "./restful_web_service.png",
    //     alt: "Portfolio website screenshot",
    //     title: "Portfolio Website",
    //     desc: "A personal website showcasing my skills, projects, and journey in software development.",
    //     link: "https://example.com"
    // },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold italic">Project Showcase</h1>
          <div className="border-t border-[#F6ECE3] my-6" />
          <p className="mb-12">
            Explore a selection of my personal and technical projects,
            demonstrating my growth as a developer and passion for solving
            real-world problems with technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {spotlightProjects.map((project) => (
              <div
                key={project.id}
                className=" rounded-lg shadow-md hover:shadow-white hover:shadow-xl transition-shadow  duration-300 flex flex-col"
              >
                <img
                  src={project.src}
                  alt={project.alt}
                  className="rounded-t-lg h-40 object-cover w-full"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-xl text-yellow-400 font-semibold mb-2 flex justify-between items-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h2>
                  <p className="text-sm text-grey-300 flex-grow">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
