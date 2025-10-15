/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#012E40',
        secondary: '#F2E3D5',
        accent: '#3CA6A6',
        'spotify-gray': '#024959',
        'spotify-lightgray': '#026773',
        'google-blue': '#4285F4',
        'facebook-blue': '#1877F2',
        'apple-black': '#000000',
      },
    },
  },
  plugins: [],
};