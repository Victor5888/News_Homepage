/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      screens: {
        xs: '375px', // Extra small devices (phones)
        sm: '640px', // Small devices (tablets)
        md: '768px', // Medium devices (desktops)
        lg: '1024px', // Large devices (desktops)
        xl: '1280px', // Extra large devices (large desktops)
        '2xl': '1536px', // 2x large devices (extra large desktops)
      },
    },
  },
  plugins: [],
};
