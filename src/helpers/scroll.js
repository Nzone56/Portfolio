const heading = document.getElementById('heading')
const paragraph = document.getElementById('paragraph')

export const checkScrollPosition = () => {
   const scrollPosition = document.documentElement.scrollTop

   if (scrollPosition >= 300) {
      heading.classList.add('animate-appearLeft')
   }

   if (scrollPosition >= 400) {
      paragraph.classList.add('animate-appearBottom')
   }

   if (scrollPosition < 50) {
      heading.classList.remove('animate-appearLeft')
      paragraph.classList.remove('animate-appearBottom')
   }
}

window.addEventListener('scroll', checkScrollPosition)
