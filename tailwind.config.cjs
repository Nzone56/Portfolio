/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      extend: {
         animation: {
            photoIcon: 'fade 1.5s ease-out, initImage 8s linear forwards',
            typingtic:
               'typing 3s steps(40, end) forwards, blink-caret .75s step-end infinite, initText 8s linear forwards',
            tic: 'blink-caret .75s step-end infinite',
            appearLeft: 'slideInFromLeft 1s ease-out forwards',
            appearBottom: 'slideInFromBot 1s ease-out forwards',
            flicker: 'flicker-in-1 3s linear both',
            trackIn:
               'tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;',
         },
         colors: {
            bgBlack: '#292a42',
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
