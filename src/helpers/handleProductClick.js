import { scrollToTop } from "./scrollToTop.js";

function handleProductClick(e) {
  if(e.target.classList.contains('button__link--product')) {
    const productId = e.target.dataset.id

    const baseUrl = window.location.origin + "/src/pages/viewProduct.html";  
    location.href = `${baseUrl}?id=${productId}`;
    
    scrollToTop();
  }
}

export default handleProductClick;