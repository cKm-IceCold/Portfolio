import { motion } from "framer-motion";
import { User, Layout, Settings, Sparkles, Brain } from "lucide-react";
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
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full overflow-hidden rounded-[2.5rem]"
            >
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
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
