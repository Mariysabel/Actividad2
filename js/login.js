
document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault();

    let correo = document.getElementById("correo");
    let password = document.getElementById("password");

    let errorCorreo = document.getElementById("errorCorreo");
    let errorPassword = document.getElementById("errorPassword");

    // Limpiar errores anteriores
    correo.classList.remove("input-error");
    password.classList.remove("input-error");

    errorCorreo.textContent = "";
    errorPassword.textContent = "";

    let flag = false;

    // Validar correo
    if (!validarCorreo(correo.value)) {
        correo.classList.add("input-error");
        errorCorreo.textContent = "Correo inválido.";
        flag = true;
    }

    // Validar correo institucional
    else if (!esCorreoInstitucional(correo.value)) {
        correo.classList.add("input-error");
        errorCorreo.textContent = "Tu correo debe ser institucional.";
        flag = true;
    }

    // Validar contraseña
    if (!validarPassword(password.value)) {
        password.classList.add("input-error");
        errorPassword.textContent = "La contraseña debe tener mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres.";
        flag = true;
    }

    // Mostrar alerta si todo es correcto
    if (!flag) {
        Swal.fire({
            icon: "success",
            title: "¡Validación correcta!",
            text: "El correo y la contraseña cumplen con los requisitos.",
            confirmButtonText: "Aceptar"
        }).then(() => {
            window.location.href = "index.html";
        });
    }
    return;
});