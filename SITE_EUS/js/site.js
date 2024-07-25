function toggleMenu() {
    var button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');
    var menu = document.getElementsByClassName('js-menu');
    menu[0].classList.toggle("active");
}

function fixPhotoOnScroll () 
{
    var photo = document.getElementById("photo-profile");
    this.scrollY > 50 ? photo.style.marginTop = 0  : photo.style.marginTop = '-7rem';
}
    

window.addEventListener("scroll", fixPhotoOnScroll , false);

function showImage(image) {
    var newImage = document.createElement('img');
    newImage.src = image.src;

    newImage.removeAttribute('onclick');
    var modal = document.getElementById('preview');
    var backdrop = document.getElementById('backdrop');
    modal.classList.toggle('showModal');

    modal.innerHTML = ''; // Limpiar el contenido del modal
    modal.appendChild(newImage);


    // Agregar el botón de cierre
    var closeButton = document.createElement('button');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '×';
    closeButton.onclick = closeModal; // Asignar la función para cerrar el modal
    modal.appendChild(closeButton);
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById('preview');
    var backdrop = document.getElementById('backdrop');

    // Ocultar el modal y el fondo
    if (modal) {
        modal.classList.remove('showModal');
        
    }

    if (backdrop) {
        backdrop.classList.remove('showModal');
    }

}

// Función para validar el formulario
function validateForm() {
    // Obtener valores de los campos del formulario
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Validación de campos
    if (name === '') {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }

    if (email === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }

    if (message === '') {
        alert('Por favor, ingresa un mensaje.');
        return false;
    }

    // Mostrar mensaje de éxito y limpiar el formulario
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('contactForm').reset();

    return false; // Retornar false para evitar el envío real del formulario
}

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
