import ProductsController from "../controllers/ProductsController.js"
import deleletePropertiesObjs from "../helpers/deletePropertiesObj.js"
import { dataForm, validate, resetForm, editMode } from "../js/form.js"
import alertMessage from '../components/alertMessage.js'
import spinner from '../components/spinner.js'

import {
  buttonAcces,
  header,
  sectionBanner,
  sectionProducts,
  sectionCategory,
  sectionLogin,
  sectionAdministrator,
  sectionAddProducts,
} from "../helpers/nodes.js"

// variables
const buttonAdministrator = document.querySelector('.button--config')

const categoryInput = document.getElementById('category')
const nameInput = document.getElementById('nom-product')
const priceInput = document.getElementById('price')
const descriptionInput = document.getElementById('description')
const formNewProduct = document.querySelector('.form__newProduct')

const dragDropContainer = document.querySelector('.drag-drop')
const dragDropTitle = document.querySelector('.drag-drop__title')
const inputFile = dragDropContainer.querySelector('input[type="file"]')

// cambiar nombres
const titleForm = formNewProduct.querySelector('.form__title')
const nameSubmit = formNewProduct.querySelector('input[type="submit"]')

// eventos
buttonAdministrator.addEventListener('click', (e) => {
  if ( e.target.classList.contains('button__link--administrator') ) {
    location.hash = '#administrator'
  }
})

// drag and drop
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

// validar inputs
categoryInput.addEventListener('input', validate)
nameInput.addEventListener('input', validate)
priceInput.addEventListener('input', validate)
descriptionInput.addEventListener('input', validate)

formNewProduct.addEventListener('submit', sendForm)

async function sendForm(e) {
  e.preventDefault();

  // cargar spinner
  const spinnerContainer = spinner()
  formNewProduct.appendChild(spinnerContainer)
  
  const productsController = new ProductsController()

  if ( editMode.edit ) {
    
    // edit product    
    await productsController.editProduct(dataForm)
    
  } else {
    
    dataForm.id = Date.now() 
    
    // agregar producto
    await productsController.postProduct(dataForm)
  }
  
  // quitar sppiner, eliminar image y reset formulario
  spinnerContainer.remove()
  dragDropContainer.querySelector('h3').style.display = 'block'
  dragDropContainer.classList.remove('active')
  dragDropContainer.querySelector('img').remove()
  
  resetForm(e.target.querySelector('.button__link'), formNewProduct)

  editMode.edit
  ? await alertMessage(formNewProduct, 'Editado Correctamente')
  : await alertMessage(formNewProduct, 'Producto agregado correctamente')
  
  editMode.edit = false
  location.hash = '#administrator'
}

// edit product
function showProductEditing(product) {
  const { id, image, title, price, details, categoryId } = product

  // crear imagen
  dragDropContainer.querySelector('h3').style.display = 'none'
  const img = document.createElement('IMG')
  img.classList.add('drag-drop__image')
  img.setAttribute('src', image)

  dragDropContainer.appendChild(img)


  categoryInput.value = categoryId
  nameInput.value = title             
  priceInput.value = price
  descriptionInput.value = details
}

async function addProductView() {

  // configurar boton administrador
  buttonAcces.classList.remove('inactive', 'button__link--access')
  buttonAcces.classList.add('button__link--administrator')
  buttonAcces.textContent = 'Menú Administrador'

  // mostrar y ocultar elementos
  header.querySelector('.search').style.display = 'none'
  header.querySelector('.input--config').style.display = 'none'
  sectionBanner.style.display = 'none'
  sectionProducts.style.display = 'none'
  sectionCategory.style.display = 'none'
  sectionLogin.style.display = 'none'
  sectionAdministrator.style.display = 'none'
  sectionAddProducts.style.display = ''

  // eliminar y agregar propiedades al obj
  deleletePropertiesObjs(dataForm)
  dataForm.image = ''
  dataForm.title = ''
  dataForm.price = ''
  dataForm.details = ''
  dataForm.categoryId = ''

  if ( editMode.edit ) {

    const productsController = new ProductsController()
    const [_, idProduct] = location.hash.split('=')
    const product = await productsController.getProduct(idProduct)
    const { id, image, title, price, details, categoryId } = product

    dataForm.id = id
    dataForm.image = image
    dataForm.title = title
    dataForm.price = price
    dataForm.details = details
    dataForm.categoryId = categoryId
    
    showProductEditing(product)

    editMode.edit
      ? titleForm.textContent = 'Editar Producto' 
      : titleForm.textContent = 'Agregar nuevo producto'
    editMode.edit 
      ? nameSubmit.value = 'Editar Producto' 
      : nameSubmit.value = 'Agregar Producto'

  }
};

export default addProductView;
