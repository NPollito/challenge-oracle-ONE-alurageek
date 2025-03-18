function categoryContainer(title, showLink = false, idCategory) {

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
    categoryLink.dataset.id = idCategory
    categoryLink.addEventListener('click', () => {

      location.hash = `#category=${title.toLowerCase()}&id=${idCategory}`

      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    })

    const imageLink = document.createElement('IMG')
    imageLink.setAttribute('src', './src/assets/icons/arrow_back.svg')

    categoryLink.appendChild(imageLink)
    containerCategory.appendChild(categoryLink)
  }

  return containerCategory
};

export default categoryContainer;