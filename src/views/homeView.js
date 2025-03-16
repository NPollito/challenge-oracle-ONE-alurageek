import CategoryController from "../controllers/CategoryController.js"
import ProductsController from "../controllers/ProductsController.js"
import categoryContainer from "../components/categoryContainer.js"
import productContainer from "../components/productContainer.js"
import { 
  buttonAcces,
  sectionLogin,
  sectionADdProducts,
  sectionProducts,
} from "../helpers/nodes.js"


buttonAcces.addEventListener('click', () => {
  location.hash = '#login'
})

async function homeView() {

  sectionLogin.style.display = 'none'
  sectionADdProducts.style.display = 'none'
  
  // instacias de los modelos
  const categoryController = new CategoryController()
  const categories = await categoryController.getCategories()
  
  const productsController = new ProductsController()
  
  // Productos y Categorias
  const containerProducts = document.querySelector('.products')
  
  // crear categories

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
    const products = await productsController.getProducts(category.id)
    products.forEach(product => {

      const { image, title, price, id } = product
      cardsContainer.appendChild(productContainer(image, title, price, id))
    });
    
    container.appendChild(sectionCards)
    containerProducts.appendChild(container)
  }

  return containerProducts
};

export default homeView;