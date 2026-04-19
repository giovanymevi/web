export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#38bdf8',
        secondary: '#60a5fa',
        dark: '#0f172a',
      },
      boxShadow: {
        primary: '0 10px 30px -15px rgba(56, 189, 248, 0.2)',
      },
    },
  },
}
