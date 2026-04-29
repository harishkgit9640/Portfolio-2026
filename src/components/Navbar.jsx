import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

function Navbar({ sections, activeSection }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, [open]);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-surface/75 px-5 py-3 shadow-panel backdrop-blur-xl supports-[backdrop-filter]:bg-surface/60">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group inline-flex items-center gap-2 text-left"
          aria-label="Back to top"
        >
          <span className="font-heading text-xl font-semibold tracking-[0.18em] text-text">
            HK
          </span>
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(0,212,255,0.9)] transition-transform duration-300 group-hover:scale-125" />
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {sections.map((section) => {
            const active = activeSection === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToId(section.id)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? 'bg-accent/12 text-accent'
                    : 'text-muted hover:bg-white/5 hover:text-text'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {section.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/70 text-text transition hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 md:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-border bg-surface/95 p-4 shadow-panel backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {sections.map((section) => {
                const active = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToId(section.id)}
                    className={`rounded-2xl px-4 py-3 text-left text-sm transition ${
                      active
                        ? 'bg-accent/12 text-accent'
                        : 'text-muted hover:bg-white/5 hover:text-text'
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
