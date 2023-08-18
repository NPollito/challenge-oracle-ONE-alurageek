import { productServices } from "../service/products-service.js";
// import { cardHTML } from "./templates.js";

//Crear html
function cardHTML(image, title, price, id) {

    const card = document.createElement('DIV')

    card.classList.add('card')

    card.innerHTML = `
        <img src="${image}" alt="imagen" class="card__image" />
        <p class="card__title">${title}</p>
        <p class="card__price">$${price}</p>
        <p class="card__id">#${id}</p>
        <div class="card__icons">
            <a href="./add-new-product.html" title="Editar" id="edit">
                <i class="fa-solid fa-pen"></i>
            </a>
            <span id="delete" title="Borrar">
                <i class="fa-solid fa-trash"></i>
            </span>
        </div>
    `

    return card
}

// generar html en el dom
const cardsContainer = document.querySelector('.cards__container');

productServices.productList()
 .then(products => {

    products.forEach(product => {
        
        const createCard = cardHTML(product.image, product.title, product.price, product.id)
        cardsContainer.appendChild(createCard)
    });
 })