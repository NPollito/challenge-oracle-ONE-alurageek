import { 
  inputSearch,
  searchForm,
  buttonAcces,
  sectionBanner,
  sectionProducts,
  sectionAddProducts,
  sectionLogin,
  buttonLogin,
  footer,
} from "../helpers/nodes.js"

buttonLogin.addEventListener('click', () => {
  location.hash = '#administrator'
})

function loginView() {
  inputSearch.style.display = 'none'
  searchForm.classList.add('inactive')
  buttonAcces.classList.add('inactive')
  sectionBanner.classList.add('inactive')
  sectionProducts.classList.add('inactive')
  sectionAddProducts.style.display = 'none'
  sectionLogin.style.display = 'flex'
  footer.classList.add('inactive')
}

export default loginView;