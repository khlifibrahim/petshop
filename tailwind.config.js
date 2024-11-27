/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
      'Inter': ['Inter', 'sans-serif']
      },
    extend: {
      colors : {
        'semiWhite': '#F8F9FA',
        'black': '#000000',
        'orange': '#FF9500',
        'dark': '#090706',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #F87537, #FBA81F)',
      },
      boxShadow: {
        'figma-shadow': '0px 16px 12px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
}