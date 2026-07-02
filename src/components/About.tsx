import { useEffect, useState } from "react";
import { Lightbulb, Target, Zap } from "lucide-react";

interface AboutProps {
  darkMode: boolean;
}

function About({ darkMode }: AboutProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Lightbulb,
      title: "Creative Problem Solver",
      description:
        "I love tackling complex challenges with innovative solutions. Always looking for better ways to build scalable, maintainable applications.",
    },
    {
      icon: Target,
      title: "Detail Oriented",
      description:
        "Attention to detail is crucial. Every pixel, every line of code, every user interaction matters. Quality is non-negotiable.",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description:
        "Technology evolves rapidly. I stay updated with latest trends and tools, continuously improving my skills and knowledge.",
    },
  ];

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <p
            className={`mt-4 text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Get to know me better
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Text */}
          <div
            className={`${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
          >
            <div className="space-y-6">
              <div>
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    darkMode ? "text-cyan-400" : "text-cyan-600"
                  }`}
                >
                  Professional Summary
                </h3>
                <p
                  className={`leading-relaxed ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  I'm a passionate full-stack developer with 5 years of
                  experience building web applications. Specialized in React,
                  Node.js, and TypeScript, I love creating beautiful, intuitive
                  interfaces backed by robust APIs. Always eager to learn new
                  technologies and best practices.
                </p>
              </div>

              <div>
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    darkMode ? "text-cyan-400" : "text-cyan-600"
                  }`}
                >
                  Career Objective
                </h3>
                <p
                  className={`leading-relaxed ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  To contribute my technical skills and creativity to develop
                  high-quality software solutions that make a real impact.
                  Seeking opportunities to work with innovative teams on
                  challenging projects that push my boundaries.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div
            className={`grid grid-cols-2 gap-6 ${
              isVisible ? "animate-fade-in-right" : "opacity-0"
            }`}
          >
            <div
              className={`p-6 rounded-lg text-center glass hover-lift ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700/50"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="text-4xl font-bold gradient-text mb-2">30+</div>
              <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                Projects Completed
              </p>
            </div>

            <div
              className={`p-6 rounded-lg text-center glass hover-lift ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700/50"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                Happy Clients
              </p>
            </div>

            <div
              className={`p-6 rounded-lg text-center glass hover-lift ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700/50"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="text-4xl font-bold gradient-text mb-2">5</div>
              <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                Years Experience
              </p>
            </div>

            <div
              className={`p-6 rounded-lg text-center glass hover-lift ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700/50"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                Tech Skills
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-lg glass hover-lift transition-all ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                } ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50"
                    : "bg-white border-slate-200 hover:border-cyan-400"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <Icon className="w-12 h-12 text-cyan-500 mb-4" />
                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
