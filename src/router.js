import loginView  from "./views/loginView.js"
import homeView from "./views/homeView.js"
import administratorView from "./views/administratorView.js"
import addProductView from "./views/addProductView.js"
import produtcView from './views/productView.js'
import categoryView from "./views/categoryView.js"
import {
  imageLogo,
  sectionProducts
} from './helpers/nodes.js'

imageLogo.addEventListener('click', () => {
  
  location.hash = '#home'

  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

sectionProducts.addEventListener('click', (e) => {
  
  if ( e.target.classList.contains('button__link--product') ) {
    
    const productId = e.target.dataset.id
    location.hash = `#product=${productId}`

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
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
    
  } else if(location.hash.startsWith('#category=')) {
    categoryView()

  } else {
    homeView()
  }
};

export default router;