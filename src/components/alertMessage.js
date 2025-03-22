
function alertMessage(container, message, typeMessage) {

  const exists = document.querySelector('.alert')

  if( !exists ) {

    const containerAlert = document.createElement('DIV')
    containerAlert.classList.add('alert')
    
    if ( typeMessage === 'error' ) {
  
      containerAlert.style.background = 'red'
    } else {    
  
      containerAlert.style.background = 'green'
    }
  
    containerAlert.textContent = message
  
    // agregar elemento
    container.appendChild(containerAlert)
  
    setTimeout(() => {
      containerAlert.remove()
    }, 3000);

  }
};

export default alertMessage;