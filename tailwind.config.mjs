/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3AAFA9',
        secondary: '#DEF2F1',
        accent: '#FF6F61',
        dark: '#17252A',
        background: '#FEFFFF',
        gold: '#E3C16F',
      },
    },
  },
  plugins: [],
};
