module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        '1.5':'12px',
        '12': '96px',
        '15': '120px',
        '16': '128px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
