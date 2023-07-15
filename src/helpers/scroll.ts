const headingAbout = document.getElementById('heading-about')
const paragraphAbout = document.getElementById('paragraph-about')
const headingSkills = document.getElementById('heading-skills')
const subheadingProfs = document.getElementById('sub-heading-profs')
const subheadingTechs = document.getElementById('sub-heading-techs')
const techs = document.getElementById('techs')
const profs = document.getElementById('profs')
const headingProject = document.getElementById('heading-project')
const contentProjects = document.querySelectorAll('#content-project')
const imageProjects = document.querySelectorAll('#image-project')

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
      techs.classList.add('animate-slideIn')
   }
   if (scrollPosition < 50) {
      headingAbout.classList.remove('animate-appearLeft')
      paragraphAbout.classList.remove('animate-appearBottom')
   }

   if (scrollPosition >= 2300) {
      headingProject.classList.add('animate-appearLeft')
      contentProjects.forEach((contentProject) => {
         contentProject.classList.add('animate-trackIn')
      })
      imageProjects.forEach((imageProject) => {
         imageProject.classList.add('animate-slideIn')
      })
   }

   if (scrollPosition < 1000) {
      headingSkills.classList.remove('animate-appearLeft')
      subheadingProfs.classList.remove('animate-appearLeft')
      subheadingTechs.classList.remove('animate-appearLeft')
      profs.classList.remove('animate-trackIn')
      techs.classList.remove('animate-slideIn')
   }
   if (scrollPosition < 2000) {
      headingProject.classList.remove('animate-appearLeft')
      contentProjects.forEach((contentProject) => {
         contentProject.classList.remove('animate-trackIn')
      })
      imageProjects.forEach((imageProject) => {
         imageProject.classList.remove('animate-slideIn')
      })
   }
}

window.addEventListener('scroll', checkScrollPosition)
