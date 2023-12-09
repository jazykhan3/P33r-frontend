/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      black: "#000",
      gradientPink : '#D750A0',
      gradientBlue : '#212674',
      gradientLightBlue: '#2760AA',
      white: '#fff'
    },
  },
  plugins: [],
}
