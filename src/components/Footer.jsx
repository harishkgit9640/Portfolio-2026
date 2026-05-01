import { ArrowUp, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="px-4 pb-8 pt-6 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[1.75rem] border border-border bg-surface/75 px-6 py-5 shadow-panel sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">Designed with ❤️ by Harish Kumar © 2025</p>
        <div className="flex items-center gap-3">
          <a
            href="mailto:harishkemail9640@gmail.com"
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent/50 hover:text-accent"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://wa.me/919669848740"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-emerald-400/60 hover:text-emerald-300"
          >
            <FaWhatsapp size={16} />
          </a>
          <a
            href="https://github.com/harishkgit9640/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent/50 hover:text-accent"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/harish-kumar-9640/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent/50 hover:text-accent"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://www.instagram.com/harish_k_insta/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent/50 hover:text-accent"
          >
            <Instagram size={16} />
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent transition hover:-translate-y-0.5 hover:shadow-glow"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
