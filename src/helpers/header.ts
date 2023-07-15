window.addEventListener('scroll', function () {
   var header = document.getElementById('header')
   var banner = document.getElementById('banner')

   var bannerRect = banner.getBoundingClientRect()

   console.log(bannerRect.top)
   if (bannerRect.top < -1200) {
      header.style.backgroundColor = 'black'
   } else {
      header.style.backgroundColor = 'transparent'
   }
})
