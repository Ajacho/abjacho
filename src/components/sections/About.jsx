import { TypeAnimation } from "react-type-animation";
import { CheckCheck } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center  
      bottom-0 left-0 w-full h-20 
              bg-gradient-to-t from-transparent to-[#46291d]   
 -mt-20 pt-20 rounded-t-[60%_40%]
       "
    >
      <div
        className="max-w-4xl mx-auto 
      "
      >
        <h1
          className="text-4xl font-bold text-[#f1e7d8] italic [background:linear-gradient(180deg,transparent_55%,#864a09_55%)]
        bg-[length:100%_200%] bg-left-bottom animate-gradient"
        >
          <TypeAnimation
            sequence={["About Me ", 1000]}
            speed={{ type: "keyStrokeDelayInMs", value: 250 }}
            repeat={Infinity}
          />
        </h1>

        <div className="transition-all duration-300 my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* col-1 */}
            <div className="hidden md:flex flex flex-col items-center justify-center">
              {/* Picture of me */}
              <div className="about-image border-4 border-yellow-400 rounded-full p-1 mb-6 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400">
                <img
                  src="./andrea.jpg"
                  alt="Andrea Jacho"
                  className="rounded-full transition-all"
                />
              </div>

              <h1 className="text-4xl font-bold text-yellow-400 mb-4">
                Andrea B Jacho
              </h1>
            </div>
            {/* col-2 */}
            <div className="max-w-4xl mx-auto px-6 mb-10">
              <p className="mt-4">
                PC Deployment Technician at Salem Health Hospital by day, UX and
                web dev enthusiast always. CS grad from{" "}
                <a
                  className="text-yellow-400 font-bold underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit hover:text-blue-400"
                  href="https://wou.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WOU
                </a>{" "}
                (2025), originally from Ecuador, now based in Oregon — building
                toward a career in design and development one project at a time.
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
                  Bootstrap, CSS3, Tailwind CSS
                </li>
                <li className="mb-4">
                  <CheckCheck className="text-yellow-400 inline-block mr-2" />
                  Windows 10/11, Windows CLI, AD, LWS reconfiguration
                </li>
              </list>

              <div>
                {/* Section one left */}
                <div className="grid grid-cols-2 gap-1 mt-5">
                  {/* Add pixel gif here and pinterest icon */}
                  <div className="about-image rounded-full p-1 size-40 ">
                    <img
                      src="./llamaPixel.png"
                      alt="llama"
                      className="rounded-full transition-all"
                    />
                  </div>
                  <p className="text-[##F6ECE3] col-span-1">
                    When I'm not coding, I'm shooting landscapes. Catch my shots
                    on{" "}
                    <a
                      className="text-yellow-400 font-bold underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit hover:text-blue-400"
                      href="https://www.pinterest.com/abjacho"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pinterest <span>→</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
