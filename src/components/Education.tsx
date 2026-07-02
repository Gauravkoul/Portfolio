import { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";

interface EducationProps {
  darkMode: boolean;
}

function Education({ darkMode }: EducationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("education");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree:
        "Bachelor of Computer Science and Engineering Specialized in Cyber Security",
      institution: "Rashtriya Raksha University",
      year: "2018 - 2022",
      gpa: "8.34",
      achievements: [
        "Member of the Google Developers Student Club",
        "30 Days of Google cloud program",
        "HacktoberFest",
        "NPTEL Social Networks",
      ],
    },
    {
      degree: "Senior Secondary Education (12th Grade)",
      institution: "Govt. High Secondary School Jagti",
      year: "2017 - 2018",
      gpa: "7.3",
      achievements: ["Physics", "Maths", "Chemistry", "Computer Science"],
    },
  ];

  return (
    <section
      id="education"
      className={`py-20 px-4 ${darkMode ? "bg-slate-950" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 inline-block relative ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            } ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Education
          </h2>
          <p
            className={`mt-4 text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            My academic journey
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              } flex gap-6`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Timeline Line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode
                      ? "bg-cyan-500/20 border-2 border-cyan-500"
                      : "bg-cyan-100 border-2 border-cyan-500"
                  }`}
                >
                  <GraduationCap className="w-6 h-6 text-cyan-500" />
                </div>
                {index < education.length - 1 && (
                  <div
                    className={`w-1 h-24 my-2 ${
                      darkMode ? "bg-slate-700/50" : "bg-slate-300"
                    }`}
                  />
                )}
              </div>

              {/* Content Card */}
              <div
                className={`flex-1 pb-8 glass ${
                  isVisible ? "animate-fade-in-right" : "opacity-0"
                } ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700/50"
                    : "bg-slate-50 border-slate-200"
                } p-6 rounded-lg hover-lift`}
                style={{
                  animationDelay: `${index * 0.1 + 0.05}s`,
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className={`text-lg ${
                        darkMode ? "text-cyan-400" : "text-cyan-600"
                      }`}
                    >
                      {edu.institution}
                    </p>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      darkMode
                        ? "bg-cyan-500/20 text-cyan-300"
                        : "bg-cyan-100 text-cyan-700"
                    }`}
                  >
                    {edu.year}
                  </span>
                </div>

                <p
                  className={`mb-4 font-semibold ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  GPA: {edu.gpa}
                </p>

                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm badge ${
                        darkMode
                          ? "bg-cyan-500/10 text-cyan-300"
                          : "bg-cyan-100 text-cyan-700"
                      }`}
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
