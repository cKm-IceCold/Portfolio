import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Folder } from "lucide-react";
import GlowingEffect from "./ui/glowing-effect";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className="relative group p-6 rounded-2xl bg-white/95 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 min-w-[300px] md:min-w-[360px] max-w-[360px] flex-shrink-0 snap-center flex flex-col"
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 overflow-hidden rounded-2xl h-48 bg-slate-100 flex items-center justify-center">
          <Folder className="w-12 h-12 text-slate-600 opacity-70" />
        </div>

        <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-700 mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-bold px-2 py-1 rounded bg-blue-50 text-blue-600 border border-blue-100 uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-auto">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg shadow-black hover:scale-105 transition-transform flex items-center gap-2"
          >
            View Live <FiExternalLink />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800 hover:text-black transition-colors"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
