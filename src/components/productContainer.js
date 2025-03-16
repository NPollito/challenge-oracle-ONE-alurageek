function productContainer(image, title, price, id) {
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

  const buttonDetails = document.createElement('BUTTON')
  buttonDetails.classList.add('button__link', 'button__link--product')
  buttonDetails.textContent = 'Ver producto'
  buttonDetails.dataset.id = id

  containerDetails.appendChild(titleProduct)
  containerDetails.appendChild(priceProduct)
  containerDetails.appendChild(buttonDetails)
  
  containerCard.appendChild(imageCard)
  containerCard.appendChild(containerDetails)
  
  return containerCard
};

export default productContainer;