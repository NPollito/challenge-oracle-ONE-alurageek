import { showSpinner, hideSpinner } from '../components/spinner.js'
import alertMessage from '../components/alertMessage.js'
import { dataForm, validateInput, resetForm } from '../js/form.js'

// variables
const emailInput = document.getElementById('emailUser')
const passwordInput = document.getElementById('passUser')
const formLogin = document.querySelector('.form__login')
const buttonSubmit = formLogin.querySelector('input[type="submit"]')

// eventos
emailInput.addEventListener('input', validateInput)
passwordInput.addEventListener('input', validateInput)

export function loginView(onSubmit) {
    
  dataForm.email = ''
  dataForm.password = ''

  // evitar que múltiples listeners se añadan al mismo formulario accidentalmente
  /* if(!formLogin.hasAttribute('data-listener-added')) {
    formLogin.setAttribute('data-listener-added', 'true')
    formLogin.addEventListener('submit', sendEmail)
  } */

  formLogin.addEventListener('submit', sendEmail)
  async function sendEmail(e) {
    e.preventDefault()

    buttonSubmit.disabled = true
    
    showSpinner(formLogin)  //spinner

    await onSubmit(dataForm)
    
    hideSpinner() //quitar spinner
    resetForm(buttonSubmit, formLogin)
    
    await alertMessage(formLogin, 'Redirigiendo...')
  
    location.pathname = './src/pages/administrator.html'
  }
};

export default loginView;