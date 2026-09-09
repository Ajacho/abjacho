import { s } from "framer-motion/client";
import { CheckCheck } from "lucide-react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState("TekSystems");

  const jobExperience = [
    {
      id: 0.1,
      jobTitle: "IT Support Specialist",
      company: "TekSystems",
      duration: "Aug 2025 - present",
      location: "Salem, OR",
      desc: [
        "Configuring and deploying over 50 Windows devices weekly around Salem hospital, ensuring seamless integration with existing systems and software.",
        "Decommissioning and securely wiping old devices in compliance with data protection policies, enhancing overall IT security.",
        "Maintaining detailed records of device configurations and deployment statuses, enhancing tracking accuracy and accountability.",
      ],
      shortDesc:
        "Images, configures, and deploys workstations enterprise-wide. Reconfigures LWS post-hardware swap using Citrix Workspace and tracks deployment progress through service tickets.",
      keySkills:
        "SCCM, MDT, Active Directory, Citrix Workspace, Powershell, Windows Imaging 11, IT asset management, technical documentation",
    },
    {
      id: 0.2,
      jobTitle: "Computer Science Tutor",
      company: "WOU",
      duration: "Sep 2024 - Jun 2025",
      location: "Monmouth, OR",
      desc: [
        "Provided personalized support in JavaScript, and C++ that improved student comprehension and led to noticeable academic improvement.",
        "Assisted faculty in grading and reviewing 30+ programming assignments weekly, ensuring detailed technical feedback and consistent evaluation.",
      ],
      shortDesc: [
        "Tutored students in JavaScript, and C++ for various CS courses. Provided personalized support, and assisted with grading.",
      ],
      keySkills:
        "JavaScript, C++, code review, technical communication, peer instruction",
    },
    {
      id: 0.3,
      jobTitle: "OIED Student Assistant",
      company: "WOU",
      duration: "Aug 2023 - Jun 2025",
      location: "Monmouth, OR",
      desc: [
        "Improved the department’s website using WordPress tools along with custom HTML/CSS, leading to a 40% increase in engagement among prospective students.",
        "Built a dynamic Excel-based system to manage up to 140 student applications per term, enhancing data accuracy and reducing processing time.",
      ],
      shortDesc: [
        "Revamped the department website using WordPress and custom HTML/CSS, boosting engagement by 40%. Built an Excel-based system to manage 140+ student applications per term.",
      ],

      keySkills:
        "WordPress, HTML/CSS, Excel automation, UX design, process optimization, data management",
    },
    {
      id: 0.4,
      jobTitle: "Bilingual Outreach Specialist",
      company: "OCCC",
      duration: "Jan 2023 - Jun 2023",
      location: "Newport, OR",
      desc: [
        "Improved accessibility and content layout for the college’s bilingual website, resulting in better navigation and fewer user inquiries.",
        "Led financial aid outreach for Hispanic families through translated resources and bilingual workshops, increasing program visibility and participation.",
      ],
      shortDesc: [
        "Improved the college's website accessibility using WordPress and led financial aid outreach for Hispanic families.",
      ],

      keySkills:
        "Accessibility, WordPress, digital outreach, bilingual communication, community engagement, user experience",
    },
    {
      id: 0.5,
      jobTitle: "Help Desk Technician",
      company: "EC ROBOTICS",
      duration: "Jan 2018 - Jun 2018",
      location: "Quito, Ecuador",
      desc: [
        "Diagnosed and resolved software/hardware issues to reduce system downtime and improve team productivity.",
        "Communicated technical solutions clearly to users of all skill levels, raising first-call resolution by 25%.",
      ],
      shortDesc: [
        "Diagnosed and resolved software and hardware issues, and improved clear technical communication to users.",
      ],

      keySkills:
        "Technical support, troubleshooting, user communication, IT workflow management",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center "
    >
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="leaf leaf1">🍃</div>
        <div className="leaf leaf2">🍃</div>
        <div className="leaf leaf3">🍃</div>
        <div className="leaf leaf4">🍃</div>
        <h1
          className="text-4xl font-bold text-[#f1e7d8] italic 
          [background:linear-gradient(180deg,transparent_55%,#4c2f20_55%)]
        bg-[length:100%_200%] bg-left-bottom animate-gradient"
        >
          My Career Journey
        </h1>

        {/* Journey Map */}

        <div className="max-w-4xl mx-auto py-10">
          <div className="relative w-full ">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-[#4c2f20] transform -translate-x-1/2"></div>

            {jobExperience.map((job, index) => (
              <div
                key={job.id}
                className={`mb-0 flex ${index % 2 === 0 ? "justify-start" : "justify-end"} w-full group`}
              >
                <div
                  className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-600 rounded-full border-2 border-[#F6ECE3]"></div>
                  <h3 className="text-lg font-semibold font-mono">
                    {job.jobTitle}
                  </h3>
                  <h4 className="text-sm text-yellow-400">
                    {job.company} - {job.location}
                  </h4>
                  <p className="text-sm">{job.duration}</p>
                  <p className="text-xs text-[#F6ECE3] mt-2">{job.shortDesc}</p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 my-2 justify-center ">
                    {job.keySkills.split(", ").map((skill, index) => (
                      <span
                        key={index}
                        className="bg-yellow-700 text-[#f1e7d8] text-xs font-medium 
                          px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
