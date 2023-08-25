import { productServices } from "../service/products-service.js";
import { cardHTML } from "./templates.js";

// crear html
function productHTML(image, title, price, details) {

    const article = document.createElement('ARTICLE');

    article.classList.add('product')

    article.innerHTML = `
        <picture class="product__picture">
            <img src="${image}" alt="producto-imagen" class="product__image" />
        </picture>
        <div class="product__texts">
            <h2 class="product__title">${title}</h2>
            <p class="product__price">$${price}</p>
            <p class="product__details">${details}</p>
        </div>
    `

    return article
};

// generar html en el dom
const productContainer = document.querySelector('.product__container')
const cardsContainer = document.querySelector('.cards__container')

const productId = new URL(window.location).searchParams.get('id')
console.log(productId);

productServices.seeProduct(productId)
 .then(data => {

    const createProduct = productHTML(data.image, data.title, data.price, data.details)
    productContainer.appendChild(createProduct)

    productServices.productList()
        .then(products => {
            
            products.forEach(product => {
                
                if ( data.categoryId == product.categoryId && data.id != product.id ) {

                    const createCard = cardHTML(product.image, product.title, product.price, product.id)
                    cardsContainer.appendChild(createCard)
                }
                
            });

        }).catch(err => console.log(err));

 }).catch(err = console.log(err));