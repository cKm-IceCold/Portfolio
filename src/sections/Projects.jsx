import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-black">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-800 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            A selection of my recent work, ranging from complex web applications to
            high-performance interactive UI components.
          </p>
        </motion.div>

        {/* Single Block Container */}
        <div className="relative group/container p-6 md:p-10 rounded-3xl glass border border-slate-200/80 shadow-2xl">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Horizontal Scrolling Projects Row */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto py-4 gap-6 md:gap-8 snap-x snap-mandatory scrollbar-hide px-4"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
