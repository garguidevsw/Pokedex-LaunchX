
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',//1
        sm: '2rem',    //2
        md: '6rem',
        lg: '10rem',    //4
        xl: '10rem',    //5 
        '2xl': '16rem', //6
      },
    },
    extends:{},
  },
  plugins: [],
}
