function validarNombre() {
    let nombre = $("#nombre").value;
    let estaCorrecto = true;
    if (nombre == "") {
        estaCorrecto = "Campo nombre vacio";
    }
    return estaCorrecto;
}
function validarNomUsu() {
    let nombreUsuario = $("#nombreUsuario").value;
    let estaCorrecto = true;
    if (nombreUsuario == "") {
        estaCorrecto = "Campo nombre usuario vacio";
    }
    return estaCorrecto;
}
function validarFn() {
    let fn = $("#fn").value;
    let estaCorrecto = true;
    if (fn == "") {
        estaCorrecto = "Campo fecha nacimiento vacio";
    }
    return estaCorrecto;
}
function validarApellidos() {
    let apellidos = $("#apellidos").value;
    let estaCorrecto = true;
    if (apellidos == "") {
        estaCorrecto = "Campo apellidos vacio";
    }
    return estaCorrecto;
}
function validarDon () {
    let donacion = $("#donacion").value;
    let estaCorrecto = true;
    if (donacion == "") {
        estaCorrecto = "Campo donación vacio, rellena el campo";
    }
    return estaCorrecto;
}
function validarEmail() {
    let email = $("#email").value;
    let estaCorrecto = true;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (email == "") {
        estaCorrecto = "Campo email vacio, rellena el campo";
    } else if (!emailRegex.test(email)) {
        estaCorrecto = "Email no valido";
    }
    return estaCorrecto;
}
function validarTfn() {
    let telefono = $("#telefono").value;
    let estaCorrecto = true;
    tfnRegex = /^\d{9}$/;
    if (telefono == "") {
        estaCorrecto = "Campo telefono vacio";
    } else if (!tfnRegex.test(telefono)) {
        estaCorrecto = "Telefono no valido";
        telefono.textContent = "";
    }
    return estaCorrecto;
}
function validarDNI() {
    let dni = $("#dni").value;
    let estaCorrecto = true;
    var dniRegex = /^(\d{8})([A-Z])$/;
    if (dni == "") {
        estaCorrecto = "Campo DNI vacio";
    } else if (!dniRegex.test(dni)) {
        estaCorrecto = "DNI no valido";
    }
    return estaCorrecto;
}
$("#btn").addEventListener("click", function () {
    var validarNom = validarNombre();
    var validarNomUsuario = validarNomUsu();
    var validarApe = validarApellidos();
    var validarDni = validarDNI();
    var validarFechaN = validarFn();
    var validarTelef = validarTfn();
    var validarEmails = validarEmail();
    var validarDonacion = validarDon();
    console.log(validarNom);
    if (validarNom != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarNom;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 4000);
    } else if (validarNomUsuario != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarNomUsuario;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 4000);
    } else if (validarApe != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarApe;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 4000);
    } else if (validarDni != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarDni;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 4000);
    } else if (validarFechaN != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarFechaN;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 4000);
    } else if (validarTelef != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarTelef;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 4000);
    } else if (validarEmails != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarEmails;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 4000);
    } else if (validarDonacion != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarDonacion;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 4000);
    } else {
        window.location.href = "../html/gracias.html"
    }
});
function $(selector) {
    return document.querySelector(selector);
}