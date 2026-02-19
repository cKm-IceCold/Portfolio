import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import profileImg from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

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
      className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 lg:pt-20 overflow-hidden"
    >
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          {/* Professional Profile Card (Mobile Only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex lg:hidden flex-col gap-4 mb-10 p-5 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-blue-500/5"
          >
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50">
                <img src={profileImg} alt="Chukwuma Paul" className="w-full h-full object-cover grayscale-[10%]" />
              </div>
              <div>
                <h2 className="text-xl font-black text-black leading-tight">Chukwuma Paul</h2>
                <p className="text-sm font-bold text-blue-600">Fullstack Developer</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Available to hire</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Experience</p>
                <p className="text-sm font-bold text-black">2+ Years</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Focus</p>
                <p className="text-sm font-bold text-black">AI & Web Apps</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-500/10 text-blue-600 border border-blue-500/20 mb-6 inline-block">
              Open to new opportunities
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
            Developer
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
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-black text-white font-bold shadow-xl hover:shadow-blue-500/10 hover:scale-105 active:scale-95 transition-all text-center"
            >
              Explore My Work
            </a>

            <a
              href={resume}
              download
              className="w-full sm:w-auto px-8 py-4 rounded-full glass font-bold hover:bg-black/5 transition-all border border-slate-200 text-black text-center flex items-center justify-center gap-2"
            >
              <FiDownload /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-6 text-2xl text-slate-800"
          >
            <a href="https://github.com/cKm-IceCold" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              <FaGithub />
            </a>
            <a href="https://x.com/dsignVillian" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <FaTwitter />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative w-80 h-96 rounded-[3rem] overflow-hidden border border-slate-200 bg-white shadow-2xl p-3">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-50">
                <img
                  src={profileImg}
                  alt="Chukwuma Paul"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl border-white/20 shadow-xl translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm font-black text-black">Chukwuma Paul</p>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Fullstack Engineer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
