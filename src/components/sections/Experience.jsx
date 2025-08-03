import { CheckCheck } from "lucide-react";
import { useState } from "react";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState("Computer Science Tutor");

  const jobExperience = [
    {
      id: 0.1,
      jobTitle: "Computer Science Tutor",
      company: "@ Western Oregon University",
      duration: "Sep 2024 - Jun 2025",
      desc: [
        "Provided personalized support in Python, JavaScript, and C++ that improved student comprehension and led to noticeable academic improvement.",
        "Assisted faculty in grading and reviewing 30+ programming assignments weekly, ensuring detailed technical feedback and consistent evaluation.",
      ],
      keySkills:
        "Python, JavaScript, C++, code review, technical communication, peer instruction.",
    },
    {
      id: 0.2,
      jobTitle: "OIED Student Assistant",
      company: "@ Western Oregon University",
      duration: "Aug 2023 - Jun 2025",
      desc: [
        <>
          Revamped the department’s{" "}
          <a
            className="text-yellow-400 font-bold"
            href="https://wou.edu/international/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            website
          </a>{" "}
          (last updated under my direction in March 2025) using custom HTML/CSS and WordPress tools, resulting in a 40% increase in engagement among prospective students.
        </>,
        "Developed a dynamic Excel system to manage up to 140 student applications per term, improving accuracy and reducing processing time by 40%.",
      ],
      keySkills:
        "WordPress, HTML/CSS, Excel automation, UX design, process optimization, data management.",
    },
    {
      id: 0.3,
      jobTitle: "Bilingual Outreach Specialist",
      company: "@ Oregon Coast Community College",
      duration: "Jan 2023 - Jun 2023",
      desc: [
        "Improved accessibility and content layout for the college’s bilingual website, resulting in better navigation and fewer user inquiries.",
        "Led financial aid outreach for Hispanic families through translated resources and bilingual workshops, increasing program visibility and participation.",
      ],
      keySkills:
        "Accessibility, WordPress, digital outreach, bilingual communication, community engagement, user experience.",
    },
    // {
    //   jobTitle: "Student Leadership & Support Specialist",
    //   company: "Chemeketa Community College",
    //   duration: "Jul 2021 – Jun 2022",
    //   desc: [
    //     "Created over 100 promotional visuals using Canva and UX design principles, boosting student engagement by 40%.",
    //     "Implemented digital outreach strategies including targeted emails and peer-led bilingual workshops that expanded support services reach.",
    //   ],
    //   keySkills:
    //     "Canva, UX fundamentals, visual communication, email marketing, training facilitation, bilingual support.",
    // },
    {
      id: 0.4,
      jobTitle: "Help Desk Technician",
      company: "@ EC ROBOTICS",
      duration: "Jun 2018 - Jan 2022",
      desc: [
        "Diagnosed and resolved software/hardware issues to reduce system downtime and improve team productivity.",
        "Communicated technical solutions clearly to users of all skill levels, raising first-call resolution by 25%.",
      ],
      keySkills:
        "Technical support, troubleshooting, user communication, IT workflow management.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-6 ">
        <h1 className="text-4xl font-bold text-[##F6ECE3] italic">
          Experience
        </h1>
        <div className="border-t border-[#F6ECE3] transition-all duration-300 my-10"></div>
        <div className="flex justify-center mt-10">
          {jobExperience.map((tab) => (
            <button
              key={tab.jobTitle}
              onClick={() => setActiveTab(tab.jobTitle)}
              className={`flex items-center px-4 py-2 hover:bg-[#F6ECE3] hover:text-[#00408C] text-[##F6ECE3] rounded-lg transition-all duration-300 mr-4
                                ${
                                  activeTab === tab.jobTitle
                                    ? "font-bold text-yellow-400 border-b-2 border-yellow-400"
                                    : ""
                                }
                                ${
                                  activeTab === tab.jobTitle
                                    ? "font-bold text-yellow-400 border-b-2 border-yellow-400"
                                    : ""
                                }`}
              aria-selected={activeTab === tab.jobTitle}
            >
              <span className="mr-2 hidden md:inline">{tab.jobTitle}</span>
              <span className="inline md:hidden">{tab.id}</span>
            </button>
          ))}
        </div>

        <div className="mt-6">
          {jobExperience.map(
            (tab) =>
              activeTab === tab.jobTitle && (
                <div key={tab.jobTitle} className="text-[##F6ECE3]">
                  <h2 className="inline md:hidden text-2xl font-bold">{tab.jobTitle}</h2>
                  <h2 className="text-2xl font-bold text-yellow-400">
                    {tab.company}
                  </h2>

                  <h3 className="text-gray-300">{tab.duration}</h3>
                  <ul className="list-disc list-inside mt-5">
                    {tab.desc.map((item, index) => (
                      <li key={index} className="list-none mb-4">
                        <CheckCheck className="text-yellow-400 inline-block mr-2" />
                        {item}
                        <br />
                      </li>
                    ))}
                    <p>
                      <span className="text-yellow-400 font-bold">
                        Key Skills:
                      </span>{" "}
                      {tab.keySkills}
                    </p>
                  </ul>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
