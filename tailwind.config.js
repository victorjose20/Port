/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      ft :['Chakra Petch'],
    },
    extend: {
      inset: {
        '30rem': '30rem',
        '10%': '10%',
       
      },
      screens: {
        'max-ce': {'max': '375px'},
        'max-xs': {'max': '555px'},
        'max-sm': {'max': '875px'},
        'max-md': {'max': '1023px'},
        'max-lg': {'max': '1279px'},
        'max-xl': {'max': '1535px'},
      },
      boxShadow: {
        'soft-white': '0 10px 20px rgba(255, 255, 255, 0.3)',
      },
      keyframes:{
        slideIn:{
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        slideIn: 'slideIn 1s ease-out',
      },
    },
  },
  plugins: [],
}

