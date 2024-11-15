import { productServices } from "../service/products-service.js";
import { productsHTML, cardHTML } from "./templates.js";


// generar html en el dom
const productsContainer = document.querySelector('.products__container')

productServices.categoryList()
 .then(categories => {

    categories.forEach(category => {

        const createCategories = productsHTML(category.name, category.id)
        productsContainer.appendChild(createCategories)
        
        const card = document.querySelectorAll('.cards__container')
        
        productServices.sixProducts(category.id)
         .then(products => {

            // recorrer la lista de los productos
            products.forEach( product => {

                if ( product.categoryId == category.id ) {

                    const createCard = cardHTML(product.image, product.title, product.price, product.id, "src/screens")
                    card[category.id].appendChild(createCard)
                }
            })

         }).catch(err => console.log(err));
    });

 }).catch(err => console.log(err));