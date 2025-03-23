import CategoryController from "../controllers/CategoryController.js"
import ProductsController from "../controllers/ProductsController.js"
import categoryContainer from "../components/categoryContainer.js"
import productContainer from "../components/productContainer.js"
import {
  header,
  buttonAcces,
  buttonConsoles,
  sectionProductsDetails,
  sectionLogin,
  sectionAdministrator,
  sectionAddProducts,
  sectionBanner,
  sectionProducts,
  sectionCategory,
  footer
} from "../helpers/nodes.js"

import deleteNodes from "../helpers/deleteNodes.js"

buttonAcces.addEventListener('click', () => {
  location.hash = '#login'
})

buttonConsoles.addEventListener('click', () => {
  
  location.hash = '#category=consolas&id=1'
})

async function homeView() {

  // mostrar y ocultar elementos  
  sectionProductsDetails.style.display = "none"
  sectionCategory.style.display = "none"
  sectionLogin.style.display = "none"
  sectionAdministrator.style.display = "none"
  sectionAddProducts.style.display = "none"

  // header.querySelector('.search').style.display = 'block'
  screen.availWidth >= 700
    ? header.querySelector('.search').style.display = 'none'
    : header.querySelector('.search').style.display = 'block'
  header.querySelector('.input--config').style.display = 'flex'
  buttonAcces.classList.remove('inactive')
  sectionBanner.style.display = "block"
  sectionProducts.style.display = 'block'
  footer.style.display = 'block'
  
  // instacias de los modelos
  const categoryController = new CategoryController()
  const categories = await categoryController.getCategories()
  
  const productsController = new ProductsController()
  
  // crear categorias y productos
  deleteNodes(sectionProducts)

  for( const category of categories ) {

    const container = document.createElement('DIV')
    container.classList.add('products__container', 'container')
    container.appendChild(categoryContainer(category.name, true, category.id))

    const sectionCards = document.createElement('SECTION')
    sectionCards.classList.add('cards')

    const cardsContainer = document.createElement('DIV')
    cardsContainer.classList.add('cards__container')

    sectionCards.appendChild(cardsContainer)
    
    // agregar productos
    const products = await productsController.getProducts(category.id, 6)
    products.forEach(product => {

      const { image, title, price, id } = product
      cardsContainer.appendChild(productContainer(image, title, price, id, false))
    });
    
    container.appendChild(sectionCards)
    sectionProducts.appendChild(container)
  }
};

export default homeView;