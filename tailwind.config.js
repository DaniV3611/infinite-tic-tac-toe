/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        around: "0px 0px 15px 2px rgba(0,0,0,0.2)",
      },
      colors: {
        "slate-transparent": "rgba(128, 128, 128,0.5)",
      },
    },
  },
  plugins: [],
};
