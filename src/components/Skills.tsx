import { useEffect, useState } from "react";

interface SkillsProps {
  darkMode: boolean;
}

interface SkillCategory {
  category: string;
  skills: Array<{
    name: string;
    level: number;
  }>;
}

function Skills({ darkMode }: SkillsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      skillCategories.forEach((category) => {
        category.skills.forEach((skill) => {
          const key = `${category.category}-${skill.name}`;
          setTimeout(() => {
            setAnimatedSkills((prev) => ({
              ...prev,
              [key]: skill.level,
            }));
          }, 100);
        });
      });
    }
  }, [isVisible]);

  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML", level: 92 },
        { name: "CSS", level: 88 },
        { name: "Bootstrap", level: 88 },
        { name: "jQuery", level: 88 },
      ],
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "Laravel", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 80 },
      ],
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "Git & GitHub", level: 95 },
        { name: "Postman", level: 80 },
        { name: "VS COde", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
            Skills & Expertise
          </h2>
          <p
            className={`mt-4 text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              } glass hover-lift ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700/50"
                  : "bg-white border-slate-200"
              } p-8 rounded-lg`}
              style={{
                animationDelay: `${categoryIndex * 0.15}s`,
              }}
            >
              <h3
                className={`text-2xl font-bold mb-8 flex items-center gap-2 ${
                  darkMode ? "text-cyan-400" : "text-cyan-600"
                }`}
              >
                <span
                  className={`w-1 h-8 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded`}
                />
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const key = `${category.category}-${skill.name}`;
                  const animatedLevel = animatedSkills[key] || 0;

                  return (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className={`font-semibold ${
                            darkMode ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {skill.name}
                        </span>
                        <span
                          className={`text-sm font-bold ${
                            darkMode ? "text-cyan-400" : "text-cyan-600"
                          }`}
                        >
                          {animatedLevel}%
                        </span>
                      </div>
                      <div
                        className={`h-2 rounded-full overflow-hidden ${
                          darkMode ? "bg-slate-700" : "bg-slate-300"
                        }`}
                      >
                        <div
                          className="progress-bar h-full"
                          style={{
                            width: `${animatedLevel}%`,
                            transition:
                              "width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Badges */}
        <div
          className={`mt-16 p-8 rounded-lg glass ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          } ${
            darkMode
              ? "bg-slate-800/50 border-slate-700/50"
              : "bg-white border-slate-200"
          }`}
          style={{
            animationDelay: "0.45s",
          }}
        >
          <h3
            className={`text-2xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Other Skills & Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Swagger API",
              "Telegram Bot API",
              "WhatsApp Bot Integration",
              "Payment Integration",
              "Web Design",
              "UI/UX",
              "Responsive Design",
              "Performance Optimization",
              "Testing (Jest, React Testing Library)",
              "API Integration",
              "Full-Stack Development",
              " Responsive Web Design",
              "API Documentation",
              "JWT Authentication",
              "Object-Oriented Programming",
              "Problem Solving",
              "Communication",
              "Team Leadership",
            ].map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full badge text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30"
                    : "bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 border border-cyan-200"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
