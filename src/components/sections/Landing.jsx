import React from "react";
import { TypeAnimation } from "react-type-animation";

export const Landing = () => {

  return (
    <section
      id="landing"
      className="min-h-screen flex items-center justify-center text-yellow-400"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-size-xs ">
          <TypeAnimation
            sequence={[
                "Hey there :)",
                1000
            ]}
            speed={{ type: "keyStrokeDelayInMs", value: 250 }}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </h1>

        <h2 className="mt-4 text-white text-2xl  text-center">
          This is <span className="text-yellow-400">Andrea</span>, a passionate developer with the curiosity to explore new technologies and create innovative solutions.
        </h2>
      </div>
    </section>
  );
};
