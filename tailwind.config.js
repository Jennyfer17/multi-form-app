/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel_blue: 'hsl(228, 100%, 84%)',
        marine_blue: 'hsl(213, 96%, 18%)',
        purplish_blue: 'hsl(243, 100%, 62%)',
        light_blue: 'hsl(206, 94%, 87%)',
        strawberry_blue: 'hsl(354, 84%, 57%)',
        cool_gray: 'hsl(231, 11%, 63%)',
        light_gray: 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
      },
      backgroundImage: {
        mobile: "url('./bg-sidebar-mobile.svg')",
      }
    },
  },
  plugins: [],
}

