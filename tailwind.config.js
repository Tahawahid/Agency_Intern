/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          lightGreen: "#80EE98",
          green: "#46DFB1",
          teal: "#09D1C7",
          blue: "#15919B",
          darkBlue: "#0C6478",
          navy: "#213A58",
        },
      },
    },
  },
  plugins: [],
};
