function addProductView(product = null, onSubmit) {
  
  // mostrar y ocultar elemtos
  hideSections([
    searchMobile,
    searchDesktop,
    sectionBanner, 
    sectionCategoryProducts, 
    sectionLogin, 
    sectionProducts, 
    sectionProductsDetails,
    sectionAdministrator
  ])

  buttonAdministrator.style.display = 'inline'
  sectionAddProducts.style.display = 'block'

  // editar boton administrador
  configButtonAdministrator()

  dataForm.image = ''
  dataForm.title = ''
  dataForm.price = ''
  dataForm.details = ''
  dataForm.categoryId = ''

  // Determinar si es POST o PUT
  const isEditing = product !== null;
  const buttonSubmit = formNewProduct.querySelector('input[type="submit"]')
  const titleForm = formNewProduct.querySelector('h3')

  if ( isEditing ) {
    showProductEditing(product)
    
  } else {
    dragDropContainer.querySelector('h3').style.display = 'block'
    dragDropContainer.classList.remove('active')
    dragDropContainer.querySelector('img')?.remove()
    resetForm(buttonSubmit, formNewProduct)
  }
  
  isEditing
  ? buttonSubmit.value = 'Editar Producto'
  : buttonSubmit.value = 'Agregar Producto'
  
  isEditing
  ? titleForm.textContent = 'Editando producto'
  : titleForm.textContent = 'Agregar nuevo producto'
  
  // evitar que múltiples listeners se añadan al mismo formulario accidentalmente
  if(!formNewProduct.hasAttribute('data-listener-added')) {
    formNewProduct.setAttribute('data-listener-added', 'true')
    formNewProduct.addEventListener('submit', handleSubmit)  
  }

  async function handleSubmit(e) {
    e.preventDefault() 

    buttonSubmit.disabled = true
    showSpinner(formNewProduct) //mostrar spinner
    console.log(dataForm.id)
    console.log(product)

    dataForm.id = dataForm.id ? product.id : Date.now();

    console.log(dataForm.id)
    debugger
    await onSubmit(dataForm, isEditing)
    
    hideSpinner() //quitar spinner
    
    // resetear
    resetForm(buttonSubmit, formNewProduct)
    resetDataForm()
    
    await alertMessage(formNewProduct, isEditing ? 'Producto editado correctamente' : 'Producto agregado correctamente')
    
    location.hash = '#administrator'
  }
  
};


