import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ y: 10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
          className="text-xl"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
