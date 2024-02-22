/** @type {import('tailwindcss').Config} */

const generateColorClass = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`
}

const accentColor = {
  primary: generateColorClass('accent-orange'),
  secondary: generateColorClass('accent-green'),
  tertiary: generateColorClass('accent-blue'),
};

const backgroundColor = {
  primary: generateColorClass('background'),
}

const textColor = {
  primary: generateColorClass('text'),
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-code-pro': ['Source Code Pro', 'monospace'],
      },
      colors: {
        accentColor,
        backgroundColor,
        textColor,
      },
    },
  },
  plugins: [],
}