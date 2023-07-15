const buttonPrev = document.getElementById('prev')
const buttonNext = document.getElementById('next')
let carouselImages, carouselImageWidth, currentPosition, intervalId

const observeSectionDisplay = () => {
   const pageSection = document.getElementById('page')
   const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
         if (
            mutation.type === 'attributes' &&
            mutation.attributeName === 'style'
         ) {
            const { display } = getComputedStyle(pageSection)
            if (display === 'block') {
               startCarousel()
            } else {
               stopCarousel()
            }
         }
      }
   })
   observer.observe(pageSection, { attributes: true })
}

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

const startCarousel = () => {
   carouselImages = document.querySelector('.carousel-images')
   carouselImageWidth = carouselImages.clientWidth
   currentPosition = 0

   intervalId = setInterval(slideNext, 3000)

   buttonPrev.addEventListener('click', slidePrev)
   buttonNext.addEventListener('click', slideNext)
}

const stopCarousel = () => {
   clearInterval(intervalId)
   buttonPrev.removeEventListener('click', slidePrev)
   buttonNext.removeEventListener('click', slideNext)
}

observeSectionDisplay()
