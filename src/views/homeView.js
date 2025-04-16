import categoryContainer from '../components/categoryContainer.js'
import productContainer from '../components/productContainer.js'
import handleProductClick from '../helpers/handleProductClick.js'
import deleteNodes from '../helpers/deleteNodes.js'

// variables
const buttonAccess = document.querySelector('.button__link')
const buttonConsoles = document.querySelector('.button__link--consoles')
const sectionProducts = document.querySelector('.products')

// eventos
buttonAccess.addEventListener('click', () => location.href = './src/pages/login.html')
buttonConsoles.addEventListener('click', () => location.href = `./src/pages/viewCategory.html?name=consolas?id=1`)
sectionProducts.addEventListener('click', e => handleProductClick(e))

async function homeView(categoriesAndProducts) {
  
  // crear categories y productos
  deleteNodes(sectionProducts)

  for (const {category, products} of categoriesAndProducts) {

    const container = document.createElement('DIV')
    container.classList.add('products__container', 'container')

    container.appendChild(categoryContainer(category.name, true, category.id))

    // products
    const sectionCards = document.createElement('SECTION')
    sectionCards.classList.add('cards')

    const cardsContainer = document.createElement('DIV')
    cardsContainer.classList.add('cards__container')
    
    products.forEach(product => {
      const { id, image, title, price } = product
      cardsContainer.appendChild(productContainer(image, title, price, id, false))
    })

    sectionCards.appendChild(cardsContainer)
    container.appendChild(sectionCards)

    sectionProducts.appendChild(container)
  }
};

export default homeView;