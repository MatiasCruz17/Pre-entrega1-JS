//PRE ENTREGA 3
/*Hacer uso del DOM, JSON & Storage y uso de eventos */
// Voy a generar un formulario de registro pequeño
const form = document.getElementById('registroForm');
const message = document.getElementById('mensaje');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    window.location.href = "Page/Opciones.html";


    const name = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        const user = {
            name: name,
            email: email,
            password: password,
        };

        localStorage.setItem('user', JSON.stringify(user));

        message.textContent = `¡registration successful, ${user.name}!`;

        form.reset();
    } else {
        message.textContent = 'Please, complete all fields.';
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const userSaved = localStorage.getItem('user');
    if (userSaved) {
        const user = JSON.parse(userSaved);
        message.textContent = `Welcome back, ${user.name}.`;
    }
    Swal.fire({
        title: 'Bienvenido a mi primer proyecto de JS',
        text: 'preciona el boton para continuar',
        icon: 'success',
        confirmButtonText: 'Continuar'
    })
});