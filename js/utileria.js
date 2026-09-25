console.log("Hola desde la utilería");

function validarCorreo(correo) {
    let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let resultado = patron.test(correo);

    console.log("validarCorreo:", correo, ":", resultado);
    return resultado;
}

function soloLetras(texto) {
    let patron = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]+$/;
    let resultado = patron.test(texto);

    console.log("soloLetras:", texto, ":", resultado);
    return resultado;
}

function validarLongitud(numero, maxLongitud) {
    let texto = String(numero);
    let resultado = texto.length <= maxLongitud;

    console.log("validarLongitud:", numero, "máximo:", maxLongitud, ":", resultado);
    return resultado;
}

function calcularEdad(fechaNacimiento) {
    let nacimiento = new Date(fechaNacimiento + "T00:00:00");
    let hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    let mes = hoy.getMonth() - nacimiento.getMonth();

    if (
        mes < 0 ||
        (mes === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
        edad--;
    }

    console.log("calcularEdad:", fechaNacimiento, ":", edad);
    return edad;
}

function esMayorDeEdad(fechaNacimiento) {
    let resultado = calcularEdad(fechaNacimiento) >= 18;

    console.log("esMayorDeEdad:", fechaNacimiento, ":", resultado);
    return resultado;
}

function validarPassword(password) {
    let tieneMayuscula = /[A-Z]/.test(password);
    let tieneMinuscula = /[a-z]/.test(password);
    let tieneNumero = /[0-9]/.test(password);
    let tieneEspecial = /[^A-Za-z0-9\s]/.test(password);
    let tieneLongitud = password.length >= 8;

    let resultado =
        tieneMayuscula &&
        tieneMinuscula &&
        tieneNumero &&
        tieneEspecial &&
        tieneLongitud;

    console.log("validarPassword:", password, ":", resultado);
    return resultado;
}

function esCorreoInstitucional(correo) {
    let correoMinusculas = correo.trim().toLowerCase();

    let patron = /^[^\s@]+@([^\s@]+)$/;
    let resultado = correoMinusculas.match(patron);

    if (!resultado) {
        console.log("esCorreoInstitucional:", correo, ":", false);
        return false;
    }

    let dominio = resultado[1];

    let proveedoresGratuitos = [
        "gmail.com",
        "yahoo.com",
        "hotmail.com",
        "outlook.com",
        "icloud.com"
    ];

    if (proveedoresGratuitos.includes(dominio)) {
        console.log("esCorreoInstitucional:", correo, ":", false);
        return false;
    }

    console.log("esCorreoInstitucional:", correo, ":", true);
    return true;
}

function validarEstado(numero) {
    let texto = String(numero);
    let lada = "";

    for (let i = 0; i <= 2; i++) {
        lada += texto.charAt(i);
    }

    let resultado;

    switch (lada) {
        case "951":
            resultado = "oaxaca";
            break;
        case "998":
            resultado = "Cancún";
            break;
        case "614":
            resultado = "Chihuahua";
            break;
        case "220":
            resultado = "Puebla";
            break;
        case "221":
            resultado = "Puebla";
            break;
        case "222":
            resultado = "Puebla";
            break;
        case "443":
            resultado = "Morelia";
            break;
        case "442":
            resultado = "Querétaro";
            break;
        case "446":
            resultado = "Querétaro";
            break;
        default:
            resultado = "Desconocido";
            break;
    }

    console.log("validarEstado:", numero, "LADA:", lada, ":", resultado);
    return resultado;
}