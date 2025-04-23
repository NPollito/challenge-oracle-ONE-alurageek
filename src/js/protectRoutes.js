export function verifyRoute(route, storage) {
  const path = location.pathname

  if ( path.startsWith(`/src/pages/${route}`) && storage() === null ) {
    
    alert('Antes de ingresar a esta ruta, debes iniciar sesión..')
    location.href = '/src/pages/login.html'
  }
}

export function validateStorage() {
  return localStorage.getItem('authenticated')
}

export function login() {
  localStorage.setItem('authenticated', 'true')
}

export function logout() {
  localStorage.removeItem('authenticated')
}