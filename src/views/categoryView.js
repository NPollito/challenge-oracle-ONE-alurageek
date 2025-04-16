import categoryContainer from "../components/categoryContainer.js";
import productContainer from "../components/productContainer.js";
import deleteNodes from '../helpers/deleteNodes.js';
import handleProductClick from '../helpers/handleProductClick.js';

// variables
const sectionCategoryProducts = document.querySelector('.category-products')

// eventos
sectionCategoryProducts.addEventListener('click', e => handleProductClick(e))

async function categoryView(category, products) {
  
  // crear html
  deleteNodes(sectionCategoryProducts)

  const container = document.createElement('DIV')
  container.classList.add('products__container', 'container')
  container.appendChild(categoryContainer(category.name, false, category.id))

  const sectionCards = document.createElement('SECTION')
  sectionCards.classList.add('cards')

  const cardsContainer = document.createElement('DIV')
  cardsContainer.classList.add('cards__container')

  sectionCards.appendChild(cardsContainer)
  
  // agregar productos
  products.forEach(product => {
    const { image, title, price, id } = product
    cardsContainer.appendChild(productContainer(image, title, price, id, false))
  });

  container.appendChild(sectionCards)
  
  sectionCategoryProducts.appendChild(container)
};

export default categoryView;