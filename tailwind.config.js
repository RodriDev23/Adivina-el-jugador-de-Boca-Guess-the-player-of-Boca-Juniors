/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
       backgroundColor: {
         'custom-color' : '#123456'
       }
    },
  },
  plugins: [],
}

