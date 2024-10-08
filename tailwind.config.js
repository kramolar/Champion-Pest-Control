/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monteserrat: ['Montserrat', 'sans-serif'],
        abel: ['Abel', 'sans-serif']
      }
    },
    colors: {
      'black-shade': '#35363a',
      'letter-color': '#eec161',
      'grey-shade': '#f1f1f1',
      'grey-shade2': '#646569',
      'brown-shade': '#B7B597',
      'brown-shade2': '#4d4d4d',
      'grey-shade3': '#d6ccc2',
      'pistachio': '#5E5D5C',
      'red-shade': '#CE2D4F',
      'blue-shade': '#06BEE1'
    }
  },
  plugins: [
  
  ],
}