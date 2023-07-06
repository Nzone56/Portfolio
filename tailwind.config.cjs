/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      extend: {
         animation: {
            fade: 'fade 1.5s linear, init 8s linear ',
            typingtic:
               'typing 2.5s steps(40, end), blink-caret .75s step-end infinite',
            //
         },
      },
   },
   plugins: [],
}
