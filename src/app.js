import searchProducts from "./js/searchProducts.js"
import { validateInput, dataForm, resetForm } from "./js/form.js"
import alertMessage from "./components/alertMessage.js"
import { logout } from "./js/protectRoutes.js"

// variables
const inputSearch = document.querySelector('.input__search')
const nameInput = document.getElementById('nameUser')
const messageInput = document.getElementById('messageUser')
const formFooter = document.querySelector('.form--config-footer')
const buttonSubmitFooter = formFooter.querySelector('input[type="submit"]')

document.addEventListener('DOMContentLoaded', () => {

  // quitar inicio de sesión
  logout()
  
  // buscar productos
  inputSearch.addEventListener('input', searchProducts)
  
  // enviar mensage
  addMessage()
})

function addMessage() {
  
  dataForm.name = ''
  dataForm.message = ''
  
  nameInput.addEventListener('input', validateInput)
  messageInput.addEventListener('input', validateInput)

  formFooter.addEventListener('submit', async (e) => {
    e.preventDefault()

    buttonSubmitFooter.disabled = true

    resetForm(buttonSubmitFooter, formFooter)
    
    await alertMessage(formFooter, "El mensaje se envio correctamente")
  })
}

