/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      boxShadow: {
        'btn': 'inset 0px 2px 0px hsla(0,0%,100%,.2),inset 0px -2px 0px #5b1ecf',
        'btn-footer': '0 0 16px 0px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

