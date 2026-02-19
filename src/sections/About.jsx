import { motion } from "framer-motion";
import { User, Layout, Settings, Sparkles, Brain, Atom, Laptop } from "lucide-react";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiDjango, SiPython, SiFramer } from "react-icons/si";
import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-black">
            Crafting Digital <span className="text-gradient">Solutions</span>
          </h2>

          <div className="space-y-6 text-slate-800 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            <p>
              I create websites and applications that turn visitors into customers. With a focus on clean interfaces, fast performance, and SEO best practices, I help ideas reach the right audience.
            </p>

            <p>
              I’m building real-world projects with React, Tailwind, Firebase, Express and Django that tackle real problems, and I’m expanding my stack with AI to deliver intelligent, AI-driven solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Frontend", icon: <Layout className="text-blue-500" />, desc: "Pixel perfect UI" },
              { label: "Backend", icon: <Settings className="text-purple-500" />, desc: "Robust Logic" },
              { label: "Design", icon: <Sparkles className="text-pink-500" />, desc: "Modern UX" },
              { label: "Logic", icon: <Brain className="text-cyan-500" />, desc: "Problem Solving" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-2xl glass border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all cursor-default text-left"
              >
                <div className="text-2xl mb-2 flex justify-center md:justify-start">{item.icon}</div>
                <div className="font-bold text-black text-center md:text-left">{item.label}</div>
                <div className="text-xs text-slate-700 text-center md:text-left">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
