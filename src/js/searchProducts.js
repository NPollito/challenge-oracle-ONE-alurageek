import ProductsController from "../controllers/ProductsController.js"
import filterProduct from "../helpers/filterProduct.js";
import deleteNodes from "../helpers/deleteNodes.js";
import { 
  inputProducts, 
  inputProductsDesktop, 
  searchResultsDesktop,
  searchResults, 
  buttonBack,
  deleteSearch
} from '../helpers/nodes.js'

let screenSize;

// eventos
buttonBack.addEventListener('click', deleteSearchProducts)
deleteSearch.addEventListener('click', deleteSearchProducts)

// funciones
async function searchProducts(e) {

  // activar la busqueda en desktop
  screenSize = screen.availWidth
  if ( screenSize >= 700 ) searchResultsDesktop.style.display = 'block'
  
  // instanciar product
  const productsController = new ProductsController()
  const products = await productsController.getProductsTotal()
  
  if ( e.target.value ) {
    
    deleteSearch.style.display = 'block'
    searchResultsDesktop.style.display = 'block'
    
    const filter = filterProduct(products, e.target.value)
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

export default searchProducts