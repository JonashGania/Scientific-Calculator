/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'button': '4px 4px 1px 0 #383838',
        'container': '8px 8px 5px 0 rgba(132, 132, 132, 0.7)',
      },
      screens: {
        'mobile': '450px',
      },
      width: {
        'mobile-w': '296px',
      }
    },
  },
  plugins: [],
}

