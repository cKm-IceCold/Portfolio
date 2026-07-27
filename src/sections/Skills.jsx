import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FaReact, FaGitAlt, FaGithub, FaFigma
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiHtml5, SiCss3,
  SiFirebase, SiDjango, SiVite, SiFramer, SiExpress, SiOpenai,
  SiMysql, SiPostgresql, SiMongodb, SiPython, SiDocker,
  SiNodedotjs, SiLangchain, SiVercel, SiSqlite
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { Brain, Sparkles, Atom, Laptop, ChevronLeft, ChevronRight, Workflow } from "lucide-react";

const skills = {
  Frontend: [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "JS", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "HTML/CSS", icon: <div className="flex gap-1"><SiHtml5 className="text-orange-500" /><SiCss3 className="text-blue-500" /></div> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "Python", icon: <SiPython className="text-blue-500" /> },
    { name: "Django", icon: <SiDjango className="text-green-800" /> },
    { name: "Express", icon: <SiExpress className="text-slate-800" /> },
    { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
    { name: "APIs", icon: <AiOutlineApi className="text-slate-800" /> },
  ],
  AI: [
    { name: "Gemini", icon: <Sparkles className="text-blue-500" /> },
    { name: "LangGraph", icon: <Workflow className="text-emerald-500" /> },
    { name: "OpenAI", icon: <SiOpenai className="text-emerald-500" /> },
    { name: "Agents", icon: <Brain className="text-purple-500" /> },
  ],
  Tools: [
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "Git", icon: <div className="flex gap-1"><FaGitAlt className="text-orange-600" /><FaGithub /></div> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-black" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "Framer", icon: <SiFramer className="text-purple-400" /> },
  ],
  Databases: [
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "Postgres", icon: <SiPostgresql className="text-blue-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "SQLite", icon: <SiSqlite className="text-blue-500" /> },
  ],
};

const Skills = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="skills"
      className="py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-black">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-slate-800 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Technologies I use to bring ideas to life. I focus on modern,
            well-maintained libraries and frameworks.
          </p>
        </motion.div>

        <div className="relative group/container">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 gap-6 md:gap-8 snap-x snap-mandatory scrollbar-hide px-2"
          >
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="min-w-[280px] md:min-w-[320px] p-8 rounded-3xl glass group hover:border-blue-500/30 transition-all duration-300 snap-center"
              >
                <h3 className="text-2xl font-bold mb-8 text-black flex items-center gap-3">
                  <span className="w-8 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full" />
                  {category}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group/skill"
                    >
                      <span className="text-3xl mb-3 transition-transform duration-300 group-hover/skill:scale-110">{skill.icon}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
