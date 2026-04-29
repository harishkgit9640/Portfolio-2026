import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function HomePage() {
  const [activeSection, setActiveSection] = useState('about');
  const canonicalUrl = useMemo(() => 'https://harishsahu.com', []);
  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Harish Kumar',
      url: canonicalUrl,
      jobTitle: 'Full Stack Developer & DevOps Engineer',
      description:
        'Full Stack Developer and DevOps Engineer based in Hyderabad, India building web applications, REST APIs, and cloud-deployed products.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressCountry: 'IN',
      },
      email: 'mailto:harishkemail9640@gmail.com',
      telephone: '+91 9669848740',
      knowsAbout: [
        'React',
        'Node.js',
        'PHP',
        'RESTful APIs',
        'AWS',
        'DigitalOcean',
        'CI/CD',
        'Linux',
        'MySQL',
        'MongoDB',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'LEDFlex Group',
      },
      alumniOf: [
        {
          '@type': 'Course',
          name: 'Namaste React',
          provider: 'Akshay Saini',
        },
        {
          '@type': 'Course',
          name: 'Complete Web Development MERN',
          provider: 'Udemy',
        },
      ],
      hasPart: [
        {
          '@type': 'CreativeWork',
          name: 'FeeAutomate',
          url: 'https://feeautomate.com',
        },
        {
          '@type': 'CreativeWork',
          name: 'Netflix GPT',
        },
        {
          '@type': 'CreativeWork',
          name: 'Shop Karo',
        },
      ],
    }),
    [canonicalUrl],
  );

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Harish Kumar | Full Stack Developer & DevOps Engineer</title>
        <meta
          name="description"
          content="Portfolio of Harish Kumar, a Hyderabad-based Full Stack Developer and DevOps Engineer building performant web apps, APIs, and cloud-deployed products."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Harish Kumar" />
        <meta name="theme-color" content="#0A0A0F" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Harish Kumar | Full Stack Developer & DevOps Engineer" />
        <meta
          property="og:description"
          content="Explore Harish Kumar's work across React, Node.js, PHP, DevOps, CI/CD, AWS, and SaaS product delivery."
        />
        <meta property="og:site_name" content="Harish Kumar Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${canonicalUrl}/og-image.svg`} />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Harish Kumar | Full Stack Developer & DevOps Engineer" />
        <meta
          name="twitter:description"
          content="Portfolio of Harish Kumar, a Full Stack Developer and DevOps Engineer based in Hyderabad, India."
        />
        <meta name="twitter:image" content={`${canonicalUrl}/og-image.svg`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="relative overflow-x-clip bg-bg text-text transition-colors duration-500">
        <div className="pointer-events-none fixed inset-0 opacity-40 [mask-image:radial-gradient(circle_at_top,black,transparent_72%)]">
          <div className="absolute inset-0 bg-mesh bg-[size:54px_54px]" />
        </div>
        <div className="noise pointer-events-none fixed inset-0 opacity-[0.08]" />
        <div className="pointer-events-none fixed left-[-8rem] top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none fixed bottom-0 right-[-6rem] h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

        <Navbar sections={sections} activeSection={activeSection} />
        <main>
          <Hero />
          <About onActive={setActiveSection} />
          <Skills onActive={setActiveSection} />
          <Experience onActive={setActiveSection} />
          <Projects onActive={setActiveSection} />
          <Certifications />
          <Contact onActive={setActiveSection} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
