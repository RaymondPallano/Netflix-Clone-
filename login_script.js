document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var errorMessage = document.getElementById('error-message');

    if (email === '') {
        errorMessage.textContent = 'El campo Correo Electrónico es obligatorio.';
    } else if (password === '') {
        errorMessage.textContent = 'El campo Contraseña es obligatorio.';
    } else {
        errorMessage.textContent = '';
        alert('Formulario enviado correctamente.');
    }
});
