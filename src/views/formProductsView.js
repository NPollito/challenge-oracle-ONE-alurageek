import { showSpinner, hideSpinner } from '../components/spinner.js'
import alertMessage from '../components/alertMessage.js'

import { dataForm, validateInput, resetForm } from "../js/form.js";
import { verifyRoute, validateStorage } from '../js/protectRoutes.js'

// variables
const buttonAdministrator = document.querySelector('.button__link--administrator')

const categoryInput = document.getElementById('category')
const nameInput = document.getElementById('nom-product')
const priceInput = document.getElementById('price')
const descriptionInput = document.getElementById('description')
const formNewProduct = document.querySelector('.form__newProduct')
const titleForm = formNewProduct.querySelector('h3')
const buttonSubmit = formNewProduct.querySelector('input[type="submit"]')

const dragDropContainer = document.querySelector('.drag-drop')
const dragDropTitle = document.querySelector('.drag-drop__title')
const inputFile = dragDropContainer.querySelector('input[type="file"]')

// eventos
buttonAdministrator.addEventListener('click', () => {
  const baseUrl = window.location.origin;  
  location.href = `${baseUrl}/src/pages/administrator.html`;
})
categoryInput.addEventListener('input', validateInput)
nameInput.addEventListener('input', validateInput)
priceInput.addEventListener('input', validateInput)
descriptionInput.addEventListener('input', validateInput)

// eventos dragdrop
dragDropContainer.addEventListener('click', () => {
  inputFile.click()
})

dragDropContainer.addEventListener('dragover', (e) => {
  e.preventDefault()
  dragDropContainer.classList.add('active')
  dragDropTitle.textContent = 'Suelta para subir la imagen'
})

dragDropContainer.addEventListener('dragleave', (e) => {
  e.preventDefault()
  dragDropContainer.classList.remove('active')
})

dragDropContainer.addEventListener('drop', (e) => {
  e.preventDefault()

  let file = e.dataTransfer.files[0]
  processFile(file)

  dragDropContainer.style.backgroundColor = 'transparent'
})

inputFile.addEventListener('change', (e) => {
  dragDropContainer.classList.add('active')
  dragDropContainer.style.backgroundColor = 'transparent'
  
  let file = e.target.files[0]

  processFile(file)
})

// funciones
function processFile(file) {
  const docType = file.type
  const validateExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/webP', 'image/webp']

  if (validateExtensions.includes(docType)) {

    // Agregar imagen
    const fileReader = new FileReader()

    fileReader.addEventListener('load', () => {
      const fileUrl = fileReader.result

      dataForm.image = fileUrl

      // crear img
      dragDropContainer.querySelector('h3').style.display = 'none'
      
      if ( dragDropContainer.querySelector('img') ) {
        dragDropContainer.querySelector('img').src = fileUrl
        return
      }

      const img = document.createElement('IMG')
      img.classList.add('drag-drop__image')
      img.setAttribute('src', fileUrl)
      img.setAttribute('alt', file.name)

      dragDropContainer.appendChild(img)
    })

    fileReader.readAsDataURL(file)

  } else {

    alert('No es un archivo valido')
    dragDropContainer.classList.remove('active')
    dragDropTitle.textContent = 'Haz clic o arrastra una imagen a esta área para subirlo'
  }
}

function showProductEditing(product) {
  const { id, image, title, price, details, categoryId } = product

  // crear imagen
  if ( dragDropContainer.querySelector('img') ) {
    dragDropContainer.querySelector('img').remove()
  }

  dragDropContainer.querySelector('h3').style.display = 'none'
  dragDropContainer.style.borderColor = "var(--color-primary"

  const img = document.createElement('IMG')
  img.classList.add('drag-drop__image')
  img.setAttribute('src', image)
  dragDropContainer.appendChild(img)

  // agregar datos a los inputs
  categoryInput.value = categoryId
  nameInput.value = title             
  priceInput.value = price
  descriptionInput.value = details

  // agregar datos al obj
  dataForm.id = id,
  dataForm.image = image
  dataForm.title = title,
  dataForm.price = price,
  dataForm.details = details,
  dataForm.categoryId = categoryId
}

async function formProductsView(product = null, onSubmit) {

  verifyRoute('formProduct.html', validateStorage)

  dataForm.image = ''
  dataForm.title = ''
  dataForm.price = ''
  dataForm.details = ''
  dataForm.categoryId = ''

  if ( product ) {
    buttonSubmit.value = 'Editar Producto'
    titleForm.textContent = 'Editando producto'
    showProductEditing(product)
    
  } else {
    buttonSubmit.value = 'Agregar Producto'
    titleForm.textContent = 'Agregar nuevo producto'
  }

  formNewProduct.addEventListener('submit', handleSubmit)
  
  async function handleSubmit(e) {
    e.preventDefault()

    buttonSubmit.disabled = true

    showSpinner(formNewProduct) //mostrar spinner

    if (product) {

      // editar product
      await onSubmit(dataForm, true)
      location.href = '/src/pages/administrator.html';
  
    } else {
          
      dataForm.id = Date.now()
      
      // crear nuevo producto
      await onSubmit(dataForm, false)
    }

    // resetear
    hideSpinner()
    resetForm(buttonSubmit, formNewProduct)
    
    await alertMessage(formNewProduct, product ? 'Producto editado correctamente' : 'Producto agregado correctamente')
  }
};

export default formProductsView;