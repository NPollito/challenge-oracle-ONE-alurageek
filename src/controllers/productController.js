import ProductsModel from '../models/ProductsModel.js'
import produtcView from '../views/productView.js'

(async function() {

  const productId = location.search.split('=')[1]

  try {
    
    const productsController = new ProductsModel()
    const product = await productsController.getProduct(productId)
    const products = await productsController.getCategorieProducts(product.categoryId, 6)
    
    produtcView(product, products)
  
  } catch(error) {
    console.error('Producto ', error)
    alert('El producto no se pudo cargar')
    alert('Error en el servidor, intentalo más tarde')
  }

})()