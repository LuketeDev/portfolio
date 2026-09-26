/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        'bg-alt': '#111111',
        'bg-panel': '#0D0D0D',
        fg: '#E8E8E8',
        'fg-dim': '#9A9A9A',
        'fg-muted': '#5A5A5A',
        green: {
          DEFAULT: '#6FAF72',
          bright: '#8FD192',
          dim: '#4A7A4D',
        },
        red: {
          DEFAULT: '#C85A5A',
          bright: '#E07070',
          dim: '#8A3A3A',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        'fade-in': 'fadeIn 0.4s ease-out',
        'type-in': 'typeIn 0.6s ease-out',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        typeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
