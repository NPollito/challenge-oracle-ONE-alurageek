import ProductsController from "../controllers/ProductsController.js"
import productContainer from "../components/productContainer.js"
import deleteNodes from '../helpers/deleteNodes.js'
import {
  header,
  buttonAcces,
  sectionBanner,
  sectionProducts,
  sectionCategory,
  sectionLogin,
  sectionAddProducts,
  sectionAdministrator,
  footer

} from "../helpers/nodes.js"

// variables
const containerAdministrator = document.querySelector('.administrator__products')

// eventos
containerAdministrator.addEventListener('click', (e) => {
  
  // editar producto
  if ( e.target.classList.contains('card__edit')  ) {
    console.log('Producto: ' + e.target.dataset.id);
    return
  }
  
  // eliminar producto
  if ( e.target.classList.contains('card__delete')  ) {
    console.log('Eliminado: ' + e.target.dataset.id);
    return
  }

  // agregar un nuvo producto
  if ( e.target.classList.contains('button__link--createProduct') ) {
    location.hash = '#addNewProduct'
    return
  }
})

async function administratorView() {
  
  // mostrar y ocultar elementos
  header.querySelector('.search').style.display = 'none'
  header.querySelector('.input--config').style.display = 'none'
  buttonAcces.classList.add('inactive')
  sectionBanner.style.display = 'none'
  sectionProducts.style.display = 'none'
  sectionCategory.style.display = 'none'
  sectionLogin.style.display = 'none'
  sectionAddProducts.style.display = 'none'

  sectionAdministrator.style.display = 'block'
  footer.style.display = 'block'

  // instaciar modelo
  const productsController = new ProductsController()
  const products = await productsController.getProductsTotal()

  // crear html
  deleteNodes(containerAdministrator) // limpiar html

  const sectionTexts = document.createElement('SECTION')
  sectionTexts.classList.add('administrator__texts')

  const title = document.createElement('H2')
  title.classList.add('administrator__title')
  title.textContent = 'Todos los Productos'

  const button = document.createElement('BUTTON')
  button.classList.add('button__link', 'button__link--createProduct')
  button.textContent = 'Agregar Producto'
  
  sectionTexts.appendChild(title)
  sectionTexts.appendChild(button)
  containerAdministrator.appendChild(sectionTexts)

  const sectionCards = document.createElement('SECTION')
  sectionCards.classList.add('cards')
  
  const cardsContainer = document.createElement('DIV')
  cardsContainer.classList.add('cards__container')
  
  products.forEach(product => {
    const { image, title, price, id } = product
    cardsContainer.appendChild(productContainer(image, title, price, id, true))
  });
  
  sectionCards.appendChild(cardsContainer)
  containerAdministrator.appendChild(sectionCards)
}

export default administratorView