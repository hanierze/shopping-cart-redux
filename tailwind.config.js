/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        400:'400'
      },

      colors: {
        "dark-purple":'#081A51',
        'light-white' : 'rgba(255,255,255,0.18)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)'
        },
        light: {
          DEFAULT: 'var(--color-light)',
          tint: 'var(--color-light-tint)',
          50: 'var(--color-light-50)',
          100: 'var(--color-light-100)',
          200: 'var(--color-light-200)',
          300: 'var(--color-light-300)',
          400: 'var(--color-light-400)',
        },
        medium: {
          DEFAULT: 'var(--color-medium)',
          50: 'var(--color-medium-50)',
          100: 'var(--color-medium-100)',
          200: 'var(--color-medium-200)',
          300: 'var(--color-medium-300)',
        },
        salt: {
          DEFAULT: 'var(--color-salt)',
          100: 'var(--color-salt-100)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          50: 'var(--color-secondary-50)',
          400: 'var(--color-secondary)',
        },
        danger: {
          DEFAULT: 'var(--color-danger)',
          50:'var(--color-danger-contrast)'
        },
        success:{
          DEFAULT:'var(--color-success)',
          50:'var(--color-success-contrast)'
        },
        warning:{
          DEFAULT:'var(--color-warning)',
          50:'var(--color-warning-contrast)'
        }
      },
      screens: {
        xs: '480px',
        xxs: '360px',
      },
      
      transitionProperty: {
        'width': 'width'
      },

    },
    mode: 'jit'
  },
  plugins: [require("daisyui")],
}

