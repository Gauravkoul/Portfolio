import { useEffect, useState } from 'react';
import { Award, Trophy, Star, Zap } from 'lucide-react';

interface AchievementsProps {
  darkMode: boolean;
}

interface Achievement {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  date: string;
}

function Achievements({ darkMode }: AchievementsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });

    const element = document.getElementById('achievements');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const achievements: Achievement[] = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Hackathon Champion',
      category: 'Competition',
      description: 'Won 1st place at TechHack 2023 with an AI-powered mobile app',
      date: '2023',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'AWS Certified Developer',
      category: 'Certification',
      description: 'AWS Certified Developer Associate - Professional level',
      date: '2023',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'React Expert Badge',
      category: 'Recognition',
      description: 'Achieved Expert level on Codementor with 4.9/5 rating',
      date: '2022',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Open Source Contributor',
      category: 'Leadership',
      description: '100+ contributions to popular open-source projects',
      date: '2023',
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Tech Speaker',
      category: 'Public Speaking',
      description: 'Presented "Modern React Patterns" at 5 tech conferences',
      date: '2023',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Employee of the Month',
      category: 'Recognition',
      description: 'Recognized 3 times for outstanding performance and innovation',
      date: '2023',
    },
  ];

  return (
    <section
      id="achievements"
      className={`py-20 px-4 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 inline-block relative ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          } ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Achievements & Awards
          </h2>
          <p className={`mt-4 text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Recognition and milestones
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              } glass hover-lift relative overflow-hidden ${
                darkMode
                  ? 'bg-slate-800/50 border-slate-700/50'
                  : 'bg-white border-slate-200'
              } p-6 rounded-lg transition-all duration-300`}
              style={{
                animationDelay: `${index * 0.08}s`,
              }}
            >
              {/* Background Gradient */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />

              {/* Content */}
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  darkMode
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'bg-cyan-100 text-cyan-600'
                }`}>
                  {achievement.icon}
                </div>

                <h3 className={`text-xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {achievement.title}
                </h3>

                <p className={`text-sm font-semibold mb-3 ${
                  darkMode
                    ? 'text-cyan-400'
                    : 'text-cyan-600'
                }`}>
                  {achievement.category}
                </p>

                <p className={`text-sm mb-4 leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {achievement.description}
                </p>

                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  darkMode
                    ? 'bg-slate-700/50 text-slate-300'
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {achievement.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`mt-16 p-8 rounded-lg glass ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        } ${
          darkMode
            ? 'bg-slate-800/50 border-slate-700/50'
            : 'bg-slate-50 border-slate-200'
        }`}
        style={{
          animationDelay: '0.6s',
        }}>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">10+</div>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                Certifications
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">5</div>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                Conference Talks
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">100+</div>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                Open Source Commits
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">15</div>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                Awards Won
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
