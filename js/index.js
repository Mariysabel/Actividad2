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

    let flag = false;

    if (!soloLetras(nombre.value)) {
        nombre.classList.add('input-error');
        errorNombre.textContent = 'El nombre solo debe contener letras.';
        flag = true;
    }

    if (!validarCorreo(correo.value)) {
        correo.classList.add('input-error');
        errorCorreo.textContent = 'El correo no es válido.';
        flag = true;
    }

    else if (!esCorreoInstitucional(correo.value)) {
        correo.classList.add('input-error');
        errorCorreo.textContent = 'Tu correo debe ser institucional.';
        flag = true;
    }

    if (!validarLongitud(telefono.value, 10)) {
        telefono.classList.add('input-error');
        errorTelefono.textContent = 'El teléfono debe tener máximo 10 dígitos.';
        flag = true;
    }

    if (fecha.value === '') {
        fecha.classList.add('input-error');
        errorFecha.textContent = 'Selecciona una fecha de nacimiento.';
        flag = true;
    } else {

        let edad = calcularEdad(fecha.value);

        if (edad < 0) {
            fecha.classList.add('input-error');
            errorFecha.textContent = 'La fecha de nacimiento no es válida.';
            flag = true;
        } else if (!esMayorDeEdad(fecha.value)) {
            fecha.classList.add('input-error');
            errorFecha.textContent = 'Debes ser mayor de edad.';
            flag = true;
        }
    }

    if (!flag) {
        let edad = calcularEdad(fecha.value);

        Swal.fire({
            icon: 'success',
            title: '¡Formulario válido!',
            text: 'Todos los datos son correctos. Edad: ' + edad + ' Estado:' + validarEstado(telefono.value),
            confirmButtonText: 'Aceptar'
        });
    }
});