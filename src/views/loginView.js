import { validate, resetForm, dataForm } from "../js/form.js"
import deleteProperties from "../helpers/deletePropertiesObj.js"
import alertMessage from "../components/alertMessage.js"
import spinner from "../components/spinner.js"

import { 
  header,
  buttonAcces,
  footer,
  sectionAddProducts,
  sectionAdministrator,
  sectionBanner,
  sectionCategory,
  sectionLogin,
  sectionProducts,
  sectionProductsDetails
} from "../helpers/nodes.js"

// variables
const emailInpunt = document.getElementById('emailUser')
const passwordInput = document.getElementById('passUser')
const formLogin = document.querySelector('.form__login')

function loginView() {

  // mostrar y ocultar elementos 
  header.querySelector('.search').style.display = 'none'
  header.querySelector('.input--config').style.display = 'none'
  buttonAcces.classList.add('inactive')
  sectionBanner.style.display = 'none'
  sectionProducts.style.display = 'none'
  sectionCategory.style.display = 'none'
  sectionProductsDetails.style.display = 'none'
  sectionAdministrator.style.display = 'none'
  sectionAddProducts.style.display = 'none'
  footer.style.display ='none'

  sectionLogin.style.display = 'flex'

  // eliminar y agregar propiedades al obj
  deleteProperties(dataForm)
  dataForm.email = ''
  dataForm.password = ''

  // eventos
  emailInpunt.addEventListener('input', validate)
  passwordInput.addEventListener('input', validate)

  formLogin.addEventListener('submit', validateForm)

  async function validateForm(e) {
    e.preventDefault();
    e.stopPropagation();

    // verificar si existe un spinner 
    const exists = document.querySelector('.container-spinner') 

    if( !exists ) {
      
      const spinnerContainer = spinner()
      formLogin.appendChild(spinnerContainer)
    
      setTimeout(() => {
        // quitar sppiner y resetear formulario
        spinnerContainer.remove()

        resetForm(e.target.querySelector('.button__link'), formLogin)
        
        alertMessage(formLogin, 'Redirigiendo...')

        // redirigir a la pagina de administrador
        setTimeout(() => {
          location.hash = '#administrator'
        }, 3000);
        
      }, 5000)
    }
  }
}

export default loginView;