import { CheckCheck } from "lucide-react";
import { useState } from "react";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState("OIED Student Assistant");

  const jobExperience = [
    {
      jobTitle: "OIED Student Assistant",
      company: "@ Western Oregon University",
      duration: "September 2023 - June 2025",
      desc: [
        <>
          Developed and maintained the{" "}
          <a
            className="text-yellow-400 font-bold"
            href="https://wou.edu/international/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            OIED department website
          </a>{" "}
          using WordPress, customizing themes, plugins, and front-end features
          to enhance UX."
        </>,
        "Built a dynamic application tracking system using advanced Excel (formulas, pivot tables, data validation) to generate reports on 60–140 student records per term.",
        "Authored a comprehensive Standard Operating Procedure (SOP) to streamline workflows for website updates, data handling, and student tracking.",
      ],
    },
    {
      jobTitle: "Computer Science Tutor",
      company: "@ Western Oregon University",
      duration: "September 2024 - June 2025",
      desc: [
        "Provide personalized tutoring sessions, helping students grasp complex concepts and develop independent problem-solving skills.",
        "Serve as a grader for computer science courses, evaluating assignments and providing constructive feedback to support student learning.",
      ],
    },
    {
      jobTitle: "Bilingual Outreach Specialist",
      company: "Oregon Coast Community College",
      duration: "January 2023 - June 2023",
      desc: [
        "Managed financial aid programs for students and parents, translating materials and utilizing bilingual communication to support diverse communities.",
        "Learned and applied WordPress to update and maintain the college's bilingual outreach website, ensuring content was accessible and up to date.",
        <>
          Led the{" "}
          <a
            className="text-yellow-400 font-bold"
            href="https://opencampus.oregonstate.edu/juntos"
            target="_blank"
            rel="noopener noreferrer"
          >
            OSU Juntos program
          </a>
          , organizing educational events and community outreach, sharpening
          project management and coordination skills transferable to software
          project delivery and teamwork.
        </>,
      ],
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
              <span className="mr-2">{tab.jobTitle}</span>
            </button>
          ))}
        </div>

        <div className="mt-6">
          {jobExperience.map(
            (tab) =>
              activeTab === tab.jobTitle && (
                <div key={tab.jobTitle} className="text-[##F6ECE3]">
                  <h2 className="text-2xl font-bold text-yellow-400">
                    {tab.company}
                  </h2>
                  <h3>{tab.duration}</h3>
                  <ul className="list-disc list-inside mt-5">
                    {tab.desc.map((item, index) => (
                      <li key={index} className="list-none mb-4">
                        <CheckCheck className="text-yellow-400 inline-block mr-2" />
                        {item}
                        <br />
                      </li>
                    ))}
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
