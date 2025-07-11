import { useState } from "react";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail } from "lucide-react";
import "../styles/NavBar.css";

export const NavBar = () => {
  const desktopNavItems = ["Home", "Experience", "Projects"];

  const mobileNavItems = [
    {
      icon: Github,
      name: "GitHub",
      link: "https://github.com/Ajacho",
      target: "_blank",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/abjacho/",
      target: "_blank",
    },
    {
      icon: Mail,
      name: "Email",
      link: "mailto:belen.bjacho@gmail.com",
      target: "_blank",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full shadow-md bg-gradient-to-l from-[#063064] to-[#0a192fd7]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold hover:text-yellow-400 ">
          Andrea B Jacho
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm">
          {desktopNavItems.map((item) => (
            <li
              key={item}
              className="hover:text-yellow-400 transition-colors duration-300 text-base"
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-white flex gap-4">
          {mobileNavItems.map((item) => (
            <li
              key={item.name}
              className="list-none hover:text-yellow-400 transition-colors duration-300"
            >
              <a
                href={item.link}
                target={item.target}
                rel="noopener noreferrer"
              >
                <item.icon className="inline-block w-6 h-6 mr-2" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
