import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        wpu: { primary: "#008080" },
      },
      keyframes: {
        navbar: {
          "0%": { opacity: "0", transform: "translateY(-50%)" },
          "50%": { opacity: "0", transform: "translateY(-25%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        navbar: "navbar 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
