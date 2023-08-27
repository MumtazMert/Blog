/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "744px",
      lg: "1440px",
    },
    extend: {
      colors: {
        bPurple: {
          800: "#201F56",
        },
      },
    },
  },

  plugins: [],
};
