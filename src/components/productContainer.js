function productContainer(image, title, price, id, buttons = Boolean) {
  const containerCard = document.createElement('DIV')
  containerCard.classList.add('card')

  const imageCard = document.createElement('IMG')
  imageCard.setAttribute('src', image)
  imageCard.classList.add('card__image')

  const containerDetails = document.createElement('DIV')
  containerDetails.classList.add('card__details')

  const titleProduct = document.createElement('P')
  titleProduct.classList.add('card__title')
  titleProduct.textContent = title

  const priceProduct = document.createElement('P')
  priceProduct.classList.add('card__price')
  priceProduct.textContent = `S/. ${price}`

  if ( buttons ) {
    const idProduct = document.createElement('P')
    idProduct.classList.add('card__id')
    idProduct.textContent = `Id: ${id}`
    
    // crear botones de eliminar y editar product
    const containerIcons = document.createElement('DIV')
    containerIcons.classList.add('card__icons')
    containerIcons.innerHTML = `
      <span id="edit" title="Editar" class="card__edit" data-id=${id}>
        <img src="./src/assets/icons/edit.svg" alt="Icono eliminar" class="card__edit" data-id=${id}>
      </span>
      <span id="delete" title="Borrar" class="card__delete" data-id=${id}>
        <img src="./src/assets/icons/delete.svg" alt="Icono eliminar" class="card__delete" data-id=${id}>
      </span>
    `

    containerDetails.appendChild(titleProduct)
    containerDetails.appendChild(priceProduct)
    containerDetails.appendChild(idProduct)

    containerCard.appendChild(imageCard)
    containerCard.appendChild(containerDetails)
    containerCard.appendChild(containerIcons)

  } else {
    
    // crear boton de ver producto
    const buttonDetails = document.createElement('BUTTON')
    buttonDetails.classList.add('button__link', 'button__link--product')
    buttonDetails.textContent = 'Ver producto'
    buttonDetails.dataset.id = id
  
    containerDetails.appendChild(titleProduct)
    containerDetails.appendChild(priceProduct)
    containerDetails.appendChild(buttonDetails)
    
    containerCard.appendChild(imageCard)
    containerCard.appendChild(containerDetails)
  }
  
  
  return containerCard
};

export default productContainer;