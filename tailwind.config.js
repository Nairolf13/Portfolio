// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adapte selon ton projet
  ],
  safelist: [
    'translate-y-0',
    '-translate-y-20'
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      colors: {
        clr: "#58bc82",           // équivalent de --clr
        "clr-alpha": "#9c9c9c60", // équivalent de --clr-alpha (rgba)
        "bg-dark": "#707070",     // équivalent de --bg-dark
        "bg-light": "#efefef",    // équivalent de --bg-light
        'vanta-custom': '#07192F',
        'about-bg': 'rgba(0,3,1,0.70)', // couleur de fond About
      },
    },
  },
  plugins: [],
};
