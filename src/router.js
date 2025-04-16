/* import homeController from './controllers/homeController.js';
import loginController from './controllers/loginController.js';
import productController from './controllers/productController.js';
import categoryController from './controllers/categoryController.js'
import administratorController from './controllers/administratorController.js'

const routes = {
  '/index.html': homeController,
  '/login': loginController,
  '/viewProduct/:id': productController,
  '/category/': categoryController,
  '/administrator': administratorController
}

function router() {
 
  const path = location.pathname

  if (path.startsWith('/viewProduct/')) {
    const productId = path.split('/')[2]
    requestAnimationFrame(() => productController(productId))
    return
  }

  if(path.startsWith('/category/')) {
    const categoryId = path.split('id=')[1]
    categoryController(categoryId)
    return
  }

  if(routes[path]) {
    // routes[path]()
    requestAnimationFrame(() => routes[path]())
  } else {
    console.error('Ruta no encontrada', path)
  }
} */
// export default router;