import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        acumin: ["acumin-pro", "sans-serif"],
        sans: ["helvetica", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#7C3AED",
        black: {
          900: "#1c1917",
          500: "#252c38",
          100: "#3A414B",
        },
        slate: "#64748B",
        green: "#059669",
        yellow: "#FACC15",
        orange: "#F97316",
        blue: "#2563EB",
        rose: "#E11D48",
        gray: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
