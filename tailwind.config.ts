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
        'navy-deep': '#0A1128',
        'gold-luxe': '#C5A059',
        amber: '#D9AE5E',
        cream: '#F2E4C4',
        ember: '#E07A3B',
        'outline-variant': '#44474c',
        outline: '#8e9197',
        'on-background': '#ece6d6',
        error: '#ffb4ab',
        tertiary: '#C5A059',
        background: '#07090f',
        surface: '#0A1128',
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
