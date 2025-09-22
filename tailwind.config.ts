import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        'globalit-blue': '#1DA1F2',
        'globalit-purple': '#4B5FA2',
        'globalit-dark': '#000002',
        'globalit-gray': '#EAEAEA',
        'globalit-text-light': '#D7D7D7',
        'globalit-text-muted': 'rgba(239, 237, 253, 0.70)',
        'gradient-purple': '#E59CFF',
        'gradient-blue': '#9CB2FF',
        'gradient-mid': '#BA9CFF',
      },
      fontFamily: {
        'manrope': ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #E59CFF 0.01%, #BA9CFF 50.01%, #9CB2FF 100%)',
        'gradient-hero': 'linear-gradient(111deg, #4144F2 21.11%, #E59CFF 28.93%, #D85A88 47.84%)',
        'gradient-card': 'linear-gradient(93deg, #101010 15.43%, rgba(22, 21, 21, 0.29) 60.12%, rgba(156, 178, 255, 0.19) 100.5%)',
        'gradient-button': 'linear-gradient(90deg, rgba(229, 156, 255, 0.36) 0.01%, rgba(186, 156, 255, 0.36) 50.01%, rgba(156, 178, 255, 0.36) 100%)',
        'gradient-stat-1': 'linear-gradient(180deg, #FFD382 27.4%, #FFA527 77.4%)',
        'gradient-stat-2': 'linear-gradient(90deg, #1DFFBF 0%, #00E5FF 100%)',
        'gradient-stat-3': 'linear-gradient(90deg, #FEA0F8 0%, #E59CFF 100%)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
