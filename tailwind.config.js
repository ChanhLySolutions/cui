// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },

    extend: {
      colors: {
        primary: '#757575',
      },
      p: {},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
