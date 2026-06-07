import { TypeAnimation } from "react-type-animation";

export const Projects = () => {
  const spotlightProjects = [
    {
      id: 1,
      src: "./UxCheckmate_webapp.png",
      alt: "UxCheckmate screenshot",
      title: "UxCheckmate",
      tools: [
        ".NET(ASP.NET Core)",
        "Entity Framework Core + SQL Server",
        "Swagger/Swashbuckle",
        "Pa11y + Playwright",
      ],
      desc: "An accessible web checker that analyzes web pages and provides detailed reports and suggestions for improvement.",
      githubLink: "https://github.com/rausches/deep-blue-repo",
      liveLink: null,
    },
    {
      id: 2,
      src: "./random_code_img.jpeg",
      alt: "CS through college",
      title: "CS through college",
      tools: ["JavaScript", "HTML", "CSS"],
      desc: "Computer Science projects from college, organized by semester and topic.",
      githubLink: "https://github.com/Ajacho/cs-through-college",
      liveLink: null,
    },
    {
      id: 3,
      src: "./game.png",
      alt: "microStudio game",
      title: "microStudio Game",
      tools: ["microStudio"],
      desc: "Creating 2d games with microStudio, a lightweight game engine for rapid prototyping and development.",
      githubLink: null,
      liveLink: "https://microstudio.io/abjacho/",
    },
    {
      id: 4,
      src: "./kABoom1",
      alt: "Collab game on microstudio",
      title: "KA-Boom",
      tools: ["microstudio"],
      desc: "This is a classic 2D endless runner game with obstacles. Would you be able to reach max score?",
      collaborator: {
        name: "Kyle Blair",
        url: "https://kyleblair.azurewebsites.net/"
      },
      githubLink: null,
      liveLink: "https://microstudio.io/Magyk231/kaboom/"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1
          className="text-4xl font-bold text-[#f1e7d8] italic 
          [background:linear-gradient(180deg,transparent_55%,#4c2f20_55%)]
        bg-[length:100%_200%] bg-left-bottom animate-gradient"
        >
          Projects
          {/* <TypeAnimation
            sequence={["Project Showcase", 1000]}
            speed={{ type: "keyStrokeDelayInMs", value: 250 }}
            repeat={Infinity}
          /> */}
        </h1>

        <div className="pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Big project */}
            <div className="md:col-span-2 md:row-span-2 bg-[#f1e7d8] rounded-2xl p-6">
              {spotlightProjects[0] && (
                <>
                  <img
                    src={spotlightProjects[0].src}
                    className="rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl text-[#4c2f20] font-semibold">
                      {spotlightProjects[0].title}
                    </h2>
                    <a
                      href={spotlightProjects[0].githubLink}
                      target="_blank"
                      className="text-sm text-[#2b3f55] font-bold underline 
                    decoration-transparent transition duration-300 ease-in-out
                     hover:decoration-inherit hover:text-blue-400"
                      rel="noopener noreferrer"
                    >
                      View on GitHub ↗
                    </a>
                  </div>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 my-2">
                    {spotlightProjects[0].tools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-[#2b3f55] text-[#f1e7d8] text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Small projects */}
            {spotlightProjects.slice(1, 4).map((project) => (
              <div key={project.id} className="bg-[#f1e7d8] rounded-2xl p-6">
                <h3 className="text-[#4c2f20] font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm mt-2 text-[#4c2f20]">{project.desc}</p>

          <footer className="mt-4">
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#2b3f55] font-bold underline
                decoration-transparent transition duration-300 ease-in-out
                hover:decoration-inherit hover:text-blue-400"
              >
                View on GitHub ↗
              </a>
            ) : (
              <>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#2b3f55] font-bold underline
                  decoration-transparent transition duration-300 ease-in-out
                  hover:decoration-inherit hover:text-blue-400"
                >
                  View Live ↗
                </a>             
                
                {project.collaborator && (
                  
                  <a
                    href={project.collaborator.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-0 text-sm text-[#2b3f55] font-bold underline
                    decoration-transparent transition duration-300 ease-in-out
                    hover:decoration-inherit hover:text-blue-400"
                  >
                    <h4 className="text-[#4c2f20] font-semibold ml-0 m-4">Collaborator:</h4>
                    👤 Kyle Blair ↗
                  </a>
                )}
              </>
            )}
          </footer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
