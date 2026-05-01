import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const whatsappHref = 'https://wa.me/919669848740';

const contactItems = [
  {
    label: 'Email',
    value: 'harishkemail9640@gmail.com',
    href: 'mailto:harishkemail9640@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'harish-kumar-9640',
    href: 'https://www.linkedin.com/in/harish-kumar-9640/',
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    value: 'harish_k_insta',
    href: 'https://www.instagram.com/harish_k_insta/',
    icon: Instagram,
  },
  {
    label: 'Github',
    value: 'harishkgit9640',
    href: 'https://github.com/harishkgit9640/',
    icon: Github,
  },
];

function Contact({ onActive }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onActive('contact');
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [onActive]);

  return (
    <section id="contact" ref={sectionRef} className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border bg-surface/80 shadow-panel">
        <div className="grid gap-10 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let&apos;s build something together.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Open to thoughtful product work, full stack engineering, and DevOps-heavy roles
              where shipping and reliability both matter.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
              Currently open to new opportunities
            </div>
          </motion.div>

          <div className="grid gap-4">
            {contactItems.map(({ label, value, href, icon: Icon }, index) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex items-center justify-between rounded-[1.5rem] border border-border bg-white/[0.03] px-5 py-4 transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-glow"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{label}</p>
                    <p className="mt-1 text-text">{value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
