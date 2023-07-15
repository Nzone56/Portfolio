window.addEventListener('scroll', function () {
   var headers = document.querySelectorAll('#header')
   var banner = document.getElementById('banner')

   var bannerRect = banner.getBoundingClientRect()

   if (bannerRect.top < -1200) {
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
