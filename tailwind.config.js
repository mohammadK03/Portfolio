/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif" ]
      },
      spacing: {
        'desktop': '100px',
        'mobile': '10px'
      },
      animation: {
        fade: 'fade .2s ease-in-out',
        slideDown: 'slideDown 1s ease-in-out',
        leftFade: 'leftFade .7s ease-in-out',
        leftFade: 'rightFade .7s ease-in-out',
        slideUp: 'slideUp .4s ease-in-out',
      },
      keyframes: {
        'fade': {
          '0%': { scale: 0, opacity: 0 },
          '100%': { scale: 1, opacity: 1 },
        },
        'slideDown': {
          '0%': { transform: 'translateY(-70px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'leftFade': {
          '0%': { transform: 'translateX(-70px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'rightFade': {
          '0%': { transform: 'translateX(40px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slideUp': {
          '0%': { transform: 'translateY(40px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      }
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
    // require('flowbite/plugin'),
  ],
}