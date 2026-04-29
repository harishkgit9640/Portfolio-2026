import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { FaAws, FaLinux, FaNodeJs, FaReact } from 'react-icons/fa';

const headshotSrc = '/harish_headshot.jpg';

const roles = [
  'Building Web Apps',
  'Shipping SaaS Products',
  'Automating with CI/CD',
  'Scaling on AWS & DigitalOcean',
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const current = roles[roleIndex];
    let timeoutId;

    if (typed.length < current.length) {
      timeoutId = window.setTimeout(() => {
        setTyped(current.slice(0, typed.length + 1));
      }, 65);
    } else {
      timeoutId = window.setTimeout(() => {
        setTyped('');
        setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
      }, 1800);
    }

    return () => window.clearTimeout(timeoutId);
  }, [roleIndex, typed]);

  return (
    <section className="relative flex min-h-screen items-center px-4 pb-16 pt-20 sm:px-6 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <span className="mb-6 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.35em] text-accent">
            Hyderabad, India
          </span>
          <h1 className="max-w-4xl font-heading text-5xl font-semibold leading-[0.95] text-text sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Full Stack Developer
            <br />
            <span className="text-text/75">&amp; DevOps Engineer</span>
          </h1>
          <div className="mt-6 flex min-h-[2rem] items-center font-mono text-sm uppercase tracking-[0.28em] text-accent sm:text-base">
            <span>{typed}</span>
            <span className="ml-1 h-5 w-px bg-accent animate-blink" />
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
            I build performant web applications, REST APIs, and cloud-deployed products with a
            strong bias for shipping clean systems that scale in the real world.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#/projects"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent px-6 py-3 font-medium text-[#041018] transition hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="/Harish-Kumar-Resume.txt"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/70 px-6 py-3 font-medium text-text transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            >
              Download Resume <Download size={18} />
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3">
            {[
              { href: 'mailto:harishkemail9640@gmail.com', label: 'Email', icon: Mail },
              { href: 'https://github.com/', label: 'GitHub', icon: Github },
              { href: 'https://www.linkedin.com/', label: 'LinkedIn', icon: Linkedin },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/80 text-muted transition hover:-translate-y-1 hover:border-accent/60 hover:text-accent hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative lg:justify-self-end"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/75 p-6 shadow-panel">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.12),transparent_28%)]" />
            <div className="relative grid gap-6">
              <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-accent/20 bg-[#0d1118] p-3 shadow-glow">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.18),transparent_42%)]" />
                  <img
                    src={headshotSrc}
                    alt="Portrait placeholder for Harish Kumar"
                    className="relative h-[340px] w-full rounded-[1.25rem] object-cover object-center"
                    loading="eager"
                  />
                </div>

                <div className="grid gap-4">
                  <div className="rounded-3xl border border-white/6 bg-white/[0.03] p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                      Focus
                    </p>
                    <p className="mt-3 text-lg font-medium text-text">SaaS systems</p>
                  </div>
                  <div className="rounded-3xl border border-white/6 bg-white/[0.03] p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                      Shipping
                    </p>
                    <p className="mt-3 text-lg font-medium text-text">CI/CD pipelines</p>
                  </div>
                  <div className="rounded-3xl border border-white/6 bg-white/[0.03] p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                      Base
                    </p>
                    <p className="mt-3 text-lg font-medium text-text">Hyderabad, India</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-accent/20 bg-[#0f1320] p-5 shadow-glow">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  Current build
                </p>
                <p className="mt-3 max-w-sm text-base leading-7 text-text/85">
                  Currently working on production full stack systems at LEDFlex Group, with prior
                  experience scaling ConVoxCCS across UI, APIs, monitoring, integrations, and
                  cloud operations.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'React', icon: FaReact },
                  { label: 'Node.js', icon: FaNodeJs },
                  { label: 'PHP', icon: null },
                  { label: 'AWS', icon: FaAws },
                  { label: 'MySQL', icon: null },
                  { label: 'Linux', icon: FaLinux },
                ].map(({ label, icon: Icon }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.25 + index * 0.08 }}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-white/[0.03] px-4 py-3 text-center font-mono text-xs uppercase tracking-[0.18em] text-text/80"
                  >
                    {Icon ? <Icon size={14} className="text-accent/85" /> : null}
                    {label}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div className="absolute -right-6 top-10 hidden h-24 w-24 rounded-full border border-accent/20 bg-accent/8 blur-[2px] md:block md:animate-float" />
          <motion.div className="absolute -bottom-6 left-8 hidden h-16 w-16 rounded-full border border-secondary/20 bg-secondary/10 md:block md:animate-float" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
