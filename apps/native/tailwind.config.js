/** @type {import('tailwindcss').Config} */

import themes from '@repo/lib/themes';

const { createThemes } = require("tw-colors");

export default {
  /** @type {import('tailwindcss').Config} */
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [
    createThemes(themes),
  ],
};
