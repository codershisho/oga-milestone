module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '24px',
      },
    },
  },
  plugins: [],
}