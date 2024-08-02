/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx}"],
  darkMode:'class',
  theme: {
    extend: {},
    fontFamily:{
      customFontEn:["'IBM Plex Mono'","monospace"],
      customFontKr:["'Noto Sans Kr'","sans-serif"]

    },


    screens: {
      'mb': '390px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  ,
  plugins: []
}
}