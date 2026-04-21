import { useState } from "react";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail } from "lucide-react";
import "../styles/NavBar.css";

export const NavBar = () => {
  const desktopNavItems = ["About", "Experience", "Projects"];

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
    <section id="navbar">
      <nav className="fixed top-0 left-0 z-50 w-full shadow-md bg-transparent backdrop-blur-lg stroke-black/80 text-yellow-400">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold hover:text-yellow-400 text-lg px-2 py-1 rounded-lg transition-colors duration-300"
          >
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
                  {/* change icon color */}
                  <item.icon className="inline-block w-6 h-6 mr-2 text-yellow-400" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
