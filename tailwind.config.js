/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#111111',
          900: '#111111',
          800: '#1a1a1a',
          700: '#222222',
          600: '#2d2d2d',
          500: '#3d3d3d',
        },
        maroon: {
          DEFAULT: '#8b2635',
          900: '#5c1824',
          800: '#6e1e2a',
          700: '#8b2635',
          600: '#a63040',
          500: '#c0344a',
          400: '#d4566a',
        },
        steel: {
          DEFAULT: '#555555',
          dark: '#333333',
          light: '#777777',
          lighter: '#999999',
        },
        silver: '#cccccc',
        cream: '#f5f1ec',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-barlow)', 'sans-serif'],
      },
      backgroundImage: {
        'blueprint-grid': "linear-gradient(rgba(139,38,53,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,38,53,0.04) 1px, transparent 1px)",
        'veteran-gradient': 'linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #111111 100%)',
        'maroon-gradient': 'linear-gradient(135deg, #6e1e2a 0%, #a63040 100%)',
      },
      backgroundSize: {
        'blueprint': '40px 40px',
      },
      animation: {
        'build-up': 'buildUp 1.2s cubic-bezier(0.16,1,0.3,1) forwards',
        'line-draw': 'lineDraw 2s ease-in-out forwards',
        'fade-rise': 'fadeRise 0.8s ease-out forwards',
      },
      keyframes: {
        buildUp: {
          from: { transform: 'scaleY(0)', transformOrigin: 'bottom' },
          to: { transform: 'scaleY(1)', transformOrigin: 'bottom' },
        },
        lineDraw: {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
        fadeRise: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'maroon-glow': '0 0 30px rgba(139,38,53,0.35)',
        'maroon-sm': '0 0 15px rgba(139,38,53,0.25)',
        'luxury': '0 25px 60px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
