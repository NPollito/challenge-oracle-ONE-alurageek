/* import CategoryController from '../controllers/CategoryController.js'
import ProductsController from '../controllers/ProductsController.js'
import categoryContainer from '../components/categoryContainer.js'
import productContainer from '../components/productContainer.js'

import { 
  buttonAcces, 
  sectionAdministrator, 
  sectionBanner, 
  sectionLogin, 
  sectionProducts, 
  sectionProductsDetails,
  sectionAddProducts,
  sectionCategory
} from '../helpers/nodes.js'

import deleteNodes from '../helpers/deleteNodes.js'


sectionCategory.addEventListener('click', (e) => {
    
  if ( e.target.classList.contains('button__link--product') ) {
    
    const productId = e.target.dataset.id
    location.hash = `#product=${productId}`

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
})

async function categoryView() {
  
  buttonAcces.classList.add('inactive')
  sectionBanner.style.display = 'none'
  sectionProducts.style.display = 'none'
  sectionProductsDetails.style.display = 'none'
  sectionLogin.style.display = 'none'
  sectionAdministrator.style.display = 'none'
  sectionAddProducts.style.display = 'none'
  
  sectionCategory.style.display = 'block'

  const [_, id] = location.hash.split('id=')
  
  // instanciar modelo
  const categoryController = new CategoryController()
  const categorie = await categoryController.getCategorie(id)
  
  const productsController = new ProductsController()
  const products = await productsController.getProducts(categorie.id)  

  // crear categorias y productos
  deleteNodes(sectionCategory)

  const container = document.createElement('DIV')
  container.classList.add('products__container', 'container')
  container.appendChild(categoryContainer(categorie.name))

  const sectionCards = document.createElement('SECTION')
  sectionCards.classList.add('cards')

  const cardsContainer = document.createElement('DIV')
  cardsContainer.classList.add('cards__container')

  
  // agregar productos
  products.forEach(product => {
    
    const { image, title, price, id } = product
    cardsContainer.appendChild(productContainer(image, title, price, id, false))
  });
    
  sectionCards.appendChild(cardsContainer)
  container.appendChild(sectionCards)
  sectionCategory.appendChild(container)

};

export default categoryView; */