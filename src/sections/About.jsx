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
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="aspect-square rounded-[3rem] glass flex items-center justify-center p-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent" />
            <motion.div
              className="relative z-10 w-full h-full flex items-center justify-center p-8 lg:p-12"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Central Atom */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: 360
                  }}
                  transition={{
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="relative z-20 w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-blue-600/10 flex items-center justify-center border border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.1)]"
                >
                  <Atom className="w-16 h-16 lg:w-24 lg:h-24 text-blue-600" />
                </motion.div>

                {/* Orbiting Tech Stack */}
                {[
                  { icon: <SiJavascript className="text-yellow-400" />, degree: 0 },
                  { icon: <FaReact className="text-blue-400" />, degree: 72 },
                  { icon: <SiMongodb className="text-green-500" />, degree: 144 },
                  { icon: <SiDjango className="text-green-800" />, degree: 216 },
                  { icon: <Laptop className="text-slate-900" />, degree: 288 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotate: [item.degree, item.degree + 360]
                    }}
                    transition={{
                      duration: 15 + i,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute w-full h-full"
                  >
                    <motion.div
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 15 + i, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 bg-white glass rounded-2xl flex items-center justify-center shadow-xl border border-slate-200"
                    >
                      <span className="text-2xl lg:text-3xl">{item.icon}</span>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Background Rings */}
                <div className="absolute inset-0 border border-slate-200/50 rounded-full scale-75 opacity-50" />
                <div className="absolute inset-0 border border-slate-200/50 rounded-full scale-110 opacity-30" />
              </div>
            </motion.div>

            {/* Floating metrics */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 glass p-4 rounded-2xl shadow-2xl"
            >
              <div className="text-2xl font-bold text-gradient">2+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Years Exp.</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-black">
            Crafting Digital <span className="text-gradient">Solutions</span>
          </h2>

          <div className="space-y-6 text-slate-800 text-lg md:text-xl leading-relaxed mb-12">
            <p>
              I create websites and applications that turn visitors into customers. With a focus on clean interfaces, fast performance, and SEO best practices, I help ideas reach the right audience.
            </p>

            <p>
              I’m building real-world projects with React, Tailwind, Firebase, Express and Django that tackle real problems, and I’m expanding my stack with AI to deliver intelligent, AI-driven solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Frontend", icon: <Layout className="text-blue-500" />, desc: "Pixel perfect UI" },
              { label: "Backend", icon: <Settings className="text-purple-500" />, desc: "Robust Logic" },
              { label: "Design", icon: <Sparkles className="text-pink-500" />, desc: "Modern UX" },
              { label: "Logic", icon: <Brain className="text-cyan-500" />, desc: "Problem Solving" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-2xl glass border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all cursor-default"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-black">{item.label}</div>
                <div className="text-xs text-slate-700">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
