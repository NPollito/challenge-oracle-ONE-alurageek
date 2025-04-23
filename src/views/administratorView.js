import productContainer from '../components/productContainer.js'
import { verifyRoute, validateStorage } from '../js/protectRoutes.js'

// variables
const buttonAddNewProduct = document.querySelector('.button__link--createProduct')
const sectionAdministrator = document.querySelector('.administrator')

// eventos
buttonAddNewProduct.addEventListener('click', () => location.pathname = './src/pages/formProduct.html')
sectionAdministrator.addEventListener('click', e => {
  if ( e.target.closest('span.card__edit') ) {
    const productId = e.target.dataset.id
    const baseUrl = window.location.origin + "/src/pages/formProduct.html";  
    location.href = `${baseUrl}?edit=${productId}`;
  }
})

function administratorView(products) {

  verifyRoute('administrator.html', validateStorage)
  
  const sectionCards = document.querySelector('.cards')

  // crear html
  const cardsContainer = document.createElement('DIV')
  cardsContainer.classList.add('cards__container')
  
  products.forEach(product => {
    const { image, title, price, id } = product
    cardsContainer.appendChild(productContainer(image, title, price, id, true))
  });
  
  sectionCards.appendChild(cardsContainer)
}

export default administratorView