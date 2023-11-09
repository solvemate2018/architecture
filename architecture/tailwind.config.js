const withMT = require("@material-tailwind/react/utils/withMT");

const config = withMT({
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        scale: {
          '-100': '-1',
      },
        fontFamily: {
          'sagoe': ['SegoeLight'],
        },
        colors: {
          'primary': '#FFFFF0',
          'secondary': '#343434',
          'tertiary': '#1F2833', //TODO: Change later
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  })
  export default config