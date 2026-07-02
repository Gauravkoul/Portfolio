import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
}

function Projects({ darkMode }: ProjectsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "RideCloud",
      description:
        "RideCloud is Carpooling Application. It connects people going the same way—helping users share costs, reduce traffic, and travel safely.",
      image:
        "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Capicator",
      ],
      live: "https://ridecloudapp.netlify.app/",
    },
    {
      id: 2,
      title: "WebForm",
      description:
        "Advanced form builder with drag-and-drop interface, validation rules, and analytics. Helps users create forms without coding.",
      image:
        "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      live: "#",
    },
    {
      id: 3,
      title: "GamerNation",
      description:
        "Social gaming platform where gamers can connect, share clips, and compete. Features live streaming and community forums.",
      image:
        "https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "MongoDB", "WebSocket", "AWS S3", "Vercel"],

      live: "#",
    },
    {
      id: 4,
      title: "InternBoard",
      description:
        "Internship management platform connecting companies with students. Features job postings, applications, and company profiles.",
      image:
        "https://images.pexels.com/photos/3944649/pexels-photo-3944649.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React.js", "Express.js", "Node.js", "JWT Auth", "MongoDB"],

      live: "#",
    },
  ];

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <p
            className={`mt-4 text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Some of my recent work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              } rounded-lg overflow-hidden glass hover-lift ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700/50"
                  : "bg-white border-slate-200"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Image Container */}
              <div
                className="relative h-40
               overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-46 h-40 object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg mx-auto"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    darkMode
                      ? "from-slate-900 via-transparent to-transparent"
                      : "from-slate-900 via-transparent to-transparent"
                  } opacity-60 group-hover:opacity-75 transition-opacity`}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mb-4 leading-relaxed ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-semibold badge ${
                        darkMode
                          ? "bg-cyan-500/20 text-cyan-300"
                          : "bg-cyan-100 text-cyan-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg ${
                      darkMode
                        ? "bg-cyan-600 hover:bg-cyan-500 text-white"
                        : "bg-cyan-500 hover:bg-cyan-600 text-white"
                    }`}
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
