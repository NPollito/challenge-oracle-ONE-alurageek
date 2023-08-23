import { template } from "./template.js";

document.addEventListener('DOMContentLoaded', function() {

    // Variables
    const email = {
        email: "",
        pass: ""
    }

    const inputEmail = document.querySelector('#email');
    const inputPass = document.querySelector('#pass');
    const form = document.querySelector('.form');

    //Eventos a las variables asignadas
    inputEmail.addEventListener('input', validate);
    inputPass.addEventListener('input', validate);
    
    form.addEventListener('submit', sendData)

    // Funciones
    function validate(e) {

        if ( e.target.value.trim() === "" ) {
            
            template.showAlert(`El campo ${e.target.name} es obligatorio`, e.target.parentElement)
            email[e.target.id] = ""
            template.checkData(email)

            return
        }

        if ( e.target.id === 'email' && !template.validateEmail(e.target.value) ) {
            
            template.showAlert("El email no es valido", e.target.parentElement)
            email[e.target.id] = ""
            template.checkData(email)
            
            return
        }

        template.cleanAlert(e.target.parentElement)

        // Asignar valores al objeto formData
        email[e.target.id] = e.target.value.trim().toLowerCase()

        template.checkData(email)
    }

        // Enviar Datos
    function sendData(e) {

        e.preventDefault()
        
        // Añadir sppiner al form
        form.appendChild(template.addSpinner())

        const spinner = document.querySelector('.spinner')
        
        setTimeout(() => {
            
            spinner.remove()

            resetForm()

            window.location.href = '/screens/administrator.html'

        }, 4000);

    }

    function resetForm() {

        //reiniciar el objeto
        email.email = ""
        email.pass = ""

        form.reset()
        template.checkData(email)
    }

})