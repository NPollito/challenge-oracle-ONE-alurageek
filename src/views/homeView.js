import CategoryController from "../controllers/CategoryController.js"
import ProductsController from "../controllers/ProductsController.js"
import categoryContainer from "../components/categoryContainer.js"
import productContainer from "../components/productContainer.js"
import { 
  buttonAcces,
  sectionProductsDetails,
  sectionLogin,
  sectionAdministrator,
  sectionAddProducts,
  sectionBanner,
  sectionProducts
} from "../helpers/nodes.js"

import deleteNodes from "../helpers/deleteNodes.js"

buttonAcces.addEventListener('click', () => {
  location.hash = '#login'
})

async function homeView() {

  sectionProductsDetails.style.display = "none"
  sectionLogin.style.display = "none"
  sectionAdministrator.style.display = "none"
  sectionAddProducts.style.display = "none"

  buttonAcces.classList.remove('inactive')
  sectionBanner.style.display = "block"
  sectionProducts.style.display = 'block'
  
  // instacias de los modelos
  const categoryController = new CategoryController()
  const categories = await categoryController.getCategories()
  
  const productsController = new ProductsController()
  
  // crear categorias y productos
  deleteNodes(sectionProducts)

  for( const category of categories ) {

    const container = document.createElement('DIV')
    container.classList.add('products__container', 'container')
    container.appendChild(categoryContainer(category.name, true))

    const sectionCards = document.createElement('SECTION')
    sectionCards.classList.add('cards')

    const cardsContainer = document.createElement('DIV')
    cardsContainer.classList.add('cards__container')

    sectionCards.appendChild(cardsContainer)
    
    // agregar productos
    const products = await productsController.getProducts(category.id, 6)
    products.forEach(product => {

      const { image, title, price, id } = product
      cardsContainer.appendChild(productContainer(image, title, price, id))
    });
    
    container.appendChild(sectionCards)
    sectionProducts.appendChild(container)
  }
};

export default homeView;