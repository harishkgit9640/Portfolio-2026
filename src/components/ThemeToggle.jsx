import { AnimatePresence, motion } from 'framer-motion';
import { MoonStar, SunMedium } from 'lucide-react';
import useTheme from '../hooks/useTheme';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Activate ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border bg-surface/80 text-text transition hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 12, opacity: 0, rotate: -20 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -12, opacity: 0, rotate: 20 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default ThemeToggle;
