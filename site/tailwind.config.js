/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ground: 'rgb(var(--ground) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        soft: 'rgb(var(--soft) / <alpha-value>)',
        rule: 'rgb(var(--rule) / <alpha-value>)',
        brass: 'rgb(var(--brass) / <alpha-value>)',
        'brass-ink': 'rgb(var(--brass-ink) / <alpha-value>)',
        band: 'rgb(var(--band) / <alpha-value>)',
        'band-fg': 'rgb(var(--band-fg) / <alpha-value>)',
        'band-soft': 'rgb(var(--band-soft) / <alpha-value>)',
      },
      maxWidth: {
        page: '1240px',
      },
    },
  },
  plugins: [],
}
