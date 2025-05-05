// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adapte selon ton projet
  ],
  theme: {
    extend: {
      colors: {
        clr: "#58bc82",           // équivalent de --clr
        "clr-alpha": "#9c9c9c60", // équivalent de --clr-alpha (rgba)
        "bg-dark": "#707070",     // équivalent de --bg-dark
        "bg-light": "#efefef",    // équivalent de --bg-light
        'vanta-custom': '#07192F'
      },
    },
  },
  plugins: [],
};
