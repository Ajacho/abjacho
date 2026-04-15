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
      <div className="max-w-4xl mx-auto px-6 pt-20">
        <h1 className="text-4xl top-100 font-bold text-center text-size-xs ">
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

        <h2 className="mt-4 text-[#54451b] text-2xl  text-center">
          This is <span className="text-[#828c7d]">Andrea</span>, a passionate developer with the curiosity to explore new technologies and create innovative solutions.
        </h2>
      </div>
                    {/* <div
        class="absolute bottom-0 left-0 w-full h-20 
              bg-gradient-to-b from-transparent to-[#46291d]">
        </div> */}

{/* <div class="absolute bottom-0 w-full h-15
            bg-gradient-to-b from-white/0 to-white/80 backdrop-blur-sm">
</div> */}

    </section>
  );
};
