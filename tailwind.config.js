/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#000000',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'primary-100':'#FFC107',
      'primary-200':'#dda400',
      'primary-300':'#916400',
      'accent-100':'#607D8B',
      'accent-200':'#f2ffff',
      'text-100':'#333333',
      'text-200':'#5c5c5c',
      'base-100':'#F5F5F5',
      'base-200':'#ebebeb',
      'base-300':'#c2c2c2',
        
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

// 'primary-100':'#FFC107',
// 'primary-200':'#dda400',
// 'primary-300':'#916400',
// 'accent-100':'#607D8B',
// 'accent-200':'#f2ffff',
// 'text-100':'#333333',
// 'text-200':'#5c5c5c',
// 'bg-100':'#F5F5F5',
// 'bg-200':'#ebebeb',
// 'bg-300':'#c2c2c2',