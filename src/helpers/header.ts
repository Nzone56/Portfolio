window.addEventListener('scroll', function () {
   var headers = document.querySelectorAll('#header')
   var banner = document.getElementById('banner')

   var bannerRect = banner.getBoundingClientRect()

   if (bannerRect.top < -900) {
      headers.forEach(function (header) {
         var headerElement = header as HTMLElement
         headerElement.style.backgroundColor = 'black'
      })
   } else {
      headers.forEach(function (header) {
         var headerElement = header as HTMLElement
         headerElement.style.backgroundColor = 'transparent'
      })
   }
})

document.addEventListener('DOMContentLoaded', () => {
   const icon = document.getElementById('hamburger')
   const sidebarContainer = document.querySelector(
      '.sidebar-container'
   ) as HTMLDivElement
   icon.addEventListener('click', () => {
      const containerStyle = sidebarContainer.style
      if (containerStyle.transform == 'translateX(0px)') {
         containerStyle.transform = 'translateX(-100%)'
      } else {
         containerStyle.transform = 'translateX(0)'
      }
   })
})
