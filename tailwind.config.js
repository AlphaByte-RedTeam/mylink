/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glassmorphishm: {
          8: 'rgba(32, 32, 32, 0.08)',
          38: 'rgba(32, 32, 32, 0.38)',
        },
      },
      dropShadow: {
        'glassmorphism': '0 10px 20px rgba(0, 0, 0, 0.05)',
      },

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
