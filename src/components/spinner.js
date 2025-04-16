export function showSpinner(container) {
    
  const spinnerContainer = document.createElement('DIV')
  spinnerContainer.classList.add('container-spinner')
  const spinner = document.createElement('SPAN')
  spinner.classList.add('loader')
  
  spinnerContainer.appendChild(spinner)

  container.appendChild(spinnerContainer)
};

export function hideSpinner() {
  const spinner = document.querySelector('.container-spinner')
  if ( spinner ) {
    spinner.remove()
  }
}