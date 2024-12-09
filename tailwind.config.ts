import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "hodling-blue": "#2049F8",
      },
      fontFamily: {
        sans: ["Neue Montreal", "Arial", "Helvetica", "sans-serif"],
        clash: ["Clash Display", "Arial", "Helvetica", "sans-serif"],
        awesome: ["Awesome Serif", "serif"],
        dxdynamix: ["DxDynamix", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;
