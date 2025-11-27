import { CheckCheck } from "lucide-react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState("TekSystems");

  const jobExperience = [
    {
      id: 0.1,
      jobTitle: "PC Deployment Technician",
      company: "TekSystems",
      duration: "Aug 2025 - present",
      location: "Salem, OR",
      desc: [
        "Configuring and deploying over 50 Windows devices weekly around Salem hospital, ensuring seamless integration with existing systems and software.",
        "Decommissioning and securely wiping old devices in compliance with data protection policies, enhancing overall IT security.",
        "Maintaining detailed records of device configurations and deployment statuses, enhancing tracking accuracy and accountability.",
      ],
      keySkills:
        "Windows OS, device imaging, network configuration, troubleshooting, teamwork, time management.",
    },
    {
      id: 0.2,
      jobTitle: "Computer Science Tutor",
      company: "Western Oregon University",
      duration: "Sep 2024 - Jun 2025",
      location: "Monmouth, OR",
      desc: [
        "Provided personalized support in Python, JavaScript, and C++ that improved student comprehension and led to noticeable academic improvement.",
        "Assisted faculty in grading and reviewing 30+ programming assignments weekly, ensuring detailed technical feedback and consistent evaluation.",
      ],
      keySkills:
        "Python, JavaScript, C++, code review, technical communication, peer instruction.",
      jobTitle2: "OIED Student Assistant",
      duration2: "Aug 2023 - Jun 2025",
      desc2: [
        "Improved the department’s website using WordPress tools along with custom HTML/CSS, leading to a 40% increase in engagement among prospective students.",
        "Built a dynamic Excel-based system to manage up to 140 student applications per term, enhancing data accuracy and reducing processing time.",
      ],
      keySkills2:
        "WordPress, HTML/CSS, Excel automation, UX design, process optimization, data management.",
    },
    {
      id: 0.3,
      jobTitle: "Bilingual Outreach Specialist",
      company: "Oregon Coast Community College",
      duration: "Jan 2023 - Jun 2023",
      location: "Newport, OR",
      desc: [
        "Improved accessibility and content layout for the college’s bilingual website, resulting in better navigation and fewer user inquiries.",
        "Led financial aid outreach for Hispanic families through translated resources and bilingual workshops, increasing program visibility and participation.",
      ],
      keySkills:
        "Accessibility, WordPress, digital outreach, bilingual communication, community engagement, user experience.",
    },
    {
      id: 0.4,
      jobTitle: "Help Desk Technician",
      company: "EC ROBOTICS",
      duration: "Jan 2018 - Jun 2018",
      location: "Quito, Ecuador",
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
        <h1 className="text-4xl font-bold text-yellow-400 italic">
          <TypeAnimation
            sequence={["Experience", 1000]}
            speed={{ type: "keyStrokeDelayInMs", value: 250 }}
            repeat={Infinity}
          />
        </h1>

        <div className="border-t border-[#F6ECE3] transition-all duration-300 my-10" />

        <div className="flex justify-center mt-10">
          {jobExperience.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.company)}
              className={`flex items-center px-4 py-2 hover:bg-[#F6ECE3] hover:text-[#00408C] text-[#F6ECE3] rounded-lg transition-all duration-300 mr-4 ${
                activeTab === tab.company ? "font-bold text-yellow-400 border-b-2 border-yellow-400" : ""
              }`}
              aria-selected={activeTab === tab.company}
            >
              <span className="mr-2 hidden md:inline">{tab.company}</span>
              <span className="inline md:hidden">{tab.id}</span>
            </button>
          ))}
        </div>

        <div className="mt-6">
          {jobExperience.map(
            (tab) =>
              activeTab === tab.company && (
                <div key={tab.id} className="text-[#F6ECE3]">
                  <h2 className="inline md:hidden text-2xl font-bold">{tab.jobTitle}</h2>
                  <h2 className="text-2xl font-bold text-yellow-400">{tab.jobTitle}</h2>
                  <h3 className="text-gray-300">{tab.duration}</h3>
                  <h4 className="text-gray-300 mb-4">{tab.location}</h4>

                  <ul className="list-disc list-inside mt-5">
                    {tab.desc?.map((item, index) => (
                      <li key={index} className="mb-4">
                        <CheckCheck className="text-yellow-400 inline-block mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4">
                    <span className="text-yellow-400 font-bold">Key Skills:</span> {tab.keySkills}
                  </p>

                  {/* Render second job only when present */}
                  {tab.jobTitle2 && (
                    <>
                      <hr className="my-6 border-gray-700" />
                      <h2 className="text-2xl font-bold text-yellow-400">{tab.jobTitle2}</h2>
                      {tab.duration2 && <h3 className="text-gray-300">{tab.duration2}</h3>}
                      <h4 className="text-gray-300 mb-4">{tab.location}</h4>

                      <ul className="list-disc list-inside mt-5">
                        {tab.desc2?.map((item, index) => (
                          <li key={index} className="mb-4">
                            <CheckCheck className="text-yellow-400 inline-block mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {tab.keySkills2 && (
                        <p className="mt-4">
                          <span className="text-yellow-400 font-bold">Key Skills:</span> {tab.keySkills2}
                        </p>
                      )}
                    </>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
