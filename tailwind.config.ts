import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#0F1733',
        'gold-luxe': '#C5A059',
        'outline-variant': '#44474c',
        outline: '#8e9197',
        'on-background': '#ece6d6',
        error: '#ffb4ab',
        tertiary: '#C5A059',
        background: '#0A0E22',
        surface: '#0F1733',
        'on-surface': '#ece6d6',
        'on-surface-variant': '#cfc8b6',
        primary: '#b7c8de'
      },
      fontFamily: {
        headline: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        label: ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
