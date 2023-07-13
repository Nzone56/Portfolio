window.addEventListener('scroll', function () {
   var header = document.getElementById('header')
   var banner = document.getElementById('banner')

   var headerRect = header.getBoundingClientRect()
   var bannerRect = banner.getBoundingClientRect()

   console.log(bannerRect.top, headerRect.top)
   if (bannerRect.top < -1700) {
      header.style.backgroundColor =
         'black' /* Cambia el color del encabezado cuando no está encima del banner */
   } else {
      header.style.backgroundColor =
         'transparent' /* Restablece el color original del encabezado cuando está encima del banner */
   }
})
