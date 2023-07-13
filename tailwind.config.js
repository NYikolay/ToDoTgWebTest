const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans]
      },
    },
    colors: {
      'telegram-white': 'var(--telegram-bg-color)',
      'telegram-black': 'var(--telegram-text-color)',
      'telegram-hint': 'var(--telegram-hint-color)',
      'telegram-link': 'var(--telegram-link-color)',
      'telegram-primary': 'var(--telegram-button-color)',
      'telegram-primary-text': 'var(--telegram-button-text-color)',
      'telegram-secondary-white': 'var(--telegram-secondary-bg-color)',
    }
  },
  plugins: [],
}
