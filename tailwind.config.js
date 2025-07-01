/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EBDCD2", // calming beige
        secondary: "#B8A398", // warm brown-grey
        accent: "#AFCBFF", // light blue
      },
    },
  },
};
