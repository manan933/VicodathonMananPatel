/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e', // Primary Red/Coral accent
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          accent: '#FF385C',
          orange: '#FF5E36',
          amber: '#F59E0B',
          cyan: '#06B6D4',
          violet: '#8B5CF6',
        },
        dark: {
          bg: 'rgb(var(--color-bg-rgb) / <alpha-value>)',      // Deep midnight OLED in dark, crisp slate-50 in light
          card: 'rgb(var(--color-card-rgb) / <alpha-value>)',    // Elevated card background
          border: 'rgb(var(--color-border-rgb) / <alpha-value>)',  // Border color
          muted: 'rgb(var(--color-text-muted-rgb) / <alpha-value>)',   // Muted text
          hover: 'rgb(var(--color-card-hover-rgb) / <alpha-value>)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(244, 63, 94, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(244, 63, 94, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
