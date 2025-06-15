module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-preset-env')({
      stage: 3, // Choisis un stage pour la compatibilité des fonctionnalités CSS
    }),
    require('autoprefixer'),
  ],
};
