import WinkFace from "../WinkFace";
import { AccordionTable, techStack } from "../skills";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto ">
        <div className="transition-all duration-300 my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* col-1 */}
            <div className="hidden md:flex flex flex-col items-center justify-center">
              <div className="about-image ">
                {/* Picture of me */}
                <img
                  src="./andrea.jpg"
                  alt="Andrea Jacho"
                  className="rounded-full transition-all"
                />
              </div>
              <div className="max-w-4xl mx-auto px-6 mb-10 grid grid-cols-1 gap-4">
                <p className="text-text-[##F6ECE3] mt-4">
                  Beyond coding, I stay engaged by following tech influencers,
                  reading cognitive science books, and capturing Oregon’s
                  landscapes through photography and sharing them on
                  <a
                    className="text-yellow-400 font-bold"
                    href="https://www.pinterest.com/abjacho"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Pinterest
                  </a>
                  . When I’m not immersed in tech, you’ll likely find me at the
                  gym.
                </p>
              </div>
            </div>
            {/* col-2 */}
            <div className="max-w-4xl mx-auto px-6 mb-10">
              <h1 className="text-4xl font-bold">
                <span className="italic">Hola</span> <WinkFace /> <br /> I'm
                Andrea Jacho
              </h1>
              <p className="mt-4">
                I’m a recent Computer Science graduate from{" "}
                <a
                  className="text-yellow-400 font-bold"
                  href="https://wou.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Western Oregon University
                </a>{" "}
                (June 2025), originally from Ecuador and now based in Oregon.
                I’m passionate about cloud computing, web development, and user
                interface design, and I’m excited to contribute to and grow
                within the fast-moving world of technology.
              </p>
              {/* Technologies list */}

              <p className="text-[##F6ECE3] mt-4 mb-4">
                {String.fromCodePoint("0x1f4bb")} Technologies I've been working
                with:
              </p>
              <div className="h-60 overflow-y-auto scrollbar scrollbar-thumb-yellow-500 scrollbar-track-pink-200">
                <AccordionTable techStack={techStack} />
              </div>

              <div className="block md:hidden gap-4">
                <p className="text-text-[##F6ECE3] mt-4">
                  Beyond coding, I stay engaged by following tech influencers,
                  reading cognitive science books, and capturing Oregon’s
                  landscapes through photography and sharing them on
                  <a
                    className="text-yellow-400 font-bold"
                    href="https://www.pinterest.com/abjacho"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Pinterest
                  </a>
                  . When I’m not immersed in tech, you’ll likely find me at the
                  gym.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
