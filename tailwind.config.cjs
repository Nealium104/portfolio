/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Sans"],
      },
      colors: {
        primary: "#15616D",
      },
    },
  },
  plugins: [],
};
