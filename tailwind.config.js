/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "376px",
      },
      colors: {
        Bright_Blue: "hsl(220, 98%, 61%)",
        gradient_One: "hsl(192, 100%, 67%)",
        gradient_Two: "hsl(280, 87%, 65%)",

        Very_Light_Gray: "hsl(0,0%,98%)",
        Very_Light_Grayish_Blue: "hsl(236,33%,92%)",
        Light_Grayish_Blue: "hsl(233,11%,84%)",
        Dark_Grayish_Blue: "hsl(236,9%,61%)",
        Very_Dark_Grayish_Blue: "hsl(235,19%,35%)",

        Very_Dark_Blue: "hsl(235,21%,11%)",
        Very_Dark_DeSaturated_Blue: "hsl(235,24%,19%)",
        Light_Grayish_Blue: "hsl(234,39%,85%)",
        Light_Grayish_Blue: "hsl(236,33%,92%)", //(hover)
        Dark_Grayish_Blue: "hsl(234,11%,52%)",
        Very_Dark_Grayish_Blue: "hsl(237,14%,26%)",
      },
      fontFamily: {
        one: " 'Josefin Sans', sans-serif",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
