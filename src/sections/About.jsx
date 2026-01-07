import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            <p>
              I create websites and applications that turn visitors into customers. With a focus on clean interfaces, fast performance, and SEO best practices, I help ideas reach the right audience.
            </p>

            <p>
              I’m building real-world projects with React, Tailwind, Firebase, and Django that tackle real problems and I’m expanding my stack with AI to deliver intelligent, AI-driven solutions.
            </p>
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Frontend", icon: "🎨" },
            { label: "Backend", icon: "⚙️" },
            { label: "Design", icon: "✨" },
            { label: "Logic", icon: "🧠" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-6 rounded-2xl glass hover:border-primary/50 transition-colors group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="font-bold text-slate-900 dark:text-white">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
