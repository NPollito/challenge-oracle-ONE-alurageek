import CategoriesModel from '../models/CategoriesModel.js'
import ProductsModel from '../models/ProductsModel.js'
import categoryView from '../views/categoryView.js'

(async function() {

  const idCategory = location.search.split('id=')[1]

  try {
  
    // instaciar modelos
    const categoriesModel = new CategoriesModel()
    const category = await categoriesModel.getCategorie(idCategory)
  
    const productsModel = new ProductsModel()
    const products = await productsModel.getCategorieProducts(category.id, undefined)
    
    categoryView(category, products)
  
  } catch(error) {
    console.log('Category no se puede cargar ', error);
    alert('La categoria y los productos no se puede cargar, intentalo más tarde')
  }

})()