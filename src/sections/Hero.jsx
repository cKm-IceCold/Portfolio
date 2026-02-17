import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import profileImg from "../assets/profile.jpg";

const roles = ["Frontend Developer", "Backend Developer", "Fullstack Developer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6 inline-block">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1] text-black"
          >
            I'm a <br />
            <div className="h-[1.2em] relative overflow-hidden inline-block min-w-[280px] sm:min-w-[350px] md:min-w-[500px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 w-full text-gradient"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <br />
            developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-slate-800 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            Hi, I'm <span className="text-black font-bold border-b-2 border-blue-500/50">Chukwuma</span>.
            A FullStack Developer specializing in building high-performance,
            visually stunning, and revenue-generating web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-black text-white font-bold shadow-xl hover:shadow-blue-500/10 hover:scale-105 active:scale-95 transition-all text-center"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass font-bold hover:bg-black/5 transition-all border border-slate-200 text-black text-center"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="relative w-80 h-80">
            {/* Animated decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-[3rem] border-2 border-dashed border-blue-500/30"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-2xl"
            />
            <div className="absolute inset-4 rounded-[2.5rem] bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src={profileImg}
                alt="Chukwuma"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
