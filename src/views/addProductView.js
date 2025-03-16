import deleteNodes from "../helpers/deleteNodes.js"
import Button from "../components/Button.js"

import {
  inputSearch,
  searchForm,
  buttonContainer,
  sectionBanner,
  sectionProducts,
  sectionADdProducts,
  sectionLogin,
  sectionAdministrator,
  footer
} from "../helpers/nodes.js"

function menuAdministrator() {
  location.hash = '#administrator'
};

function addProductView() {

  deleteNodes(buttonContainer)
  buttonContainer.appendChild(Button('Menú Administrador', 'button__link--administrator', 166))
  buttonContainer.onclick = menuAdministrator

  inputSearch.style.display = 'none'
  searchForm.classList.add('inactive')
  sectionBanner.classList.add('inactive')
  sectionProducts.classList.add('inactive')
  sectionADdProducts.style.display = 'flex'
  sectionLogin.style.display = 'none'
  sectionAdministrator.classList.add('inactive')
  footer.classList.add('inactive')
};

export default addProductView;
