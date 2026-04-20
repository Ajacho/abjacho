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
      className="min-h-screen flex items-center justify-center "
    >
      <div className="max-w-4xl mx-auto px-6 ">
        <h1
          className="text-4xl font-bold text-[#f1e7d8] italic 
          [background:linear-gradient(180deg,transparent_55%,#4c2f20_55%)]
        bg-[length:100%_200%] bg-left-bottom animate-gradient"
        >
          <TypeAnimation
            sequence={["My Career Journey ", 1000]}
            speed={{ type: "keyStrokeDelayInMs", value: 250 }}
            repeat={Infinity}
          />
        </h1>

        {/* Journey Map */}

        <div className="max-w-4xl mx-auto py-10">
          <div className="relative ">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-[#4c2f20] transform -translate-x-1/2"></div>

            {jobExperience.map((job, index) => (
              <div
                key={job.id}
                className={`mb-12 flex ${index % 2 === 0 ? "justify-start" : "justify-end"} w-full group`}
              >
                <div
                  className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#4c2f20] rounded-full border-2 border-[#F6ECE3]"></div>
                  <h3 className="text-lg font-semibold font-mono">{job.jobTitle}</h3>
                  <h4 className="text-sm text-yellow-400">{job.company} - {job.location}</h4>
                  <p className="text-sm">{job.duration}</p>
                  <p className="mt-2">{job.desc[0]}</p>
                  {/* hidden extra content */}
                  <p
                    className="text-xs text-white max-h-0 opacity-0 overflow-hidden group-hover:max-h-20 
      group-hover:opacity-100"
                  >
                    {job.desc.slice(1).join(" ")}
                  </p>
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
