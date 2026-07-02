import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react";

interface HeroProps {
  darkMode: boolean;
}

function Hero({ darkMode }: HeroProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Software Developer",
    "Full Stack Engineer",
    "Problem Solver",
  ];

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 75,
    );

    return () => clearTimeout(timer);
  }, [displayText, currentTitleIndex, isDeleting, titles]);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden ${
        darkMode ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile Picture */}
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-cyan-500/30 p-1 bg-gradient-to-br from-cyan-400 to-blue-600">
            <img
              src="https://ik.imagekit.io/uojmunl25/my-pics/my-pic2_JjWZFJzB4?updatedAt=1754886723324"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1
            className={`text-5xl md:text-7xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Gaurav koul
          </h1>

          {/* Typing Effect */}
          <div
            className={`text-2xl md:text-4xl font-semibold mb-6 h-16 flex items-center justify-center ${
              darkMode ? "text-cyan-400" : "text-cyan-600"
            }`}
          >
            <span>{displayText}</span>
            <span className="animate-pulse ml-1">|</span>
          </div>
        </div>

        {/* Introduction */}
        <p
          className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          Passionate about crafting beautiful, functional web applications.
          Specialized in React, TypeScript, and modern web technologies. Let's
          build something amazing together!
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contact"
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              darkMode
                ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-cyan-500/50"
                : "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-cyan-500/50"
            }`}
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 ${
              darkMode
                ? "border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                : "border-cyan-600 text-cyan-600 hover:bg-cyan-50"
            }`}
          >
            View My Work
          </a>
          <a
            href="/Gaurav_Koul_Resume.pdf"
            download
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 border-2 ${
              darkMode
                ? "border-slate-600 text-slate-300 hover:border-slate-400"
                : "border-slate-300 text-slate-700 hover:border-slate-500"
            }`}
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute  left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className={`w-6 h-6 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
