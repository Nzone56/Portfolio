const headingAbout = document.getElementById('heading-about')
const paragraphAbout = document.getElementById('paragraph-about')
const headingSkills = document.getElementById('heading-skills')
const subheadingProfs = document.getElementById('sub-heading-profs')
const subheadingTechs = document.getElementById('sub-heading-techs')
const techs = document.getElementById('techs')
const profs = document.getElementById('profs')

export const checkScrollPosition = () => {
   const scrollPosition = document.documentElement.scrollTop

   if (scrollPosition >= 350) {
      headingAbout.classList.add('animate-appearLeft')
   }
   if (scrollPosition >= 450) {
      paragraphAbout.classList.add('animate-appearBottom')
   }
   if (scrollPosition >= 1350) {
      headingSkills.classList.add('animate-appearLeft')
   }
   if (scrollPosition >= 1450) {
      subheadingProfs.classList.add('animate-appearLeft')
      subheadingTechs.classList.add('animate-appearLeft')
   }
   if (scrollPosition >= 1600) {
      profs.classList.add('animate-trackIn')
      techs.classList.add('animate-flicker')
   }
   if (scrollPosition < 50) {
      headingAbout.classList.remove('animate-appearLeft')
      paragraphAbout.classList.remove('animate-appearBottom')
   }
   if (scrollPosition < 1000) {
      headingSkills.classList.remove('animate-appearLeft')
      subheadingProfs.classList.remove('animate-appearLeft')
      subheadingTechs.classList.remove('animate-appearLeft')
      profs.classList.remove('animate-trackIn')
      techs.classList.remove('animate-flicker')
   }
}

window.addEventListener('scroll', checkScrollPosition)
