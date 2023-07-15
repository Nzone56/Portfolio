document.addEventListener('DOMContentLoaSded', function () {
   const carouselImages = document.querySelector(
      '.carousel-images'
   ) as HTMLElement
   const carouselImageWidth = carouselImages.clientWidth
   console.log(carouselImageWidth)
   let currentPosition = 0
   let intervalId

   const buttonPrev = document.getElementById('prev')
   const buttonNext = document.getElementById('next')

   const slideNext = () => {
      console.log(currentPosition, carouselImageWidth)
      currentPosition -= carouselImageWidth

      if (
         currentPosition <
         -carouselImageWidth * (carouselImages.children.length - 1)
      ) {
         currentPosition = 0
      }
      carouselImages.style.transform = `translateX(${currentPosition}px)`

      clearInterval(intervalId)
      intervalId = setInterval(slideNext, 3000)
   }

   const slidePrev = () => {
      console.log('work')
      currentPosition += carouselImageWidth
      if (currentPosition > 0) {
         currentPosition =
            -carouselImageWidth * (carouselImages.children.length - 1)
      }
      carouselImages.style.transform = `translateX(${currentPosition}px)`

      clearInterval(intervalId)
      intervalId = setInterval(slideNext, 3000)
   }

   intervalId = setInterval(slideNext, 3000)

   buttonPrev.addEventListener('click', slidePrev)
   buttonNext.addEventListener('click', slideNext)
})
