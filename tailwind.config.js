/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./script.js"],
  theme: {
    extend: {
      backgroundImage: {
        'body-pattern': "url('./images/pattern-hills.svg')",
        
        'hero-pattern': "url('./images/bg-stars.svg')",
      }
    },
  },
  plugins: [],
}

