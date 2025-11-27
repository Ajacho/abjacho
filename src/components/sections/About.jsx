import { TypeAnimation } from "react-type-animation";
import { CheckCheck } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-4xl font-bold text-yellow-400 italic">
          <TypeAnimation
            sequence={["About Me", 1000]}
            speed={{ type: "keyStrokeDelayInMs", value: 250 }}
            repeat={Infinity}
          />
        </h1>

        <div className="border-t border-[#F6ECE3] transition-all duration-300 my-10" />

        <div className="transition-all duration-300 my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* col-1 */}
            <div className="hidden md:flex flex flex-col items-center justify-center">
              {/* Picture of me */}
              <div className="about-image ">
                <img
                  src="./andrea.jpg"
                  alt="Andrea Jacho"
                  className="rounded-full transition-all"
                />
              </div>
              <div className="max-w-4xl mx-auto px-6 mb-10 grid grid-cols-1 gap-4">
                <p className="text-text-[##F6ECE3] mt-4">
                  Beyond coding, I capture Oregon’s landscapes through
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
                  . When I’m not immersed in tech, you’ll likely find me at the
                  gym.
                </p>
              </div>
            </div>
            {/* col-2 */}
            <div className="max-w-4xl mx-auto px-6 mb-10">
              <h1 className="text-4xl font-bold text-yellow-400 mb-4">
                Andrea B Jacho
                {/* <TypeAnimation
                  sequence={["Andrea Jacho", 1000]}
                  speed={{ type: "keyStrokeDelayInMs", value: 250 }}
                  repeat={Infinity}
                /> */}
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
                interface design, and I’m excited to contribute and grow
                within the fast-moving world of technology.
              </p>
              {/* Technologies list */}

              <p className="text-[##F6ECE3] mt-4 mb-4">
                {String.fromCodePoint("0x1f4bb")} Technologies I've been working
                with:
              </p>

              <list className="list-disc list-inside mt-4">
                <li className="mb-4">
                  <CheckCheck className="text-yellow-400 inline-block mr-2" />
                  JavaScript (ES6+), React, Node.js
                </li>
                <li className="mb-4">
                  <CheckCheck className="text-yellow-400 inline-block mr-2" />
                  HTML5, CSS3, Tailwind CSS
                </li>
                <li className="mb-4">
                  <CheckCheck className="text-yellow-400 inline-block mr-2" />
                  Microsoft Azure
                </li>
              </list>

              <div className="block md:hidden gap-4">
                <p className="text-text-[##F6ECE3] mt-4">
                  Beyond coding, I capture Oregon’s landscapes through
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
export default About;
