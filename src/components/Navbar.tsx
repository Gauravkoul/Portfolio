import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  isScrolled: boolean;
}

function Navbar({ darkMode, toggleTheme, isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    //{ name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    // { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.slice(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const section = href.slice(1);
    setActiveSection(section);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50"
            : "bg-white/80 backdrop-blur-md border-b border-slate-200/50"
          : darkMode
            ? "bg-transparent"
            : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}

          <span className="text-xl font-bold bg-white text-cyan-600 px-3 py-1 rounded-lg shadow-md hidden sm:inline">
            GK
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : darkMode
                      ? "text-slate-300 hover:text-cyan-400"
                      : "text-slate-600 hover:text-cyan-600"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? "bg-slate-800 hover:bg-slate-700 text-yellow-400"
                  : "bg-slate-200 hover:bg-slate-300 text-slate-800"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? "bg-slate-800 hover:bg-slate-700"
                  : "bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`md:hidden pb-4 border-t ${
              darkMode ? "border-slate-700/50" : "border-slate-200/50"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "bg-cyan-500/20 text-cyan-400"
                    : darkMode
                      ? "text-slate-300 hover:bg-slate-800"
                      : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
