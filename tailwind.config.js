const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
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
