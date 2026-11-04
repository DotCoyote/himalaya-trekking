/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // Taken from the photos: shaded rock, dry grass, glacier, mist
        slate: { DEFAULT: '#1d272e', deep: '#151d22', line: '#33434d' },
        grass: { DEFAULT: '#d4a84f', light: '#e6c47c' },
        glacier: '#eef1f0',
        mist: '#a3b0b8',
      },
      fontFamily: {
        sans: ['Mukta', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  content: ['./*.html', './src/**/*.{js,ts,jsx,tsx}'],
};
