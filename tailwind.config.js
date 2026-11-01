module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        bg: '#0c0a09',
        surface: '#14100d',
        'surface-raised': '#1e1813',
        'surface-soft': '#171310',
        ink: '#ede4d3',
        muted: '#ada596',
        gold: '#b99659',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Times New Roman', 'serif'],
        body: ['Switzer', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra-wide': '0.35em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
