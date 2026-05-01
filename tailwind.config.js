/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(var(--color-accent) / 0.45), 0 18px 42px rgb(var(--color-accent) / 0.18)',
        panel: '0 16px 48px rgba(0, 0, 0, 0.22)',
      },
      backgroundImage: {
        mesh:
          'linear-gradient(to right, rgb(var(--color-border) / 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-border) / 0.25) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -16px, 0)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
