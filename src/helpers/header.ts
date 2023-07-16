window.addEventListener('scroll', function () {
   var headers = document.querySelectorAll('#header')
   var banner = document.getElementById('banner')

   var bannerRect = banner.getBoundingClientRect()

   if (bannerRect.top < -900) {
      headers.forEach(function (header) {
         var headerElement = header as HTMLElement // Type assertion to HTMLElement
         headerElement.style.backgroundColor = 'black'
      })
   } else {
      headers.forEach(function (header) {
         var headerElement = header as HTMLElement // Type assertion to HTMLElement
         headerElement.style.backgroundColor = 'transparent'
      })
   }
})

let button, sidebarContainer
const startNavbar = () => {
   button = document.getElementById('hamburger')
   sidebarContainer = document.querySelector(
      '.sidebar-container'
   ) as HTMLDivElement

   console.log(button)
   button.addEventListener('click', openNavbar)
}

const openNavbar = () => {
   console.log('hola')
   const containerStyle = sidebarContainer.style
   if (containerStyle.transform == 'translateX(0px)') {
      containerStyle.transform = 'translateX(-100%)'
   } else {
      containerStyle.transform = 'translateX(0)'
   }
}
setTimeout(() => {
   startNavbar()
}, 11000)
