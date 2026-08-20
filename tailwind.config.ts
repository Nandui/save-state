import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#f7f4ef",
          raised: "#ffffff",
        },
        ink: {
          DEFAULT: "#141210",
          muted: "#5a554c",
          dim: "#8a8478",
        },
        line: "#ddd6c8",
        card: "#ffffff",
        accent: {
          DEFAULT: "#e11d74",
          dim: "#b3145c",
          wash: "rgba(225, 29, 116, 0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        mark: "0.02em",
      },
      boxShadow: {
        card: "0 1px 0 rgba(20,18,16,0.04)",
      },
      borderRadius: {
        app: "10px",
      },
    },
  },
  plugins: [],
};

export default config;
