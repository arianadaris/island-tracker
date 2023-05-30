/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        seurat: ["Seurat", "sans-serif"],
        rodinrose: ["RodinRose", "sans-serif"],
        rodinroseb: ["RodinRoseEB", "sans-serif"]
      },
      colors: {
        brown: "#393322",
        darkYellow: "#F7D359",
        yellow: "#F8EEBB",
        teal: "#7CC9C3",
        darkTeal: "#219183",
        lightBlue: "#E2F3FF"
      },
      backgroundImage: {
        "nookLeaf": "url('./assets/Background_NookLeaf.png')"
      },
      display: ["group-hover"]
    },
  },
  plugins: [],
}