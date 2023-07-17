const scriptURL =
   'https://script.google.com/macros/s/AKfycbyr_gXClrwxa-x8loQjnbHB8Y3q2lBm6PrdSQ94ZHWpdx6bHpjGx3xIBukumx7qlza3Vg/exec'
const form = document.forms['contact-me']
const msg = document.getElementById('msg')

form.addEventListener('submit', (e) => {
   e.preventDefault()
   disableButton()
   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
         msg.innerHTML = 'Thanks for your message'
         enableButton()
         setTimeout(() => (msg.innerHTML = ' '), 5000)
         form.reset()
      })
      .catch((error) => (msg.innerHTML = 'Error sending your message'))
})

const disableButton = () => {
   var button = document.getElementById('myButton')
   button
}
const enableButton = () => {
   var button = document.getElementById('myButton')
   button.classList.remove('disabled')
   button.removeAttribute('aria-disabled')
}
