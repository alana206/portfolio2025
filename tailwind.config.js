const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#1a202c", // Dark blue-gray for backgrounds
          surface: "#2d3748", // Slightly lighter blue-gray for cards/panels
          primary: "#63b3ed", // A shade of blue for primary actions/elements
          secondary: "#90cdf4", // A lighter blue for secondary elements
          accent: "#81e6d9", // Teal for accents
          text: "#e2e8f0", // Light gray for general text
          "text-light": "#cbd5e0", // Lighter gray for secondary text
          border: "#4a5568", // Darker blue-gray for borders
          hover: "#4a5568", // Color for hover states
          success: "#68d391", // Green for success messages
          warning: "#f6e05e", // Yellow for warnings
          error: "#fc8181", // Red for error messages
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Inter",
          "Arial",
        ],
      },
      colors: {
        base: {
          bg: "#0a0a0a",
          panel: "#111113",
          border: "#2a2a2a",
          text: "#e5e5e5",
          sub: "#a1a1aa",
          hover: "#1c1c1f",
        },
      },
    },
  },
  plugins: [],
};
export default config;
