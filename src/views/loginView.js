import { 
  buttonAcces,
  footer,
  sectionAddProducts,
  sectionAdministrator,
  sectionBanner,
  sectionCategory,
  sectionLogin,
  sectionProducts,
  sectionProductsDetails
} from "../helpers/nodes.js"


function loginView() {
  buttonAcces.classList.add('inactive')
  sectionBanner.style.display = 'none'
  sectionProducts.style.display = 'none'
  sectionCategory.style.display = 'none'
  sectionProductsDetails.style.display = 'none'
  sectionAdministrator.style.display = 'none'
  sectionAddProducts.style.display = 'none'
  footer.style.display ='none'

  sectionLogin.style.display = 'flex'
  
}

export default loginView;