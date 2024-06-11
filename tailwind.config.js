/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        transfer: "transfer 1.3s infinite",
      },
      keyframes: {
        transfer: {
          "0%, 100%": {
            transform: "translateX(-1px)",
            opacity: 0.5,
            color: "#2ada55",
          },
          "50%": {
            transform: "translateX(1px)",
            opacity: 1,
          },
        },
      },
      backgroundImage: {
        "hero-backdrop-dark":
          "repeating-linear-gradient(80deg, #1a202c 0%, rgba(67, 42, 93, 0.75) 25%, rgba(121, 48, 115, 0.5) 50%, rgba(255, 0, 0, 0) 100%), repeating-radial-gradient(19.5% 19.5% at 35% 86%, #2e42d6 21%, rgba(43, 95, 178, 0.91) 28.18%, rgba(45, 111, 171, 0.82) 35.36%, rgba(47, 125, 172, 0.73) 42.55%, rgba(50, 138, 176, 0.64) 49.73%, rgba(52, 152, 181, 0.55) 56.91%, rgba(55, 166, 187, 0.45) 64.09%, rgba(58, 179, 192, 0.36) 71.27%, rgba(60, 193, 198, 0.27) 78.45%, rgba(62, 207, 203, 0.18) 85.64%, rgba(65, 236, 208, 0) 2%)",
        "hero-backdrop-light":
          "repeating-radial-gradient(11% 11% at 3% 6%, #a0aec0 0%, rgba(166, 154, 201, 0.75) 25%, rgba(214, 110, 214, 0.5) 20%, rgba(255, 0, 0, 0) 50%), repeating-radial-gradient(19.5% 2.5% at 5% 6%, #2e42d6 21%, rgba(43, 95, 178, 0.91) 28.18%, rgba(45, 111, 171, 0.82) 35.36%, rgba(47, 125, 172, 0.73) 42.55%, rgba(50, 138, 176, 0.64) 49.73%, rgba(52, 152, 181, 0.55) 56.91%, rgba(55, 166, 187, 0.45) 64.09%, rgba(58, 179, 192, 0.36) 71.27%, rgba(60, 193, 198, 0.27) 78.45%, rgba(62, 207, 203, 0.18) 85.64%, rgba(65, 236, 208, 0) 100%), repeating-radial-gradient(35.5% 35.5% at 0% 4%, #4c51bf 0%, rgba(110, 71, 197, 0.92) 8.33%, rgba(133, 66, 190, 0.83) 16.67%, rgba(149, 62, 183, 0.75) 25%, rgba(163, 59, 177, 0.67) 33.33%, rgba(175, 55, 171, 0.58) 41.67%, rgba(187, 52, 166, 0.5) 50%, rgba(198, 47, 159, 0.42) 58.33%, rgba(209, 42, 150, 0.33) 66.67%, rgba(220, 36, 138, 0.25) 75%, rgba(231, 28, 121, 0.17) 83.33%, rgba(255, 0, 0, 0) 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["bumblebee", "sunset"],
    darkTheme: "sunset",
    styled: true,
    base: true,
  },
};
