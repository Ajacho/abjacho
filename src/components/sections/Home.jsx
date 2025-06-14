import WinkFace from "../WinkFace";
import { CheckCheck } from "lucide-react";

export const Home = () => {
  const techSkills = [
    "ASP.NET Core",
    "React.js",
    "C#",
    "JavaScript",
    "WordPress",
    "Azure",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-[#F6ECE3] transition-all duration-300 my-10"></div>
        <div className="grid grip-cols-1 md:grid-cols-2 gap-6">
          <div className="about-image">
            {/* Picture of me */}
            <img src="./andrea.jpg" alt="Andrea Jacho" className="rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto px-6 mb-10">
            <h1 className="text-4xl font-bold">
              <span className="italic">Hola</span> <WinkFace /> I'm Andrea Jacho
            </h1>
            <p className="mt-4">
              I’m a recent Computer Science graduate from {" "}
              <a
                className="text-yellow-400 font-bold"
                href="https://wou.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Western Oregon University
              </a>{" "} (June 2025), originally from Ecuador and now based in Oregon. I’m passionate about cloud computing, web development, and user interface design, and I’m excited to contribute to and grow within the fast-moving world of technology.
            </p>
            <button className="mt-8 bg-[#F6ECE3] hover:bg-[#96ADD6] hover:text-[#F6ECE3] font-bold text-[#00408C] py-2 px-4 rounded">
              <a
                href="https://www.linkedin.com/in/abjacho/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/abjacho/
              </a>
            </button>
          </div>
          <div>
            <p className="text-[##F6ECE3] mt-4">
              {String.fromCodePoint("0x1f4bb")} Technologies I have been working
              with:
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {techSkills.map((skill) => (
                <li key={skill} className="list-none">
                  <CheckCheck className="text-yellow-400 inline-block mr-2" />
                  {skill}
                </li>
              ))}
            </div>
            <br />
          </div>
        </div>
        <p className="text-text-[##F6ECE3] mt-4">
          Beyond coding, I stay engaged by following tech influencers, reading
          cognitive science books, and capturing Oregon’s landscapes through
          photography and sharing them on
          <a
            className="text-yellow-400 font-bold"
            href="https://www.pinterest.com/abjacho"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Pinterest
          </a>
          . When I’m not immersed in tech, you’ll likely find me at the gym.
        </p>
      </div>
    </section>
  );
};
export default Home;
