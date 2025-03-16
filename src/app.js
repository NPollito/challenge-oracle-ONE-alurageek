import router from "./router.js"

document.addEventListener('DOMContentLoaded', () => {
  
  window.addEventListener('hashchange', router)
  router()
})