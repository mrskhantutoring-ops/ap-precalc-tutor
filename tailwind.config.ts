import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6f9",
          100: "#d9ebf2",
          500: "#0e5a80",
          600: "#0a4a6e",
          700: "#073c59",
          900: "#052c42",
        },
      },
    },
  },
  plugins: [],
};

export default config;
