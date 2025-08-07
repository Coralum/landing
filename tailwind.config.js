/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Coralum Brand Colors
        coralum: {
          cream: "#f9f8eb",      // Light cream background
          teal: "#155e63",       // Primary teal
          dark: "#303841",       // Dark gray/charcoal
          light: "#eeeeee",      // Light gray
          muted: "#d2cccc",      // Muted gray
          orange: "#fe5620",     // Primary coral orange
          coral: "#fd8246",      // Secondary coral
        },
        // Semantic color mappings
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#155e63",    // coralum teal
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#fd8246",    // coralum coral
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#fe5620",    // coralum orange
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#d2cccc",    // coralum muted
          foreground: "#303841",
        },
        accent: {
          DEFAULT: "#fe5620",    // coralum orange
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 