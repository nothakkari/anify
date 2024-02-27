/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      // neutrals
      'white': '#ffffff',
      'light-gray': '#717998',
      'medium-gray': '#2E2F3A',
      'medium-gray-2': '#202129',
      'dark-gray': '#18181F',
      'background': '#111117',
      // brand
      'accent': '#0066FF',
      'hover': '#004FC6',
      'url': '#02A9FF',
      // status
      'red': '#FF3347',
      'green': '#22742F',
      'peach': '#FFECBC',
      'jasmine': '#EDC96D',
      'brown': '#403721',
      // Raiting
      'top100': '#EDC96D',
    },
    extend: {},
  },
  plugins: [
    'prettier-plugin-tailwindcss'
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}

