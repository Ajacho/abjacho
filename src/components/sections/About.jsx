import { TypeAnimation } from "react-type-animation";
import { CheckCheck } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center  
      bottom-0 left-0 w-full"
    >


      <div
        className="max-w-4xl mx-auto px-6 py-20
      "
      >
      <div className="leaf leaf1">🍃</div>
      <div className="leaf leaf2">🍃</div>
      <div className="leaf leaf3">🍃</div>
      <div className="leaf leaf4">🍃</div>

        <h1
          className="text-4xl font-bold text-[#f1e7d8] italic [background:linear-gradient(180deg,transparent_55%,#864a09_55%)]
        bg-[length:100%_200%] bg-left-bottom animate-gradient"
        >
          About Me
        </h1>

      

        <div className="transition-all duration-300 my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* col-1 */}
            <div className="hidden md:flex flex flex-col items-center justify-top mt-10 ">
              {/* Picture of me */}
              <div className="p-1 mb-6 transition-all">
                <img
                  src="./me.jpg"
                  alt="Andrea Jacho"
                  className=" transition-all size-60 w-full rounded-xl object-cover"
                />
              </div>

              <h1 className="text-4xl font-bold text-yellow-400 mb-4">
                Andrea B Jacho
              </h1>
            </div>
            {/* col-2 */}
            <div className="max-w-4xl mx-auto px-6 mb-10">
              <p className="mt-4">
                IT Support Specialist at Salem Health Hospital by day, UX and
                web dev enthusiast always. CS grad from{" "}
                <a
                  className="text-yellow-400 font-bold underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit hover:text-[#4cc68b]"
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
                  {/* <CheckCheck className="text-yellow-400 inline-block mr-2" /> */}
                  • React, JavaScript (ES6+), Node.js, Vite
                </li>
                <li className="mb-4">
                  {/* <CheckCheck className="text-yellow-400 inline-block mr-2" /> */}
                  • Bootstrap, CSS3, Tailwind CSS
                </li>
                <li className="mb-4">
                  {/* <CheckCheck className="text-yellow-400 inline-block mr-2" /> */}
                  • Windows 11, PowerShell, Active Directory, SCCM, LWS
                </li>
              </list>

              <div>
                <div className="grid grid-cols-2 gap-1 mt-5">
                  {" "}
                  <div className="about-image rounded-full p-1 size-40 ">
                    {" "}
                    <img
                      src="./llamaPixel.png"
                      alt="llama"
                      className="rounded-full transition-all"
                    />{" "}
                  </div>{" "}
                  <p className="text-[##F6ECE3] col-span-1 mt-2">
                    {" "}
                    When I'm not coding, I'm shooting landscapes. Catch my shots
                    on{" "}
                    <a
                      className="text-yellow-400 font-bold underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit hover:text-[#4cc68b]"
                      href="https://www.pinterest.com/abjacho"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Pinterest <span>↗</span>{" "}
                    </a>{" "}
                  </p>{" "}
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
