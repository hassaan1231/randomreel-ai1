/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#07090d',
          900: '#0c0f15',
          850: '#11151e',
          800: '#171c28',
          700: '#212838',
          600: '#2e374d',
        },
        neon: { green: '#00ff66', darkGreen: '#00cc52' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
