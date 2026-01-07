import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium mb-6 inline-block">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[1.1] text-slate-950 dark:text-white"
        >
          Building Digital
          <br />
          <span>Experiences</span> with Purpose
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Hi, I'm <span className="text-slate-500 dark:text-white font-semibold">Chukwuma</span>.
          A FullStack Developer with a touch of Marketing, specializing in building high-performance,
          accessible, visually stunning, and revenue-generating web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-2xl bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:scale-105 transition-transform"
          >
            Explore My Work
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-2xl glass font-semibold shadow-sm hover:scale-105 transition-transform"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
