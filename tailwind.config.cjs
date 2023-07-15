/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      extend: {
         animation: {
            photoIcon: 'fade 1.5s ease-out, initImage 8s linear forwards',
            header: 'slide-header 8s linear forwards',
            hi: 'fade-name 10s linear forwards',
            bg: 'fade-bg 10s linear forwards',
            test: 'fade-test 12s linear forwards',
            typingtic:
               'typing 3s steps(40, end) forwards, blink-caret .75s step-end infinite, initText 8s linear forwards',
            ticBefore:
               'blink-caret .75s step-end infinite, fade-name 10s linear forwards',
            ticAfter: 'blink-caret .75s step-end infinite',
            appearLeft: 'slideInFromLeft 1s ease-out forwards',
            appearBottom: 'slideInFromBot 1s ease-out forwards',
            slideIn:
               'slide-in 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
            trackIn:
               'tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;',
            heartbeat: 'heartbeat 1.5s ease-in-out infinite both',
         },
         colors: {
            primary: {
               50: '#eff6ff',
               100: '#dbeafe',
               200: '#bfdbfe',
               300: '#93c5fd',
               400: '#60a5fa',
               500: '#3b82f6',
               600: '#2563eb',
               700: '#1d4ed8',
               800: '#1e40af',
               900: '#1e3a8a',
               950: '#172554',
            },
            almostBlack: '#010404',
            bgBlack: '#060918',
            coralRed: '#ff6b6b',
            darkTeal: '#005B5B',
            turquoise: '#47c1bf',
            orangeTeal: '#FD5901',
            mustard: '#f9c74f',
         },
         fontFamily: {
            logo: ['Big John Bold', 'sans-serif'],
         },
      },
   },
   plugins: [require('tailwind-scrollbar')],
}
