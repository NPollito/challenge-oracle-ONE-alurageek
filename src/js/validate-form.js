import { template } from "./template.js";

document.addEventListener('DOMContentLoaded', function() {

    // Variables
    const formData = {
        Url: "https://picsum.photos/200/300?random=100",
        Nombre: "",
        Precio: "",
        Descripcion: "",
        Categoria: ""
    };

    const inputUrl = document.querySelector('#url-image')
    const category = document.querySelector('#category')
    const inputName = document.querySelector('#nom-product')
    const inputPrice = document.querySelector('#price')
    const inputDescription = document.querySelector('#description')
    const form = document.querySelector('.form');

    const formContainer = document.querySelector('.form__container');

    //Eventos a las variables asignadas
    inputUrl.addEventListener('input', validate);
    inputName.addEventListener('input', validate);
    inputPrice.addEventListener('input', validate);
    inputDescription.addEventListener('input', validate);
    form.addEventListener('submit', sendData)
    category.addEventListener('click', (e) => {
        
        if( e.target.value == 0 ) {

            formData[e.target.name] = ""
            template.checkData(formData)

            return
        }

        formData[e.target.name] = e.target.value

        template.checkData(formData)
    });

    //Funciones
    function validate(e) {
        
        if ( e.target.value.trim() === "" ) {
            
            template.showAlert(`El campo ${e.target.name} es obligatorio`, e.target.parentElement)
            formData[e.target.name] = ""
            template.checkData(formData)
    
            return
        }
    
        if ( e.target.name === 'Url' && !template.validateUrl(e.target.value) ) {
            
            template.showAlert('La url no es válido', e.target.parentElement)
            formData[e.target.name] = ""
            template.checkData(formData)
    
            return
        }
    
        template.cleanAlert(e.target.parentElement)

        // Asignar valores al objeto formData
        formData[e.target.name] = e.target.value.trim().toLowerCase()

        template.checkData(formData)
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

        }, 3000);

    }

    function resetForm() {

        //reiniciar el objeto
        formData.Nombre = ""
        formData.Precio = ""
        formData.Descripcion = ""
        formData.Categoria = ""

        form.reset()
        template.checkData(formData)
    }
})