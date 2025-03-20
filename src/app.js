import router from "./router.js"
import ProductsController from "./controllers/ProductsController.js"

import deleteNodes from './helpers/deleteNodes.js'
import filterProducts from './helpers/filterProduct.js'

import {
  inputProducts,
  inputProductsDesktop,
  searchResults,
  searchResultsDesktop,
  buttonBack,
  deleteSearch
} from './helpers/nodes.js'

// variables
let screenSize;

// eventos
document.addEventListener('DOMContentLoaded', () => {
  
  window.addEventListener('hashchange', router)
  router()
  
  inputProducts.addEventListener('input', searchProducts )
  inputProductsDesktop.addEventListener('input', searchProducts )
})

buttonBack.addEventListener('click', deleteSearchProducts)
deleteSearch.addEventListener('click', deleteSearchProducts)


// funciones
async function searchProducts(e) {

  screenSize = screen.availWidth
  if ( screenSize >= 700 ) searchResultsDesktop.style.display = 'block'
  
  const productsController = new ProductsController()
  const products = await productsController.getProductsTotal()
  
  if ( e.target.value ) {
    
    deleteSearch.style.display = 'block'
    searchResultsDesktop.style.display = 'block'
    
    const filter = filterProducts(products, e.target.value)
    productsFilter(filter)  

  } else {
    deleteSearchProducts()
  }
}

function productsFilter(products) {
  
  screenSize >= 700 ? deleteNodes(searchResultsDesktop) : deleteNodes(searchResults)

  if ( products.length === 0 ) {

    const alert = document.createElement('H3')
    alert.classList.add('search__alert')
    alert.textContent = 'No hay resultados'

    screenSize >= 700 ? searchResultsDesktop.appendChild(alert) : searchResults.appendChild(alert)

    return
  }

  const containerResult = document.createElement('DIV')
  containerResult.classList.add('search__products')

  products.forEach(product =>  {
    
    const productContainer = document.createElement('div')
    productContainer.classList.add('search__product')
    productContainer.dataset.id = product.id
    productContainer.onclick = () => showProduct(product.id)

    const imageProduct = document.createElement('IMG')
    imageProduct.classList.add('search__image')
    imageProduct.setAttribute('src', product.image)

    const titleProduct = document.createElement('P')
    titleProduct.classList.add('search__title')
    titleProduct.textContent = product.title

    productContainer.appendChild(imageProduct)
    productContainer.appendChild(titleProduct)
    
    containerResult.appendChild(productContainer)
  });
  
  screenSize >= 700
  ? searchResultsDesktop.appendChild(containerResult)
  : searchResults.appendChild(containerResult)
}

function showProduct(id) {

  const checkbox = document.querySelector('#search__checked')
  if ( checkbox.checked ) checkbox.checked = false
  deleteSearchProducts()
  
  location.hash = `#product=${id}`
}

function deleteSearchProducts() {
  // mobil
  inputProducts.value = ''
  deleteSearch.style.display = 'none'
  deleteNodes(searchResults)
  
  // desktop
  inputProductsDesktop.value = ''
  searchResultsDesktop.style.display = 'none'
  deleteNodes(searchResultsDesktop)
}