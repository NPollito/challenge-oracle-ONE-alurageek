import CategoriesModel from '../models/CategoriesModel.js'
import ProductsModel from '../models/ProductsModel.js'
import homeView from '../views/homeView.js'

(async function() {
  
  try {
    const categoriesModel = new CategoriesModel()
    const categories = await categoriesModel.getCategories()
  
    const productsModel = new ProductsModel()
    const categoriesAndProducts = []
  
    for ( const category of  categories ) {
      const products = await productsModel.getCategorieProducts(category.id, 6)
      categoriesAndProducts.push({category, products})
    }
  
    homeView(categoriesAndProducts)
  
  } catch(error) {
    console.error('Error al cargar los producto ', error)
    alert('Intentalo más tarde, actualizando productos')
  }

})()