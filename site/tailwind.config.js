/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        raise: 'rgb(var(--raise) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        soft: 'rgb(var(--soft) / <alpha-value>)',
        rule: 'rgb(var(--rule) / <alpha-value>)',
        ember: 'rgb(var(--ember) / <alpha-value>)',
        term: 'rgb(var(--term) / <alpha-value>)',
        'term-fg': 'rgb(var(--term-fg) / <alpha-value>)',
      },
      maxWidth: {
        page: '1240px',
      },
      letterSpacing: {
        label: '0.18em',
      },
    },
  },
  plugins: [],
}
