/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'grey': '#ececec',
        'accent': '#1d9bf0',
        'muted': '#051f30',
        'muted-light': '#d1ebfc',
        'dark-gray': '#eff3f4',
        'gray-text': '#536471',
        'border': '#cfd9de',
        'dark-mode': '#000000',
        'dark-text': '#71767B',
        'dark-border': '#2f3336',
        'hover': '#e7e9ea1a',
        'dark-card': '#16181c',
        'light-card': '#f7f9f9',
        'blue-hover': '#1d9bf01a',
        'red-hover': '#f918801a'
      },
      screens: {
        'phone': '500px',
        'tablet': '690px'
      },
      objectPosition: {
        'unset': 'unset'
      },
      minHeight: {
        'responsive': '100dvh'
      },
      animation: {
        'slidein': 'slide 200ms linear'
      },
      keyframes: {
        'slide': {
          '0%': {'transform': 'translateX(-288px)'},
          '100%': {'transform': 'translateX(0px)'}
        }
      }
    },
  },
  plugins: [],
}
