import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactProps {
  darkMode: boolean;
}

function Contact({ darkMode }: ContactProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);

      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gauravkoul33@gmail.com",
      href: "mailto:gauravkoul33@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7006284092",
      href: "tel:+917006284092",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <p
            className={`mt-4 text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div
            className={`lg:col-span-1 space-y-6 ${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className={`glass hover-lift flex items-start gap-4 p-6 rounded-lg transition-all ${
                    darkMode
                      ? "bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50"
                      : "bg-white border-slate-200 hover:border-cyan-400"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      darkMode ? "bg-cyan-500/20" : "bg-cyan-100"
                    }`}
                  >
                    <Icon className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold mb-1 ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {info.label}
                    </h3>
                    <p
                      className={darkMode ? "text-slate-400" : "text-slate-600"}
                    >
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Social Links
            <div
              className={`pt-6 border-t ${darkMode ? "border-slate-700/50" : "border-slate-200"}`}
            >
              <h3
                className={`font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Follow Me
              </h3>
              <div className="flex gap-3">
                {["GitHub", "LinkedIn", "Twitter"].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${
                      darkMode
                        ? "bg-slate-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400"
                        : "bg-slate-200 hover:bg-cyan-100 text-slate-700 hover:text-cyan-600"
                    }`}
                  >
                    <span className="text-sm font-bold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-2 ${
              isVisible ? "animate-fade-in-right" : "opacity-0"
            } glass ${
              darkMode
                ? "bg-slate-800/50 border-slate-700/50"
                : "bg-white border-slate-200"
            } p-8 rounded-lg`}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    darkMode ? "bg-cyan-500/20" : "bg-cyan-100"
                  }`}
                >
                  <Send className="w-8 h-8 text-cyan-500" />
                </div>
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  Message Sent!
                </h3>
                <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Stark"
                    required
                    className={`w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                      darkMode
                        ? "bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400"
                        : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                    } border`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    required
                    className={`w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                      darkMode
                        ? "bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400"
                        : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                    } border`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className={`w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none ${
                      darkMode
                        ? "bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400"
                        : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                    } border`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 ${
                    darkMode
                      ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700"
                      : "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700"
                  } ${isLoading ? "opacity-75 cursor-not-allowed" : ""}`}
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
