// generar html con js
export function productsHTML(category, id) {

    const article = document.createElement('ARTICLE');

    article.classList.add('products')

    article.innerHTML = `
        <section class="products__texts">
            <h2 class="products__title">${category}</h2>
            <a href="src/screens/see-everything.html?id=${id}" class="products__link">Ver todo
                <i class="fa-solid fa-arrow-right"></i>
            </a>
        </section>
        <section class="cards">
            <div class="cards__container"></div>
        </section>
    `

    return article;
};

export function cardHTML(image, title, price, id, url) {

    const card = document.createElement('DIV');

    card.classList.add('card')

    card.innerHTML = `
        <img src="${image}" alt="img-product" class="card__image"/>
        <p class="card__title">${title}</p>
        <p class="card__price">$${price}</p>
        <a href="${url}/product.html?id=${id}" class="card__cta">Ver producto</a>
    `

    return card;
};

export function successAlert(message) {

    const alertSucces = document.createElement('P');

    alertSucces.classList.add('alertSucces' ,'button');

    alertSucces.textContent = `${message}`

    return alertSucces;
};

export function deleteAlert(top) {

    const windowDelete = document.createElement('ASIDE')

    windowDelete.classList.add('delete-product')
    windowDelete.innerHTML = `
        <div class="delete__container">
            <span class="delete__logo"><i class="fa-solid fa-skull-crossbones"></i></span>
            <p class="delete__title">Estas seguro que deseas eliminar ?</p>
            <button class="delete__button button">Aceptar</button>
            <span class="close__button" title="Cerrar"><i class="fa-solid fa-xmark"></i></span>
        </div>
    `

    windowDelete.style.top = `${top}px`

    return windowDelete;
}