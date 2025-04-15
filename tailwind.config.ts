import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      colors: {
        // Stealth/Tactical color palette
        background: 'hsl(var(--color-background))', // Jet Black
        surface: 'hsl(var(--color-surface))',     // Dark Gray
        muted: 'hsl(var(--color-muted))',       // Gunmetal
        border: 'hsl(var(--color-border))',      // Cool Gray
        primary: 'hsl(var(--color-primary))',    // Light Gray / Soft White
        accent: 'hsl(var(--color-accent))',      // Tactical Blue-Gray
      },
      // Remove rounded corners for a sharp, tactical look
      borderRadius: {
        none: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
