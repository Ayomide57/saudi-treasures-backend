/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#663695",
        secondary: "#FFB800",
        tertiary: "#F2F2F2",
        focus: "#7F3F98",
        accent: {
          50: "#E0D5EA",
          60: "#C7B2D6"
        },
        blue: {
          50: "#D8D9DB",
          100: "#071E86"
        },
        black: {
          50: "#D8D9DB",
          70: "#939598",
          80: "#747578",
          90: "#515153",
          100: "#231F20",
        },
        dark: "#000000",
        light: {
          100: "#FFFFFF",
          200: "#F7F7F7",
          300: "#E5E5E5",
          400: "#D9D9D9",
        },
        red: {
          70: "#B8696F",
          80: "#FF3B30",
        },
        sec: {
          50: "#FFE9D2",
          80: "#FBB468",
          100: "#F7941D",
        },
        yellow: {
          50: "#E08443",
          100: "#E08443"
        },
        pink: {
          90: "#924D8B",
        },
        orange: {
          50: "#DC814A"
        },
        gray: {
          60: "#B5B7B9"
        }
      },
    },
  },
  plugins: [],
}