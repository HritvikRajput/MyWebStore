/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{html,ts,js}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
}
}
