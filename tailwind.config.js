/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:(theme)=>({
       112:"28rem",
       120:"30rem",
      }),
      minHeight:(theme)=>({
        80:"20rem",
      }),

colors:{
  pallette:{
    lighter:"#124583",
    primary:"#bb1234",
  }
}


    },
  },
  plugins: [],
}