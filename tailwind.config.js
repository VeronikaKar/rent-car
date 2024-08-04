// //  @type {import('tailwindcss').Config}
// // eslint-disable-next-line no-undef

// module.exports = {
//   content: [
//     "./src/**/*.{html,js}", // Adjust to your project's structure
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
//   purge: {
//     enabled: true,
//     content: [
//       "./src/**/*.{html,js}", // Adjust to your project's structure
//     ],
//   },
// };

export const purge = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const darkMode = false;
export const theme = {
  extend: {},
};
export const variants = {
  extend: {},
};
export const plugins = [];
