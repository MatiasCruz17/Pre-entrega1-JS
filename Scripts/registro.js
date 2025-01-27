//PRE ENTREGA 3
/*Hacer uso del DOM, JSON & Storage y uso de eventos */
// Voy a generar un formulario de registro pequeño
const form = document.getElementById('registroForm');
const message = document.getElementById('mensaje');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

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
debugger
// Cargamos datos del localStorage al iniciar
document.addEventListener('DOMContentLoaded', function () {
    const userSaved = localStorage.getItem('usuario');
    if (userSaved) {
        const user = JSON.parse(userSaved);

        // Mostramos un mensaje indicando que ya hay un usuario registrado
        mensaje.textContent = `Bienvenido de nuevo, ${user.name}.`;
    }
});