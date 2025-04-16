import ProductsModel from "../models/ProductsModel.js";
import formProductsView from "../views/formProductsView.js";


async function addProduct(product) {
  
  const productsModel = new ProductsModel()
  
  try {
  
      await productsModel.postProduct(product)
   
  } catch(error) {
    console.error("Error al guardar el producto:", error);
  }
  
}

function addNewProductController() {
  const hash = location.hash

  if( hash === '#addNewProduct' ) {
    formProductsView(null, addProduct)
  }
}

export default addNewProductController;