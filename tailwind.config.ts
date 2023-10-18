import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        // twitch colors
        "white":'#ffffff',
        "white_violet_1":'#e6ddf0',
        "white_violet_2":'#cdbce1',
        "white_violet_3":'#b39cd2',
        "white_violet_4":'#9a7dc3',
        "white_violet_5":'#805fb4',
        "violet_1":'#6441a5',
        "violet_2":'#543787',
        "violet_3":'#442d6b',
        "violet_4":'#342450',
        "black_violet_1":'#251a36',
        "black_violet_2":'#17111e',
        "black":'#000000',
        // black-white scale
        'hinted-grey-1': '#0e0e10',
        'hinted-grey-2': '#18181b',
        'hinted-grey-3': '#1f1f23',
        'hinted-grey-4': '#26262c',
        'hinted-grey-5': '#323239',
        'hinted-grey-6': '#3b3b44',
        'hinted-grey-7': '#53535f',
        'hinted-grey-8': '#848494',
        'hinted-grey-9': '#adadb8',
        'hinted-grey-10': '#c8c8d0',
        'hinted-grey-11': '#d3d3d9',
        'hinted-grey-12': '#dedee3',
        'hinted-grey-13': '#e6e6ea',
        'hinted-grey-14': '#efeff1',
        'hinted-grey-15': '#f7f7f8',

      }
    },
  },
  plugins: [],
}
export default config
