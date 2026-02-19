import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-4xl z-50 rounded-2xl glass px-4 md:px-6 py-3 flex justify-between items-center">
      <a href="#home" className="text-xl font-extrabold tracking-tight text-gradient">
        Chukwuma.dev
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-semibold text-slate-950 hover:text-blue-600 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <a
          href="#contact"
          className="hidden xs:block px-4 py-2 rounded-xl bg-black text-white text-xs font-bold hover:scale-105 transition-transform"
        >
          Hire Me
        </a>

        <div className="hidden sm:flex items-center gap-3 text-slate-900 border-l border-slate-200 ml-2 pl-4">
          <a href="https://github.com/cKm-IceCold" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <FaGithub />
          </a>
          <a href="https://x.com/dsignVillian" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <FaTwitter />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-950 text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full mt-2 p-4 rounded-2xl glass md:hidden flex flex-col gap-4"
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-slate-950 hover:text-blue-600 p-2 transition-colors border-b border-black/5 last:border-0"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="xs:hidden w-full text-center py-3 rounded-xl bg-blue-600 text-white font-bold"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
