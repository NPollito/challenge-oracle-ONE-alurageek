function categoryContainer(title, showLink) {

  const containerCategory = document.createElement('SECTION')
  containerCategory.classList.add('category')

  const categoryTitle = document.createElement('H2')
  categoryTitle.classList.add('category__title')
  categoryTitle.textContent = title

  containerCategory.appendChild(categoryTitle)

  if (showLink) {
    const categoryLink = document.createElement('SPAN')
    categoryLink.classList.add('category__link')
    categoryLink.textContent = 'Ver todo'

    const imageLink = document.createElement('IMG')
    imageLink.setAttribute('src', './src/assets/icons/arrow_back.svg')

    categoryLink.appendChild(imageLink)
    containerCategory.appendChild(categoryLink)
  }

  return containerCategory
};

export default categoryContainer;