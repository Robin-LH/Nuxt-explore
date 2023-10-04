/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          primary: "#00DC82",
          secondary: "#333",
        },
        dark: {
          primary: "#012a35",
          secondary: "#023343",
        },
      },
    },
  },
  plugins: [],
};
