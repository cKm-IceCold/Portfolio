import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  // Simplified: No longer splits text or applies different colors
  const renderTitle = (title) => {
    return <>{title}</>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      // Simplified to strictly dark mode styles
      className="p-1 rounded-3xl border border-white/10 bg-slate-900 overflow-hidden"
    >
      <div className="p-7">
        <h3 className="text-2xl font-bold mb-3 text-white">
          {renderTitle(project.title)}
        </h3>

        <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            // Changed text-primary to text-white or slate-300 for uniformity
            className="text-sm font-bold text-slate-300 hover:text-white hover:underline underline-offset-4 flex items-center gap-2 transition-colors"
          >
            Live Demo <FiExternalLink className="text-lg" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-slate-400 hover:text-white flex items-center gap-2 transition-colors"
          >
            <FaGithub className="text-lg" /> Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;