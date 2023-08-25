import { productServices } from "../service/products-service.js";
import { successAlert } from"./templates.js";

const form = document.querySelector('.form')
const formButton = document.querySelector('.form__button--size')
const aside = document.querySelector('.aside')


// Obtener por parametro el id de la url
const id = new URL(window.location).searchParams.get('id')

function getInformation() {
    
    if( id === null ) {

        window.location.href = "/screens/page-not-found.html"

        return
    }

    // Variables
    const inputUrl = document.querySelector('#url-image')
    const category = document.querySelector('#category')
    const inputName = document.querySelector('#nom-product')
    const inputPrice = document.querySelector('#price')
    const inputDescription = document.querySelector('#description')

    // validar categoria
    category.addEventListener('click', (e) => {
        
        if( e.target.value == 0 ) {

            formButton.style.opacity = '0.5'
            formButton.disabled = true

            return
        }

        formButton.style.opacity = '1'
        formButton.disabled = false
    });

    //Obtener los detalles del producto
    productServices.seeProduct(id)
     .then(product => {

        inputUrl.value = product.image
        category.value = product.categoryId + 1
        inputName.value = product.title
        inputPrice.value = product.price
        inputDescription.value = product.details
     })
}
getInformation();

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const inputUrl = document.querySelector('#url-image').value
    const category = document.querySelector('#category')
    const categoryId = parseInt(category.value) - 1
    const inputName = document.querySelector('#nom-product').value
    const inputPrice = document.querySelector('#price').value
    const inputDescription = document.querySelector('#description').value

    const formContainer = document.querySelector('.form__container');

    setTimeout(() => {
        
        // Alerta de enviado con exito
        formContainer.appendChild(successAlert("Producto editado con éxito"))

        setTimeout(() => {
            
            productServices.updateProduct(
                id,
                inputUrl,
                inputName,
                inputDescription,
                inputPrice,
                categoryId
            )
            .then(() => window.location.href = "/screens/administrator.html")
            .catch(err => err)

        }, 3000);

    }, 800);

});
