import { productServices } from "../service/products-service.js";
import { productsHTML, cardHTML } from "./templates.js";

const categorytId = new URL(window.location).searchParams.get('id')

// generar html en el dom
const productsContainer = document.querySelector('.products__container')

productServices.categoryList()
 .then(categories => {

    categories.forEach(category => {

        if( category.id == categorytId ) {
            
            const createCategories = productsHTML(category.name)
            productsContainer.appendChild(createCategories)

            const card = document.querySelector('.cards__container')

            productServices.productList()
             .then(products => {
                
                // recorrer la lista de los productos
                products.forEach(product => {

                    if ( product.categoryId == categorytId ) {
                        
                        const createCard = cardHTML(product.image, product.title, product.price, product.id)
                        card.appendChild(createCard) 
                    }
                })

             }).catch(err => console.log(err));
        }
    })
    
 }).catch(err => console.log(err));