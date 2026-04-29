import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const certifications = [
  {
    title: 'Namaste React',
    issuer: 'Akshay Saini',
    date: 'Jun 2024 - Oct 2024',
  },
  {
    title: 'Complete Web Development MERN',
    issuer: 'Udemy',
    date: 'Nov 2024 - Feb 2025',
  },
];

function Certifications() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="section-kicker">Certifications</p>
          <h2 className="section-title">Learning that feeds the work.</h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {certifications.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[1.75rem] border border-border bg-surface/80 p-6 shadow-panel"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                  <BadgeCheck size={20} />
                </span>
                <div>
                  <h3 className="font-heading text-2xl text-text">{item.title}</h3>
                  <p className="mt-2 text-muted">{item.issuer}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
                    {item.date}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
