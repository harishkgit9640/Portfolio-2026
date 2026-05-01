import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'FeeAutomate',
    description:
      'A SaaS product for automated fee collection and management, built and deployed end-to-end from UI design to cloud infrastructure. You bill the tenant for FeeAutomate. Each tenant still collects from members in their own gateway account. Plans, subscriptions, invoices, reminders, imports, defaulter tracking, and QR signup are already productized.',
    tags: ['SaaS', 'React', 'Node.js', 'AWS', 'CI/CD'],
    href: 'https://feeautomate.com',
    github: null,
    featured: true,
  },
  {
    title: 'Netflix GPT',
    description: 'Netflix-inspired movie recommendation app with Gemini-powered global search, Firebase auth, TMDB API integration, and Redux state management.Followed best coding practices, including custom hooks and React Memorization, to optimize performance and maintainability.',
    tags: ['React', 'Redux Toolkit', 'Firebase', 'Gemini API', 'Tailwind CSS'],
    href: null,
    github: 'https://github.com/harishkgit9640/Netflix-GPT',
  },
  {
    title: 'Shop Karo',
    description: 'Developed a full-stack e-commerce application, Shop Karo, designed to deliver a seamless and secure online shopping experience. Implemented JWT token-based user authentication to ensure secure user interactions and data protection. Designed and developed backend APIs using Node.js and Express for secure and efficient data handling.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Bootstrap'],
    href: null,
    github: 'https://github.com/harishkgit9640/shop-karo',
  },
  {
    title: 'Blog Application',
    description: 'Created a responsive blog application with user authentication, CRUD operations, and a MongoDB backend for seamless content management.implemented JWT token-based user authentication to ensure secure user interactions and data protection.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Bootstrap','Admin Dashboard'],    
    href: null,
    github: 'https://github.com/harishkgit9640/blog_application',
  },
  {
    title: 'Project Management (NIC)  ',
    description:'This is A full-stack web application built with React, Node.js, and MySQL, featuring user authentication, project management, and admin dashboard for efficient management. It is collage project of National Institute of Technology.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Bootstrap','Role-based', 'Admin Dashboard'],    
    href: null,
    github: 'https://github.com/harishkgit9640/react_with_mysql',
  },
];

function Projects({ onActive }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onActive('projects');
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [onActive]);

  return (
    <section id="projects" ref={sectionRef} className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Shipped products, not just prototypes.</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`group relative overflow-hidden rounded-[2rem] border bg-surface/80 p-6 shadow-panel transition hover:-translate-y-1 hover:shadow-glow ${
                project.featured
                  ? 'border-accent/35 lg:col-span-2 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-8'
                  : 'border-border lg:min-h-[22rem]'
              }`}
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.12),transparent_30%)]" />
              </div>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <h3 className="font-heading text-3xl text-text">{project.title}</h3>
                  {project.featured ? (
                    <span className="rounded-full border border-accent/40 bg-accent/12 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                      Live
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 max-w-xl text-base leading-7 text-muted">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-white/[0.03] px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-text/85"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-8 flex items-end justify-between gap-3 lg:mt-0 lg:flex-col lg:items-end lg:justify-between">
                {project.featured ? (
                  <div className="hidden rounded-[1.5rem] border border-white/8 bg-[#0d1118] p-5 lg:block">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                      Featured build
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-7 text-muted">
                      End-to-end product delivery spanning frontend UX, backend logic,
                      infrastructure, and deployment workflows.
                    </p>
                  </div>
                ) : <div />}

                <div className="flex flex-wrap gap-3">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-5 py-3 text-sm font-medium text-[#041018] transition hover:-translate-y-0.5 hover:shadow-glow"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  ) : null}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-5 py-3 text-sm font-medium text-text transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                    >
                      GitHub <Github size={16} />
                    </a>
                  ) : null}
                  {!project.href && !project.github ? (
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/65 px-5 py-3 text-sm text-muted">
                        Private build <ArrowUpRight size={16} />
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
