import ProductsModel from "../models/ProductsModel.js";
import formProductsView from "../views/formProductsView.js";

(async function() {
  
  const productsModel = new ProductsModel()

  try {
    
    if ( location.search === "" ) {
      formProductsView(null, validate)  // agregar producto
    } else {
  
      const productId = location.search.split('=')[1]
      const product = await productsModel.getProduct(productId)
      
      formProductsView(product, validate) // editar producto
    }

  } catch (error) {
    console.error(error)
  }  

  async function validate(product, editProduct) {

    try {
      
      if (editProduct) {
        
        await productsModel.putProduct(product)
  
      } else {
        
        await productsModel.postProduct(product)
      }
      
    } catch (error) {
      alert('Error en el servidor, intentalo más tarde')
    }
  }

})()