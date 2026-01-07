import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tight text-gradient">
          Chukwuma.dev
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
            About
          </a>
          <a href="#skills" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
