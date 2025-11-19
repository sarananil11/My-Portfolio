/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#6366F1',
          dark: '#4F46E5',
          light: '#A5B4FC',
        },
        surface: '#0F172A',
        ink: '#0B1120',
      },
      boxShadow: {
        soft: '0 25px 50px -12px rgba(15, 23, 42, 0.35)',
        border: 'inset 0 0 0 1px rgba(148, 163, 184, 0.2)',
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(15,23,42,0) 60%)',
      },
    },
  },
  plugins: [],
}

