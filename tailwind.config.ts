import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F2F3EE',
        card: '#FFFFFF',
        ink: '#14181C',
        'ink-soft': '#55606B',
        line: '#D7D9D0',
        accent: '#2F5D45',
        'accent-bg': '#EAF1EC',
        signal: '#B9812C',
        'signal-bg': '#F3E7D2',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
};

export default config;
