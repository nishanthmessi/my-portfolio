/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {       
          "primary": "#E5202B",                 
          "secondary": "#E9E92F",                  
          "accent": "#F6F9C8",                 
          "neutral": "#000000",                 
          "base-100": "#FFFFFF",                 
          "info": "#CAE2E8",                 
          "success": "#DFF2A1",                  
          "warning": "#F7E488",        
          "error": "#F2B6B5",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
