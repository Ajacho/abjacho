import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CheckCheck } from "lucide-react";

const techStack = [
  {
    category: "Engineering Practices",
    items: ["TDD & BDD", "Git/GitHub", "Agile Development"],
  },
  {
    category: "Languages & Frameworks",
    items: [
      "JavaScript",
      "Python",
      "C++",
      "TypeScript",
      "HTML/CSS",
      "React.js",
      "APS.NET Core",
    ],
  },
  {
    category: "Tools & Platforms",
    items: ["Azure", "WordPress", "AI Integration", "GitHub Actions (CI/CD)"],
  },
];

const AccordionTable = ({ techStack }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6">
      {techStack.map((category, index) => (
        <div key={category.category} className="mb-6">
          <button
            className="w-full flex items-center justify-between p-4 bg-[#063064] text-white rounded-lg hover:bg-[#00408C] 
            hover:text-yellow-400 transition-all duration-300 overflow-hidden"
            onClick={() => toggle(index)}
          >
            {category.category}
            <ChevronDown
              className={`w-5 h-5 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === index && (
            <ul className="grid grid-cols-2 mt-4 pl-6 list-disc text-white">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="list-none mb-2">
                  <CheckCheck className="inline-block mr-2 text-yellow-400" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export { AccordionTable, techStack };
