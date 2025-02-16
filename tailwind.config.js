/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        accent: "rgb(var(--accent))",
        "gray-1": "rgb(var(--gray-1))",
        "gray-2": "rgb(var(--gray-2))",
        "gray-3": "rgb(var(--gray-3))",
        "gray-4": "rgb(var(--gray-4))",
        "gray-5": "rgb(var(--gray-5))",
      },
    },
    container: {
      padding: {
        DEFAULT: "16px",
      },
      screens: {
        sm: "1250px",
        md: "1250px",
        lg: "1250px",
        xl: "1250px",
      },
    },
  },
  plugins: [],
};
