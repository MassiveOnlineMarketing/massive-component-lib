const typographyPlugin = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    typographyPlugin,
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient-primary': {
          background: 'var(--Cool, linear-gradient(90deg, #6366F1 0%, #9756FF 100%, #8B5CF6 100%))',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        }
      }
      addUtilities(newUtilities, [ 'responsive', 'hover', 'group-hover'])
    },
    require("tailwindcss-animate")
  ],
}