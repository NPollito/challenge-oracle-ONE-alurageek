import router from "./router.js"
import searchProducts from "./js/searchProducts.js"
import { dataForm, validate, resetForm } from "./js/form.js"
import spinner from "./components/spinner.js"
import alertMessage from "./components/alertMessage.js"

import {
  inputProducts,
  inputProductsDesktop,
} from './helpers/nodes.js'

// variables
const nameInput = document.getElementById('nameUser')
const messageInput = document.getElementById('messageUser')
const formFooter = document.querySelector('.form--config-footer')

// eventos
document.addEventListener('DOMContentLoaded', () => {
  
  window.addEventListener('hashchange', router)
  router()
  
  inputProducts.addEventListener('input', searchProducts )
  inputProductsDesktop.addEventListener('input', searchProducts )
})

// validar formulario
dataForm.name = ''
dataForm.message = ''

nameInput.addEventListener('blur', validate)
messageInput.addEventListener('blur', validate)

formFooter.addEventListener('submit', (e) => {
  e.preventDefault()
  
   // verificar si existe un spinner 
   const exists = document.querySelector('.container-spinner')

   if( !exists ) {
    
    const spinnerContainer = spinner()
    spinnerContainer.style.position = 'absolute'
    
    formFooter.appendChild(spinnerContainer)

    setTimeout(() => {
      // quitar sppiner y resetear formulario
      spinnerContainer.remove()

      resetForm(e.target.querySelector('.button__link'), formFooter)
      
      alertMessage(formFooter, 'Mensaje enviado correctamente')

    }, 5000)
   }
})

