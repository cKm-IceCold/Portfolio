import { motion } from "framer-motion";
import {
  FaReact, FaGitAlt, FaGithub, FaFigma
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiHtml5, SiCss3,
  SiFirebase, SiDjango, SiVite, SiFramer
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

const skills = {
  Frontend: [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "HTML & CSS", icon: <div className="flex gap-1"><SiHtml5 className="text-orange-500" /><SiCss3 className="text-blue-500" /></div> },
  ],
  Backend: [
    { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-800" /> },
    { name: "REST APIs", icon: <AiOutlineApi className="text-slate-400" /> },
    { name: "Firestore", icon: <SiFirebase className="text-orange-500" /> },
  ],
  Tools: [
    { name: "Git & GitHub", icon: <div className="flex gap-1"><FaGitAlt className="text-orange-600" /><FaGithub /></div> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-purple-400" /> },
  ],
};

const Skills = () => {
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Technologies I use to bring ideas to life. I focus on modern,
            well-maintained libraries and frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl glass hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium border border-transparent hover:border-primary/30 transition-colors"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
