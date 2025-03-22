function spinner() {
    
  const spinnerContainer = document.createElement('DIV')
  spinnerContainer.classList.add('container-spinner')
  const spinner = document.createElement('SPAN')
  spinner.classList.add('loader')
  
  spinnerContainer.appendChild(spinner)

  return spinnerContainer
};

export default spinner;