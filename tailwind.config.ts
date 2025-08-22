import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: { extend: {
    fontFamily: {
      montserrat: ['Montserrat'],
    },
    keyframes: {
      grow: {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(1.1)' },
      },
      fadeDown: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)',
        },
      },
      fadeInDown: {
        '0%': { opacity: '0', transform: 'translateY(-20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      fadeOutUp: {
        '0%': { opacity: '1', transform: 'translateY(0)' },
        '100%': { opacity: '0', transform: 'translateY(-20px)' },
      },
      fadeInLeft: {
        '0%': { transform: 'translateX(100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      fadeOutRight: {
        '0%': { transform: 'translateX(0)', opacity: '1' },
        '100%': { transform: 'translateX(100%)', opacity: '0' },
      },
      moveForever: {
        '0%': { transform: 'translate3d(-90px, 0, 0)' },
        '100%': { transform: 'translate3d(85px, 0, 0)' },
      },
      gradient: {
        '0%': { 'background-position': '0% 50%' },
        '50%': { 'background-position': '100% 100%' },
        '100%': { 'background-position': '0% 50%' },
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      fadeOut: {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
      slideIn: {
        from: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        to: { transform: 'translateX(0)' },
      },
      swipeOut: {
        from: { transform: 'translateX(var(--reka-toast-swipe-end-x))' },
        to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
      },
    },
    animation: {
      grow: 'grow 0.5s ease-out forwards',
      fadeIn: 'fadeIn 0.5s ease-out forwards',
      fadeOut: 'fadeOut 0.5s ease-out forwards',
      fadeInLeft: 'fadeInLeft 0.5s ease-out forwards',
      fadeOutRight: 'fadeOutRight 0.5s ease-out forwards',
      fadeDown: 'fadeDown 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)',
      fadeInDown: 'fadeInDown 1s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
      fadeOutUp: 'fadeOutUp 0.6s cubic-bezier(0.55, 0.09, 0.68, 0.11)',
      wave7: 'moveForever 7s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite',
      wave10: 'moveForever 10s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite',
      wave13: 'moveForever 13s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite',
      wave20: 'moveForever 20s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite',
      slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      swipeOut: 'swipeOut 100ms ease-out',
    },
  } },
}
