/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "hsl(180, 66%, 49%)",
        "primary-2": "hsl(257, 27%, 26%)",
        secondary: "hsl(0, 87%, 67%)",
        "neutral-1": "hsl(0, 0%, 75%)",
        "neutral-2": "hsl(257, 7%, 63%)",
        "neutral-3": "hsl(255, 11%, 22%)",
        "neutral-4": "hsl(260, 8%, 14%)",
      },
      backgroundImage: {
        "bg-boost-desktop": "url('/bg-boost-desktop.svg')",
        "bg-boost-mobile": "url('/bg-boost-mobile.svg')",
        "bg-shorten-desktop": "url('/bg-shorten-desktop.svg')",
        "bg-shorten-mobile": "url('/bg-shorten-mobile.svg')",
      },
    },
  },
  plugins: [],
};
