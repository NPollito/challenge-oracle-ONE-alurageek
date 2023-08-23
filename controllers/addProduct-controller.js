import { productServices } from "../service/products-service.js"

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const urlProduct = document.querySelector('#url-image').value
    const category = document.getElementById('category')
    const nomProduct = document.querySelector('#nom-product').value
    const priceProduct = document.querySelector('#price').value
    const descriptionProduct = document.querySelector('#description').value

    const formContainer = document.querySelector('.form__container');

    //Validar categoria

    let categoryId;

    if ( category.value == 1 ) {
        
        categoryId = 0
    } else if ( category.value == 2 ) {
        
        categoryId = 1
    } else if ( category.value == 3 ) {

        categoryId = 2
    }

    setTimeout(() => {

        // Alerta de enviado con exito
        const successAlert = document.createElement('P')
        successAlert.classList.add('succesAlert' ,'button')
        successAlert.textContent = "Producto creado con éxito"

        formContainer.appendChild(successAlert)

        setTimeout(() => {

            productServices.createProduct(urlProduct, nomProduct, priceProduct, descriptionProduct, categoryId)
            .then(answer => console.log(answer))
            .catch(err => console.error(err))
            
            successAlert.remove()

        }, 2000);
        
    },3000);

})
