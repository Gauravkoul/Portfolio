import { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";

interface ExperienceProps {
  darkMode: boolean;
}

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

function Experience({ darkMode }: ExperienceProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("experience");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const experiences: ExperienceItem[] = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      duration: "Jan 2023 - Present",
      description: [
        "Led the development of 5 high-performance React applications serving 50k+ users monthly",
        "Implemented responsive design patterns and improved Core Web Vitals by 40%",
        "Mentored 3 junior developers and conducted code reviews for quality assurance",
        "Optimized bundle size by 35% using code-splitting and lazy loading techniques",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Co.",
      duration: "Jun 2021 - Dec 2022",
      description: [
        "Developed full-stack web applications using React, Node.js, and PostgreSQL",
        "Created RESTful APIs and integrated third-party services (Stripe, SendGrid, AWS S3)",
        "Reduced API response time by 50% through database optimization and caching strategies",
        "Collaborated with product team to deliver 15+ features on schedule",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "StartUp Hub",
      duration: "Jan 2021 - May 2021",
      description: [
        "Developed responsive web pages using React and Tailwind CSS",
        "Fixed 20+ bugs and improved application performance by 25%",
        "Participated in daily standups and sprint planning sessions",
        "Learned and applied best practices in modern web development",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-20 px-4 ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 inline-block relative ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            } ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Work Experience
          </h2>
          <p
            className={`mt-4 text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            My professional journey
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              } glass hover-lift ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700/50"
                  : "bg-white border-slate-200"
              } p-8 rounded-lg transition-all duration-300`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center ${
                    darkMode ? "bg-cyan-500/20" : "bg-cyan-100"
                  }`}
                >
                  <Briefcase className="w-7 h-7 text-cyan-500" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                    <div>
                      <h3
                        className={`text-2xl font-bold ${
                          darkMode ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className={`text-lg ${
                          darkMode ? "text-cyan-400" : "text-cyan-600"
                        }`}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                        darkMode
                          ? "bg-cyan-500/20 text-cyan-300"
                          : "bg-cyan-100 text-cyan-700"
                      }`}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((desc, idx) => (
                      <li
                        key={idx}
                        className={`flex gap-3 ${
                          darkMode ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        <span className="text-cyan-500 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
