function showAlert(message, reference) {

    cleanAlert(reference);

    const input = reference.querySelector('.form__input')
    input.style.border = '1px solid #ff0000'

    const error = document.createElement('DIV')
    error.classList.add('alert')
    error.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p class="alert__message">${message}</p>
    `

    return reference.appendChild(error)
}

function cleanAlert(reference) {

    const input = reference.querySelector('.form__input')

    // comprueba si ya existe una alerta
    const alert = reference.querySelector('.alert')

    if ( alert ) {

        alert.remove()
    }

    input.style.border = 'none'
};

function validateUrl(url) {

    const regex = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
    const result = regex.test(url)

    return result
}

function validateEmail(email) {

    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    const result = regex.test(email)

    return result
}

function checkData(formData) {

    const inputButton = document.querySelector('.form__button');

    if ( Object.values(formData).includes("")) {
        
        inputButton.style.opacity = '0.5'
        inputButton.disabled = true

        return
    }

    inputButton.style.opacity = '1'
    inputButton.disabled = false
}

// inyectar spinner en el html

function addSpinner() {

    const spinkit = document.createElement('DIV')

    spinkit.classList.add('sk-circle', 'spinner')
    spinkit.innerHTML = `
        <div class="sk-circle1 sk-child"></div>
        <div class="sk-circle2 sk-child"></div>
        <div class="sk-circle3 sk-child"></div>
        <div class="sk-circle4 sk-child"></div>
        <div class="sk-circle5 sk-child"></div>
        <div class="sk-circle6 sk-child"></div>
        <div class="sk-circle7 sk-child"></div>
        <div class="sk-circle8 sk-child"></div>
        <div class="sk-circle9 sk-child"></div>
        <div class="sk-circle10 sk-child"></div>
        <div class="sk-circle11 sk-child"></div>
        <div class="sk-circle12 sk-child"></div>
    `

    return spinkit
}

export const template = {
    showAlert,
    cleanAlert,
    validateUrl,
    validateEmail,
    checkData,
    addSpinner
}