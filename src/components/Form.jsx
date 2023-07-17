import { useState } from 'react'

export const Form = () => {
   const [isButtonDisabled, setIsButtonDisabled] = useState(false)

   const handleButtonClick = () => {
      setIsButtonDisabled(true)
   }

   return (
      <div class="bg-black p-8 sm:p-16 text-turquoise font-bold m-4 lg:m-16 shadow-xl rounded-lg w-4/5 sm:w-3/5 xl:w-1/2">
         <form name="contact-me" class="flex flex-col">
            <label class="text-xl mb-4" for="name">
               Name:
            </label>
            <input
               placeholder="Enter Your Name"
               type="text"
               id="name"
               name="Name"
               class="input"
               required
            />

            <label class="text-xl mb-4 mt-8" for="email">
               Email:
            </label>
            <input
               type="email"
               id="email"
               name="Email"
               class="input"
               placeholder="Enter Your Email"
               required
            />

            <label class="text-xl mb-4 mt-8" for="message">
               Message:
            </label>
            <textarea
               placeholder="Enter Your Message"
               id="message"
               rows="8"
               name="Message"
               class="input"
               required
            ></textarea>

            <button
               onClick={handleButtonClick}
               disabled={isButtonDisabled}
               id="myButton"
               type="submit"
               class="w-auto sm:w-1/2 mx-auto mt-8 py-4 px-8 bg-gradient-to-r from-turquoise via-cyan-600 to-blue-900 text-white hover:bg-cyan-600 rounded-md transition duration-500 hover:scale-105"
            >
               Submit
            </button>
         </form>
         <span id="msg"> </span>
      </div>
   )
}
