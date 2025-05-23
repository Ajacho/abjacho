import { desc, title } from "framer-motion/client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const spotlightProjects = [
        {
            id: 1,
            src: "./UxCheckmate_webapp.png", 
            alt: "Project 1",  
            title: "UxCheckmate",
            desc: "An accessible web checker application that analyzes web pages for accessibility issues, providing detailed reports and actionable suggestions for improvement.",
            link: "https://github.com/rausches/deep-blue-repo"

        },
        // Add more objects for additional projects

    ];

    const handlePrev = () => {
        setActiveSlide((prev) => (prev === 0 ? spotlightProjects.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveSlide((prev) => (prev === spotlightProjects.length - 1 ? 0 : prev + 1));
    };

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-[##F6ECE3] text-left italic">Project Showcase</h1>
                <div className="border-t border-[#F6ECE3] transition-all duration-300 my-10"></div>
                <p className="text-text-[##F6ECE3] mt-4">                   
                    Explore a selection of my personal and technical projects where I apply my skills in software development, 
                    problem-solving, and creative design. Each project highlights my growth, learning, and passion for technology.
                </p>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                <div className="relative w-full mt-10">
                    {/* Carousel Container */}
                    <div className="flex justify-center">
                        <div className="relative overflow-hidden h-[400px] w-[700px] rounded-lg mt-10 mb-10">
                            {spotlightProjects.map((slide, index) => (
                                    <div
                                        key={slide.id}
                                        className={`absolute inset-0 transition-opacity duration-700  ${
                                            index === activeSlide ? "opacity-100" : "opacity-0"
                                        }`}
                                    > 
                                        <img
                                            src={slide.src}
                                            alt={slide.alt}
                                            className="relative object-cover rounded-lg"
                                        /> 
                                        {/* Slide Content */}
                                        <div className="absolute h-[400px] inset-0 flex items-center justify-center p-4">
                                            <div className="absolute bottom-0 text-white text-center bg-[linear-gradient(to_bottom_left,_#063064,_#0a192fd7)] rounded-lg">
                                                <h2 className="text-2xl text-yellow-400 font-bold flex gap-2 items-center justify-center">
                                                    {slide.title} 
                                                    <a href={slide.link} target="_blank" rel="noopener noreferrer">
                                                    <FaGithub size={30} className="text-white hover:text-yellow-400 transition-colors" />
                                                    </a>
                                                </h2>
                                                <p className="mt-2">{slide.desc}</p>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        aria-label="Previous Slide"
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 ">
                            <svg
                                className="w-4 h-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 1 1 5l4 4"
                                />
                            </svg>
                        </span>
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        aria-label="Next Slide"
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400">
                            <svg
                                className="w-4 h-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4L1 1"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
                {/* </div> */}
            </div>
        </section>
    );
};

export default Projects;