/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "baseFont":["Tinos"],
      "TestimonialFont":["Dancing Script"]
    },
    extend: {},
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

