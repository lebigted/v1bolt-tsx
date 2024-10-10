/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#66FCF1', // Cyan vif
          dark: '#45A29E', // Cyan foncé
        },
        secondary: {
          DEFAULT: '#1F2833', // Gris foncé
          light: '#C5C6C7', // Gris clair
        },
        background: {
          DEFAULT: '#0B0C10', // Noir profond
          light: '#1F2833', // Gris très foncé
        },
        text: {
          DEFAULT: '#FFFFFF', // Blanc pour le texte principal
          dark: '#C5C6C7', // Gris clair pour le texte secondaire
        },
      },
      spacing: {
        '1/1.618': '61.8%', // Ratio d'or pour le padding ou les marges
      },
      width: {
        '1/1.618': '61.8%', // Ratio d'or pour la largeur
      },
      height: {
        '1/1.618': '61.8%', // Ratio d'or pour la hauteur
      },
    },
  },
  plugins: [],
};