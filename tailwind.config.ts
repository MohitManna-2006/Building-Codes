import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        background: "#FFFFFF",
        foreground: "#111827",
        muted: "#F8FAFC",
        'muted-foreground': "#6B7280",
        popover: "#FFFFFF",
        'popover-foreground': "#111827",
        card: { DEFAULT: "#FFFFFF", foreground: "#111827" },
        border: "#E5E7EB",
        input: "#E5E7EB",
        primary: { DEFAULT: "#1E3A8A", foreground: "#FFFFFF" },
        secondary: { DEFAULT: "#F8FAFC", foreground: "#6B7280" },
        accent: { DEFAULT: "#10B981", foreground: "#FFFFFF" },
        destructive: { DEFAULT: "#EF4444", foreground: "#FFFFFF" },
        ring: "#1E3A8A",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.07), 0 1.5px 6px rgba(0,0,0,0.04)",
      },
      borderColor: {
        divider: "#E5E7EB",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
