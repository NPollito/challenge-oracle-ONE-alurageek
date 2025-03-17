import deleteNodes from "../helpers/deleteNodes.js"

import {
  inputSearch,
  searchForm,
  buttonAcces,
  buttonContainer,
  sectionBanner,
  sectionProducts,
  sectionAddProducts,
  sectionLogin,
  sectionAdministrator,
  buttonAddProduct,
  footer
} from "../helpers/nodes.js"

buttonAddProduct.addEventListener('click', () => {
  location.hash = '#addNewProduct'
})

function administratorView() {
  deleteNodes(buttonContainer)
  inputSearch.style.display = 'flex'
  searchForm.classList.remove('inactive')
  buttonAcces.classList.add('inactive')
  sectionBanner.classList.add('inactive')
  sectionProducts.classList.add('inactive')
  sectionAddProducts.style.display = 'none'
  sectionLogin.style.display = 'none'
  sectionAdministrator.classList.remove('inactive')
  footer.classList.remove('inactive')
}

export default administratorView