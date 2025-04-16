import ProductsModel from '../models/ProductsModel.js'
import deleteNodes from '../helpers/deleteNodes.js'

const resultsContainer = document.querySelector('.search__result')
const inputClean = document.querySelector('.input__closed')
const buttonBack = document.querySelector('.search__back')

// funciones
async function searchProducts(e) {
  
  // instanciar product
  const productsModel = new ProductsModel()
  const productsTotal = await productsModel.getProducts()
  
  if ( e.target.value ) {

    inputClean.style.display = 'block'
    inputClean.onclick = () => deleteSearchProducts()
    buttonBack.onclick = () => deleteSearchProducts()
    
    const products = filteredProducts(productsTotal, e.target.value)
    productsHtml(products)

  } else {
    deleteSearchProducts()
  }
}

function filteredProducts(products = [], searchProduct) {
  const resultProduct = products.filter(product => {
    return product.title.includes(searchProduct)
  })

  return resultProduct
};

function productsHtml(products) {

  deleteNodes(resultsContainer)

  if ( products.length === 0 ) {

    const alert = document.createElement('H3')
    alert.classList.add('search__alert')
    alert.textContent = 'No hay resultados'

    resultsContainer.appendChild(alert)
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
  
  resultsContainer.appendChild(containerResult)
}

function showProduct(id) {

  const checkbox = document.querySelector('#search__checked')
  if ( checkbox.checked ) checkbox.checked = false
  document.body.classList.remove('no-scroll')
  deleteSearchProducts()
  
  const baseUrl = window.location.origin + "/src/pages/viewProduct.html";  
  location.href = `${baseUrl}?id=${id}`;
}

function deleteSearchProducts() {
  document.querySelector('.input__search').value = ''
  inputClean.style.display = 'none'

  deleteNodes(resultsContainer)
}

export default searchProducts