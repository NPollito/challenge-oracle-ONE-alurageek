export function productsHTML(category, id) {

    const article = document.createElement('ARTICLE');

    article.classList.add('products')

    article.innerHTML = `
        <section class="products__texts">
            <h2 class="products__title">${category}</h2>
            <a href="../screens/see-everything.html?id=${id}" class="products__link">Ver todo
                <i class="fa-solid fa-arrow-right"></i>
            </a>
        </section>
        <section class="cards">
            <div class="cards__container"></div>
        </section>
    `

    return article
}

export function cardHTML(image, title, price, id) {

    const card = document.createElement('DIV');

    card.classList.add('card')

    card.innerHTML = `
        <img src="${image}" alt="img-product" class="card__image"/>
        <p class="card__title">${title}</p>
        <p class="card__price">$${price}</p>
        <a href="../screens/product.html?id=${id}" class="card__cta">Ver producto</a>
    `

    return card
}