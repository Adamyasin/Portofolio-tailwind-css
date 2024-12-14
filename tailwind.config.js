/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      animation: {
        rotate: "rotate 5s infinite linear",
      },
      colors: {
        primary: "#f59e0b",
        secondary: "#64748b",
        dark: "#020617",
        p1: "#162C38",
        p2: "#417972",
        s1: "#C1B2A4",
        s2: "#F5F2E5",
        s3: "#F2D381",
      },
      screens: {
        "2xl": "1320px", // Memperbaiki 'screen' menjadi 'screens'
      },
    },
  },
  plugins: [],
};
