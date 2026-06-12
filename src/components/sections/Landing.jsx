import React from "react";
import { TypeAnimation } from "react-type-animation";

export const Landing = () => {
  return (
    <section
      id="land
      ing"
      className="min-h-screen flex items-start justify-center text-[#2b3f55]
  
  relative
"
    >
      <div className="max-w-4xl mx-auto px-6 pt-40">

  <div className="leaf leaf1">🍃</div>
  <div className="leaf leaf2">🍃</div>
  <div className="leaf leaf3">🍃</div>

        <h2 className="text-2xl text-[#f1e7d8] ">Hi there, I'm</h2>
        <br />
        <h1 className="text-4xl top-100 font-bold text-yellow-400">
          <TypeAnimation
            sequence={["Andrea", 1000]}
            speed={{ type: "keyStrokeDelayInMs", value: 250 }}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </h1>

        <h2 className="mt-4 text-[#f1e7d8] text-2xl">
          IT girl Tech 😁
        </h2>
        <button
          className="mt-6 px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold 
          hover:bg-[#4cc68b] transition duration-300 ease-in-out"
        >
          <a href="#projects">View projects</a>
        </button>
        <button
          className="mt-6 ml-4 px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold 
          hover:bg-[#4cc68b] transition duration-300 ease-in-out"
        >
          <a href="mailto:belen.bjacho@gmail.com">Contact me</a>
        </button>
      </div>
    </section>
  );
};
