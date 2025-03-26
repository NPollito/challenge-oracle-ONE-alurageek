
function alertMessage(container, message, typeMessage = 'success') {

  if( document.querySelector('alert') ){
    return Promise.resolve()  // Resolver inmediatamente si ya existe una alerta
  }

  return new Promise(resolve => {

    const containerAlert = document.createElement('DIV')
    containerAlert.classList.add('alert')
    
    containerAlert.style.background = typeMessage === 'error' ? 'red' : 'green'
    containerAlert.textContent = message

    container.appendChild(containerAlert)

    // Eliminar la alerta después de 3 segundos y resolver la promesa
    setTimeout(() => {
      containerAlert.remove();
      resolve();
    }, 3000);

  }) 
};

export default alertMessage;
