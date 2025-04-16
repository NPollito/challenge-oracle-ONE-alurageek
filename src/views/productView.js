import productContainer from "../components/productContainer.js"
import deleteNodes from "../helpers/deleteNodes.js"
import handleProductClick from "../helpers/handleProductClick.js"

// variables
const sectionProductsDetails = document.querySelector('.product__details')

// eventos
sectionProductsDetails.removeEventListener('click', e => handleProductClick(e))
sectionProductsDetails.addEventListener('click', e => handleProductClick(e))

function produtcView(product, products) {
 
  // crear categoria del producto
  deleteNodes(sectionProductsDetails) //eliminar nodes

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
    containerCards.appendChild(productContainer(image, title, price, id, false))
  });

  containerImage.appendChild(image)
  containerProduct.appendChild(containerImage)
  containerProduct.appendChild(containerTexts)

  sectionProductsDetails.appendChild(containerProduct)
  sectionProductsDetails.appendChild(containerProducts)
};

export default produtcView;