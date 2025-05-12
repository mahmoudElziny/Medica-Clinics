/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors (your brand)
        primary: {
          DEFAULT: "#40095D", // Main purple (logo color)
          light: "#9C27B0", // Lighter purple (accent)
        },
        // Medical-specific colors
        medical: {
          success: "#4CAF50", // Green (confirmations, positive actions)
          action: "#2196F3", // Blue (CTAs, interactive elements)
        },
        // Neutrals
        gray: {
          light: "#E0E0E0", // Light gray (dividers, subtle backgrounds)
          DEFAULT: "#757575", // Medium gray (body text)
        },
        white: "#FFFFFF", // Pure white (backgrounds)

        // Optional error color (if needed)
        error: "#FF5252", // Soft red (warnings, errors)
      },
    },
  },
  plugins: [],
};
