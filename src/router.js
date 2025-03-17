import loginView  from "./views/loginView.js"
import homeView from "./views/homeView.js"
import administratorView from "./views/administratorView.js"
import addProductView from "./views/addProductView.js"
import produtcView from './views/productView.js'
import {
  sectionProducts
} from './helpers/nodes.js'

sectionProducts.addEventListener('click', (e) => {
  
  if ( e.target.classList.contains('button__link--product') ) {
    
    const productId = e.target.dataset.id
    location.hash = `#product=${productId}` 
  }
})


function router() {

  if (location.hash.startsWith('#login')) {
    loginView()

  } else if(location.hash.startsWith('#administrator')) {
    administratorView()
    
  } else if(location.hash.startsWith('#addNewProduct')) {
    addProductView()
    
  } else if(location.hash.startsWith('#product=')) {
    produtcView()
    
  } else {
    homeView()
  }
};

export default router;