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
         },
      },
   },
   plugins: [],
}
