export let dataForm = {}

export function validateInput(e) {

  // obtener el bottom submit
  const buttonSubmit = e.target.closest('form').querySelector('.button__link');

  if( e.target.value.trim() === '' )  {
    showAlert(e.target)
    dataForm[e.target.name] = ''
    checkDataForm(buttonSubmit)
    return
  }

  if( e.target.id === 'emailUser' && !validateEmail(e.target.value) ) {
    e.target.style.borderBottomColor = 'red'
    dataForm[e.target.name] = ''
    return
  }

  dataForm[e.target.name] = e.target.value

  showAlert(e.target)

  checkDataForm(buttonSubmit) 

}

function checkDataForm(button) {

  // cambiar estilos al botton submit
  if( Object.values(dataForm).includes('') || Object.values(dataForm).length === 0 ) {
    button.style.opacity = '0.5'
    button.disabled = true
    return
  }
  
  button.style.opacity = '1'
  button.disabled = false
}

function validateEmail(email) {
  const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
  const result = regex.test(email)
  return result
}

function showAlert(input) {

  if( input.value === '' ) {
    
    input.style.borderBottomColor = 'red'
    return
  }

  input.style.borderBottomColor = 'var(--color-placeholder)'
}

export function resetForm(buttonSubmit, container) {
  buttonSubmit.style.opacity = '0.5'
  container.reset()
}