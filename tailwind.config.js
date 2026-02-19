/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './**/*.{tsx,ts}',
    '!./node_modules/**/*',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#F5C400',
        charcoal: '#1C1C1C',
      },
    },
  },
  plugins: [],
};
