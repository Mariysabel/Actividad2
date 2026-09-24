console.log("Hola desde la utilería");
function validarCorreo(correo) {
    let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(correo);
}

function soloLetras(texto) {
    let patron = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]+$/;
    return patron.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    let texto = String(numero);
    return texto.length <= maxLongitud;
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

    return edad;
}

function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

function validarPassword(password) {
    let tieneMayuscula = /[A-Z]/.test(password);
    let tieneMinuscula = /[a-z]/.test(password);
    let tieneNumero = /[0-9]/.test(password);
    let tieneEspecial = /[^A-Za-z0-9\s]/.test(password);
    let tieneLongitud = password.length >= 8;

    return (
        tieneMayuscula &&
        tieneMinuscula &&
        tieneNumero &&
        tieneEspecial &&
        tieneLongitud
    );
}

function esCorreoInstitucional(correo) {
    let correoMinusculas = correo.trim().toLowerCase();

    let patron = /^[^\s@]+@([^\s@]+)$/;
    let resultado = correoMinusculas.match(patron);

    if (!resultado) {
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
        return false;
    }

    return true;
}


function validarEstado(numero){
    let texto= String(numero);
    let lada ="";

    for(let i = 0; i <= 2; i++) {
        lada += texto.charAt(i);
    }

    console.log(lada);
    switch (lada) {
        case "951":
            return "oaxaca";
            break;
        case "998":
            return "Cancún";
            break;
        case "614":
            return "Chihuahua";
            break;
        case "220":
            return "Puebla";
            break;
        case "221":
            return "Puebla";
            break;
        case "222":
            return "Puebla";
            break;
        case "443":
            return "Morelia";
            break;
        case "442":
            return "Querétaro";
            break;
        case "446":
            return "Querétaro";
            break;
        default:
            return "Desconocido";
            break;
    }
}
