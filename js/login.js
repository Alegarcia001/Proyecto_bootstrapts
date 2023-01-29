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
$("#btn").addEventListener("click", function () {
    var validarNom = validarNombre();
    var validarNomUsuario = validarNomUsu();
    var validarEmails = validarEmail();
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
    } else if (validarEmails != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarEmails;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 4000);
    } else {
        window.location.href = "../index.html"
    }
});
function $(selector) {
    return document.querySelector(selector);
}