import ProductsModel from '../models/ProductsModel.js'
import administratorView from '../views/administratorView.js'

(async function() {

  const sectionAdministrator = document.querySelector('.administrator')
  const productsModel = new ProductsModel()

  try {

    const products = await productsModel.getProducts()
    administratorView(products)

  } catch (error) {
    console.error('Error al obtener los productos:', error);
    alert('Los productos no se pudieron cargar');
    alert('Error en el servidor, intentalo más tarde');
  }

  // evento
  sectionAdministrator.addEventListener('click', deleteProduct)

  async function deleteProduct(e) {
    if ( e.target.closest('span.card__delete') ) {
      e.preventDefault()
  
      const productoId = e.target.dataset.id
  
      try {
        await productsModel.deleteProduct(productoId)
        e.target.closest('.card').remove()
        alert('Producto eliminado correctamente')
  
      } catch (error) {
  
        console.error('Error al eliminar el producto:', error);
        alert('Hubo un error al eliminar el producto. Intentalo más tarde.');
      }
    }
  }

})()

