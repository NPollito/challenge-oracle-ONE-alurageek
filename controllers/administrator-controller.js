import { productServices } from "../service/products-service.js";
import { deleteAlert } from "./templates.js"

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
            <a href="./edit-product.html?id=${id}" title="Editar" id="edit">
                <i class="fa-solid fa-pen"></i>
            </a>
            <span id="${id}" class="delete" title="Borrar">
                <i class="fa-solid fa-trash"></i>
            </span>
        </div>
    `

    //Elimimar producto seleccionado
    const buttonDelete = card.querySelector('span')

    buttonDelete.addEventListener('click', () => {

        const id = buttonDelete.id;

        // Ver en que parte se encuentra el scroll
        const ejeY = Math.round(window.scrollY)

        // Seleccionar al elemento body para inyectar la alerta
        const windowAlert = document.querySelector('body')
        windowAlert.appendChild(deleteAlert(ejeY))

        //bloquear el scrroll
        windowAlert.style.overflow = "hidden"
    
        // evento en el boton cerrar
        document.querySelector('.close__button').addEventListener('click', () => {
          
            const deleteAlert = document.querySelector('.delete-product')
            windowAlert.removeChild(deleteAlert);
            windowAlert.style.overflow = "scroll"
        })

        // evento en el boton aceptar
        document.querySelector('.delete__button').addEventListener('click', () => {

            const deleteAlert = document.querySelector('.delete-product')

            productServices.deleteProduct(id)
             .then(() => {
                windowAlert.removeChild(deleteAlert);
                windowAlert.style.overflow = "scroll"
                window.location.href = "/screens/administrator.html"
              })
             .catch(err => console.log(err))
        })
    })

    return card
};

// generar lista dd productos en el dom
const cardsContainer = document.querySelector('.cards__container');

productServices.productList()
 .then(products => {

    products.forEach(product => {
        
        const createCard = cardHTML(product.image, product.title, product.price, product.id)
        cardsContainer.appendChild(createCard)
    });
 })