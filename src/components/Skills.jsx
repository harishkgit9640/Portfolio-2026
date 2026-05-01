import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    label: 'Frontend',
    tone: 'text-accent',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'jQuery', 'AJAX'],
  },
  {
    label: 'Backend',
    tone: 'text-secondary',
    skills: ['PHP', 'Node.js', 'Express.js', 'RESTful APIs', 'Perl'],
  },
  {
    label: 'Databases',
    tone: 'text-emerald-400',
    skills: ['MySQL', 'MongoDB','PostgreSQL', 'Firebase Realtime Database', 'Redis'],
  },
  {
    label: 'DevOps & Cloud',
    tone: 'text-amber-300',
    skills: ['AWS', 'DigitalOcean', 'CI/CD Pipelines', 'Linux/Ubuntu', 'Crontab', 'Nginx', 'Git', 'GitHub', 'GitLab'],
  },
  {
    label: 'Tools',
    tone: 'text-pink-300',
    skills: ['Postman', 'Vim', 'VS Code', 'MobaXterm', 'Firebase', 'Redux Toolkit'],
  },
];

function Skills({ onActive }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onActive('skills');
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [onActive]);

  return (
    <section id="skills" ref={sectionRef} className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Tools I trust in production.</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[1.75rem] border border-border bg-surface/80 p-6 shadow-panel"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-heading text-2xl text-text">{group.label}</h3>
                <span className={`font-mono text-xs uppercase tracking-[0.3em] ${group.tone}`}>
                  Stack
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.03 }}
                    className="rounded-full border border-border bg-white/[0.03] px-4 py-2 text-sm text-text transition hover:-translate-y-0.5 hover:border-accent/45 hover:text-accent hover:shadow-glow"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
