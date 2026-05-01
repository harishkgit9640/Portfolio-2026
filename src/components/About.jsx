import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Years Experience', value: 4, suffix: '+' },
  { label: 'APIs Built', value: 50, suffix: '+' },
  { label: 'Clients Served', value: 5, suffix: '+' },
  { label: 'SaaS Product Launched', value: 1, suffix: '' },
];

function CountUp({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        let frame = 0;
        const totalFrames = 36;
        const interval = window.setInterval(() => {
          frame += 1;
          setCount(Math.round((value * frame) / totalFrames));

          if (frame >= totalFrames) {
            window.clearInterval(interval);
            setCount(value);
          }
        }, 28);

        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function About({ onActive }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onActive('about');
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [onActive]);

  return (
    <section id="about" ref={sectionRef} className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-kicker">About</p>
          <h2 className="section-title">Built across the full stack.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            I&apos;m a Full Stack Developer and DevOps Engineer with 4+ years of experience
            building performant web applications, RESTful APIs, and cloud-deployed products.
            I&apos;ve worked across the entire stack from crafting React UIs to managing Linux
            servers, setting up CI/CD pipelines, and launching my own SaaS. Currently working at
            LEDFlex Group as a Full Stack Developer, after building and scaling ConVoxCCS at
            Deepija Telecom. Based in Hyderabad, India.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-[1.75rem] border border-border bg-surface/80 p-6 shadow-panel transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
            >
              <p className="font-heading text-4xl font-semibold text-text">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-muted">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );s
}

export default About;
