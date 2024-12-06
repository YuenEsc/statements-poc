/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.{pug,html}'],
  theme: {
    variants: {
      borderStyle: ['responsive', 'first', 'last', 'odd', 'even'],
      borderWidth: ['responsive', 'first', 'last', 'odd', 'even'],
      borderColor: ['responsive', 'first', 'last', 'odd', 'even'],
    },
    colors: {
      textPrimary: 'rgb( var(--primary-text-color) )',
      textSecondary: 'rgb( var(--secondary-text-color) )',
      black: 'rgb( var(--black-color))',
      gray: {
        500: 'rgb( var(--gray-500-color) )',
        50: 'rgb( var(--gray-50-color) )'
      },
      amber: {
        700: 'rgb( var(--amber-700-color) )',
        500: 'rgb( var(--amber-500-color) )',
        50: 'rgb( var(--amber-50-color) )'
      },
      orange: {
        700: 'rgb( var(--orange-700-color) )',
        500: 'rgb( var(--orange-500-color) )',
        50: 'rgb( var(--orange-50-color) )'
      },
      red: {
        700: 'rgb( var(--red-700-color) )',
        500: 'rgb( var(--red-500-color) )',
        50: 'rgb( var(--red-50-color) )'
      },
      blue: {
        700: 'rgb( var(--blue-700-color) )',
        500: 'rgb( var(--blue-500-color) )',
        50: 'rgb( var(--blue-50-color) )',
        'A700': 'rgb( var(--blue-A700-color) )'
      },
      green: {
        500: 'rgb( var(--green-500-color) )',
        50: 'rgb( var(--green-50-color) )'
      },
      lime: {
        700: 'rgb( var(--lime-700-color) )',
        500: 'rgb( var(--lime-500-color) )',
        50: 'rgb( var(--lime-50-color) )'
      },
      info: 'rgb( var(--info-color) ) '
    },
    extend: {},
  },
  plugins: [],
}
