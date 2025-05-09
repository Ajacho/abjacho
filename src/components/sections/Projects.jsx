import { desc, title } from "framer-motion/client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const spotlightProjects = [
        {
            id: 1,
            src: "./uxCheckmate.png", 
            alt: "Project 1",  
            title: "UxCheckmate Final Project",
            desc: "Final project for CS462, a web application that allows users to analized their website.",
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
                <h1 className="text-4xl font-bold text-[##F6ECE3] text-left italic">Pet projects</h1>
                <div className="border-t border-[#F6ECE3] transition-all duration-300 my-10"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative w-full mt-10">
                    {/* Carousel Container */}
                    <div className="relative overflow-hidden rounded-lg h-[500px] w-[500px]">
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
                                        className="relative h-[500px] w-[500px] object-cover rounded-lg"
                                    /> 
                                    {/* Slide Content */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-grey bg-opacity-50 p-4">
                                        <div className="text-white text-center">
                                            <h2 className="text-2xl font-bold">{slide.title}</h2>
                                            <p className="mt-2">{slide.desc}</p>
                                            <a href={slide.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 text-black rounded hover:bg-yellow-500">
                                                <FaGithub size={30} className="text-gray-800 hover:text-black transition-colors" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        aria-label="Previous Slide"
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 group-hover:bg-gray-900">
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
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 group-hover:bg-gray-900">
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
                </div>
            </div>
        </section>
    );
};

export default Projects;