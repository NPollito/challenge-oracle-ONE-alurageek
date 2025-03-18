import ProductsController from "../controllers/ProductsController.js"
import productContainer from "../components/productContainer.js"
import deleteNodes from "../helpers/deleteNodes.js"

import {
  buttonAcces,
  sectionBanner,
  sectionProducts,
  sectionLogin,
  sectionAddProducts,
  sectionProductsDetails,
  sectionAdministrator,
  sectionCategory,
} from '../helpers/nodes.js'


sectionProductsDetails.addEventListener('click', (e) => {
    
  if ( e.target.classList.contains('button__link--product') ) {
    
    const productId = e.target.dataset.id
    location.hash = `#product=${productId}`

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
})

async function produtcView() {
  
  buttonAcces.classList.add('inactive')
  sectionBanner.style.display = 'none'
  sectionProducts.style.display = 'none'
  sectionCategory.style.display = 'none'
  sectionLogin.style.display = 'none'
  sectionAdministrator.style.display = 'none'
  sectionAddProducts.style.display = 'none'

  sectionProductsDetails.style.display = 'block'

  const [_, id] = location.hash.split('=')

  // Instanciar producto
  const productsController = new ProductsController()
  const product = await productsController.getProduct(id)
  const products = await productsController.getProducts(product.categoryId, 6)

  // crear html
  deleteNodes(sectionProductsDetails)

  const containerProduct = document.createElement('SECTION')
  containerProduct.classList.add('product')

  const containerImage = document.createElement('PICTURE')
  containerImage.classList.add('product__picture')

  const image = document.createElement('IMG')
  image.setAttribute('src', `${product.image}`)
  image.classList.add('product__image')

  const containerTexts = document.createElement('DIV')
  containerTexts.classList.add('product__texts')
  containerTexts.innerHTML = `
    <h2 class="product__title">${product.title}</h2>
    <p class="product__price">S/. ${product.price}</p>
    <p class="product__details">${product.details}</p>
  `

  const containerProducts = document.createElement('SECTION')
  containerProducts.classList.add('products', 'container')

  const title = document.createElement('H2')
  title.classList.add('products__title')
  title.textContent = 'Productos Similares'

  const cards = document.createElement('DIV')
  cards.classList.add('cards')

  const containerCards = document.createElement('DIV')
  containerCards.classList.add('cards__container')

  cards.appendChild(containerCards)
  
  
  containerProducts.appendChild(title)
  containerProducts.appendChild(cards)

  // products
  products.forEach(product => {
    const { image, title, price, id } = product
    containerCards.appendChild(productContainer(image, title, price, id))
  });

  containerImage.appendChild(image)
  containerProduct.appendChild(containerImage)
  containerProduct.appendChild(containerTexts)

  sectionProductsDetails.appendChild(containerProduct)
  sectionProductsDetails.appendChild(containerProducts)
  
};

export default produtcView;