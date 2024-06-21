/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "fs-xs": [
        ["var(--fs-100)", {lineHeight: "var(--lh-300)"}],
      ],
      "fs-sm": [
        ["var(--fs-200)", {lineHeight: "var(--lh-300)"}],
      ],
      "fs-base": [
        ["var(--fs-300)", {lineHeight: "var(--lh-300)"}],
      ],
      "fs-md": [
        ["var(--fs-400)", {lineHeight: "var(--lh-300)"}],
      ],
      "fs-lg": [
        ["var(--fs-500)", {lineHeight: "var(--lh-300)"}],
      ],
      "button": [
        ["var(--fs-button)", {lineHeight: "var(--lh-button)"}],
      ],
    },
    colors: {
      "primary": "var(--primary)",
      "primary-light": "var(--primary-light)",
      "black": "var(--black)",
      "gray": "var(--gray)",
      "white": "var(--white)",
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
}