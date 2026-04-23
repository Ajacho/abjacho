import React from "react";
import { TypeAnimation } from "react-type-animation";

export const Landing = () => {
  return (
    <section
      id="land
      ing"
      className="min-h-screen flex items-top justify-center text-[#2b3f55]
      bg-[url('/public/llama_bg.png')] bg-cover bg-center relative bg-fixed
      "
    >
      <div className="max-w-4xl mx-auto px-6 pt-20 text-justify">
        <h2 className="text-2xl text-[#54451b] ">Hi there, I'm</h2>
        <br />
        <h1 className="text-4xl top-100 font-bold text-size-xs">
          <TypeAnimation
            sequence={["Andrea :)", 1000]}
            speed={{ type: "keyStrokeDelayInMs", value: 250 }}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </h1>

        <h2 className="mt-4 text-[#54451b] text-2xl">
          Web developer & IT specialist
        </h2>
        <button
          className="mt-6 px-4 py-2 bg-[#54451b] text-[#f1e7d8] rounded-lg font-semibold 
          hover:bg-[#2b3f55] transition duration-300 ease-in-out"
        >
          <a href="#projects">View projects</a>
        </button>
        <button
          className="mt-6 ml-4 px-4 py-2 bg-[#54451b] text-[#f1e7d8] rounded-lg font-semibold 
          hover:bg-[#2b3f55] transition duration-300 ease-in-out"
        >
          <a href="mailto:belen.bjacho@gmail.com">Contact me</a>
        </button>
      </div>
    </section>
  );
};
