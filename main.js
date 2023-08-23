import { template } from "./js/template.js";

document.addEventListener('DOMContentLoaded', function() {

    // Variables
    const email = {
        name: "",
        message: ""
    }

    const inputName = document.querySelector('#name');
    const inputMessage = document.querySelector('#message');
    const formContainer = document.querySelector('.form__container');
    const form = document.querySelector('.form');

    //Eventos a las variables asignadas
    inputName.addEventListener('input', validate);
    inputMessage.addEventListener('input', validate);

    form.addEventListener('submit', sendData)

    //Funciones
    function validate(e) {

        // validar si el input esta vacío
        if ( e.target.value.trim() === "" ) {

            template.showAlert(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
            email[e.target.id] = ""
            template.checkData(email)
            return
        }

        template.cleanAlert(e.target.parentElement)

        // Asignar valores a email
        email[e.target.id] = e.target.value.trim().toLowerCase()

        // comprobar el objeto del email

        template.checkData(email)
    };

        // Enviar Datos
    function sendData(e) {

        e.preventDefault()
        
        // Añadir sppiner al form
        formContainer.appendChild(template.addSpinner())

        const spinner = document.querySelector('.spinner')
        
        setTimeout(() => {
            
            spinner.remove()

            resetForm()

        }, 4000);

    }

    function resetForm() {

        //reiniciar el objeto
        email.name = ""
        email.message = ""

        form.reset()
        template.checkData(email)
    }
})


