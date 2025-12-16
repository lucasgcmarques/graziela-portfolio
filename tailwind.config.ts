import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cyan palette (primary accent)
        cyan: {
          50: 'var(--color-cyan-50)',
          100: 'var(--color-cyan-100)',
          200: 'var(--color-cyan-200)',
          300: 'var(--color-cyan-300)',
          400: 'var(--color-cyan-400)',
          500: 'var(--color-cyan-500)',
          600: 'var(--color-cyan-600)',
          700: 'var(--color-cyan-700)',
          800: 'var(--color-cyan-800)',
          900: 'var(--color-cyan-900)',
        },
        // Magenta palette (secondary accent)
        magenta: {
          50: 'var(--color-magenta-50)',
          100: 'var(--color-magenta-100)',
          200: 'var(--color-magenta-200)',
          300: 'var(--color-magenta-300)',
          400: 'var(--color-magenta-400)',
          500: 'var(--color-magenta-500)',
          600: 'var(--color-magenta-600)',
          700: 'var(--color-magenta-700)',
          800: 'var(--color-magenta-800)',
          900: 'var(--color-magenta-900)',
        },
        // Black/Gray palette
        black: {
          50: 'var(--color-black-50)',
          100: 'var(--color-black-100)',
          200: 'var(--color-black-200)',
          300: 'var(--color-black-300)',
          400: 'var(--color-black-400)',
          500: 'var(--color-black-500)',
          600: 'var(--color-black-600)',
          700: 'var(--color-black-700)',
          800: 'var(--color-black-800)',
          900: 'var(--color-black-900)',
          950: 'var(--color-black-950)',
        },
        // Base colors
        dark: 'var(--color-dark)',
        'dark-alt': 'var(--color-dark-alt)',
        // Semantic colors
        background: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          light: 'var(--text-light)',
        },
        accent: {
          DEFAULT: 'var(--accent-primary)',
          primary: 'var(--accent-primary)',
          hover: 'var(--accent-hover)',
          active: 'var(--accent-active)',
          muted: 'var(--accent-muted)',
          light: 'var(--accent-light)',
        },
        secondary: {
          DEFAULT: 'var(--secondary-primary)',
          primary: 'var(--secondary-primary)',
          hover: 'var(--secondary-hover)',
          active: 'var(--secondary-active)',
        },
        border: {
          light: 'var(--border-light)',
          DEFAULT: 'var(--border-default)',
          dark: 'var(--border-dark)',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-default)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-default)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        cyan: 'var(--shadow-cyan-lg)',
        magenta: 'var(--shadow-magenta-lg)',
      },
      transitionDuration: {
        fast: '150ms',
        DEFAULT: '300ms',
        slow: '500ms',
      },
      zIndex: {
        dropdown: '10',
        sticky: '20',
        fixed: '30',
        modal: '40',
        popover: '50',
        tooltip: '60',
      },
    },
  },
  plugins: [],
}

export default config
