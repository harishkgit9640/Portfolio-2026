import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'LEDFlex Group',
    role: 'Full Stack Developer',
    duration: 'Oct 2025 - Present',
    location: 'Hyderabad, Telangana, India',
    mode: 'On-site',
    summary:
      'Currently contributing as a Full Stack Developer in an on-site role, building and maintaining production-grade web experiences and application workflows.',
    achievements: [],
    stack: 'React, JavaScript, Tailwind CSS, Node.js, APIs, Full Stack Development',
    current: true,
  },
  {
    company: 'Deepija Telecom Pvt. Ltd.',
    role: 'Software Engineer',
    duration: 'Dec 2022 - Sep 2025',
    location: 'Hyderabad, TS',
    mode: null,
    summary: null,
    achievements: [
      'Designed and developed 15+ APIs for ConVoxCCS',
      'Built API Adapter web app improving integration for 50+ clients',
      'Developed API Gateway feature reducing API errors by 25%',
      'Created JS monitoring scripts reducing system downtime by 20%',
      'Integrated third-party APIs: SMS, email, Red App dialers',
      'Performed full database migration with zero data loss',
    ],
    stack: 'HTML, CSS, JavaScript, Bootstrap, jQuery, AJAX, PHP, Perl, MySQL, GitLab',
    current: false,
  },
];

function Experience({ onActive }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onActive('experience');
        }
      },
      { threshold: 0.32 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [onActive]);

  return (
    <section id="experience" ref={sectionRef} className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Built through ownership and delivery.</h2>
        </motion.div>

        <div className="relative mt-14 grid gap-10 lg:grid-cols-[80px_1fr]">
          <div className="relative hidden lg:block">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent via-border to-transparent" />
          </div>

          <div className="grid gap-8">
            {experiences.map((experience, experienceIndex) => (
              <motion.article
                key={`${experience.company}-${experience.duration}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: experienceIndex * 0.06 }}
                className="relative rounded-[2rem] border border-border bg-surface/80 p-8 shadow-panel"
              >
                <span className="absolute -left-[3.45rem] top-10 hidden h-4 w-4 rounded-full border-4 border-bg bg-accent shadow-[0_0_20px_rgba(0,212,255,0.9)] lg:block" />

                <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="font-heading text-3xl text-text">{experience.company}</p>
                      {experience.current ? (
                        <span className="rounded-full border border-accent/40 bg-accent/12 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                          Current
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-base text-text/80">{experience.role}</p>
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                    <p>{experience.duration}</p>
                    <p className="mt-2">{experience.location}</p>
                    {experience.mode ? <p className="mt-2">{experience.mode}</p> : null}
                  </div>
                </div>

                {experience.summary ? (
                  <p className="mt-8 rounded-2xl border border-white/6 bg-white/[0.03] p-5 leading-7 text-muted">
                    {experience.summary}
                  </p>
                ) : null}

                {experience.achievements.length ? (
                  <ul className="mt-8 grid gap-4">
                    {experience.achievements.map((achievement, index) => (
                      <motion.li
                        key={achievement}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.06 }}
                        className="flex gap-4 rounded-2xl border border-white/6 bg-white/[0.03] p-4 text-muted"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(0,212,255,0.8)]" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-8 rounded-2xl border border-border bg-[#0d1018] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Stack</p>
                  <p className="mt-3 text-sm leading-7 text-muted">{experience.stack}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
