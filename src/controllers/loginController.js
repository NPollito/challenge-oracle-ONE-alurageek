import loginView from '../views/loginView.js';

(function() {
  
  function validatedataForm(dataForm) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(dataForm);
        resolve()
      }, 3000);
    })
  }
  
  try {

    loginView(validatedataForm)
  } catch (error) {
    
    console.error('error ', error);
  }

})()
