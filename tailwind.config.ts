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
        'outline-variant': '#44474c',
        outline: '#8e9197',
        'on-background': '#e4e2e3',
        error: '#ffb4ab',
        tertiary: '#C5A059',
        background: '#050810',
        surface: '#0A1128',
        'on-surface': '#e4e2e3',
        'on-surface-variant': '#c4c6cd',
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
