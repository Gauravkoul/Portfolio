import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
}

function Footer({ darkMode }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`relative py-12 px-4 ${
        darkMode
          ? "bg-slate-950 border-t border-slate-800"
          : "bg-slate-100 border-t border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className={`text-2xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Gaurav koul
            </h3>
            <p
              className={`max-w-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Passionate developer crafting beautiful and functional web
              experiences.
            </p>
          </div>

          {/* Social Links - Pushed to the right */}
          <div className="justify-self-end">
            <h4
              className={`font-bold mb-4 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Follow Me
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Gauravkoul/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${
                  darkMode
                    ? "bg-slate-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400"
                    : "bg-slate-200 hover:bg-cyan-100 text-slate-700 hover:text-cyan-600"
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-koul-7568a7176/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${
                  darkMode
                    ? "bg-slate-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400"
                    : "bg-slate-200 hover:bg-cyan-100 text-slate-700 hover:text-cyan-600"
                }`}
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:gauravkoul33@gmail.com"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${
                  darkMode
                    ? "bg-slate-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400"
                    : "bg-slate-200 hover:bg-cyan-100 text-slate-700 hover:text-cyan-600"
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`my-8 ${
            darkMode ? "border-t border-slate-800" : "border-t border-slate-300"
          }`}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div
            className={`flex items-center gap-2 mb-4 md:mb-0 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            <span>Made with</span>
            <Heart size={16} className="text-cyan-500 fill-cyan-500" />
            <span>© {currentYear} Gaurav koul. All rights reserved.</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${
              darkMode
                ? "bg-slate-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400"
                : "bg-slate-200 hover:bg-cyan-100 text-slate-700 hover:text-cyan-600"
            }`}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
