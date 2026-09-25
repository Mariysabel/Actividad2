
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre');
    let correo = document.getElementById('correo');
    let telefono = document.getElementById('telefono');
    let fecha = document.getElementById('fechaNacimiento');

    let errorNombre = document.getElementById('errorNombre');
    let errorCorreo = document.getElementById('errorCorreo');
    let errorTelefono = document.getElementById('errorTelefono');
    let errorFecha = document.getElementById('errorFecha');

    nombre.classList.remove('input-error');
    correo.classList.remove('input-error');
    telefono.classList.remove('input-error');
    fecha.classList.remove('input-error');

    errorNombre.textContent = '';
    errorCorreo.textContent = '';
    errorTelefono.textContent = '';
    errorFecha.textContent = '';

    if (!soloLetras(nombre.value)) {
        nombre.classList.add('input-error');
        errorNombre.textContent = 'El nombre solo debe contener letras.';
        return;
    }

    if (!validarCorreo(correo.value)) {
        correo.classList.add('input-error');
        errorCorreo.textContent = 'El correo no es válido.';
        return;
    }

    if (!esCorreoInstitucional(correo.value)) {
        correo.classList.add("input-error");
        errorCorreo.textContent = "Tu correo debe ser institucional.";
        return;
    }

    if (!validarLongitud(telefono.value, 10)) {
        telefono.classList.add('input-error');
        errorTelefono.textContent = 'El teléfono debe tener máximo 10 dígitos.';
        return;
    }

    if (fecha.value === '') {
        fecha.classList.add('input-error');
        errorFecha.textContent = 'Selecciona una fecha de nacimiento.';
        return;
    }

    let edad = calcularEdad(fecha.value);

    if (edad < 0) {
        fecha.classList.add('input-error');
        errorFecha.textContent = 'La fecha de nacimiento no es válida.';
        return;
    }

    if (!esMayorDeEdad(fecha.value)) {
        fecha.classList.add('input-error');
        errorFecha.textContent = 'Debes ser mayor de edad.';
        return;
    }

    Swal.fire({
        icon: 'success',
        title: '¡Formulario válido!',
        text: 'Todos los datos son correctos. Edad: ' + edad,
        confirmButtonText: 'Aceptar'
    });

});