function validarNombre(){
    let nombre = document.getElementById("nombre").value.trim();
    let errorNombre = document.getElementById("errorNombre");
    
    if(nombre.length<3){
        errorNombre.innerText="El nombre debe tener minimo 3 caracteristicas"
        return false;
    }   

    else{
        errorNombre.innerText="";
        return true;
    }

    
}
document.getElementById("nombre").addEventListener("input", validarNombre);

function validarApellidos(){
    let apellidos = document.getElementById("apellidos").value.trim();
    let errorApellidos = document.getElementById("errorApellidos")

    if(apellidos.length <3){
        errorApellidos.textContent = "Los apellidos deben tener minimo 3 caracteres."
        return false;
    }
    else{
        errorApellidos.textContent=""
        return true;
    }
}
document.getElementById("apellidos").addEventListener("input",validarApellidos);

function validarDocumento(){
    let documento = document.getElementById("documento").value.trim();
    let errorDocumento = document.getElementById("errorDocumento");

    if(!/^\d{6,10}$/.test(documento)){
        errorDocumento.textContent="Ingrese un documento entre 6 y 10 numeros.";
        return false;
    }
    else{
        errorDocumento.textContent = "";
        return true;
    }
}
document.getElementById("documento").addEventListener("input", validarDocumento)

function validarCorreo(){
    let correo = document.getElementById("correo").value.trim();
    let errorCorreo = document.getElementById("errorCorreo");

    if (!/^[^\s@]+@[^\s@]+\.[^s@]+$/.test(correo)){
        errorCorreo.textContent = "Ingrese un correo electronico valido";
        return false;
    }
    else{
        errorCorreo.textContent="";
        return true;
    }
}
document.getElementById("correo").addEventListener("input",validarCorreo);

 
function validarTelefono(){
    let telefono = document.getElementById("telefono").value.trim();
    let errorTelefono = document.getElementById("errorTelefono");

    if(!/^\d{10}$/.test(telefono)){
        errorTelefono.textContent = "El telefono debe tener exactamente 10 numeros"
        return false
    }
    else{
        errorTelefono.textContent=""
        return true;
    }
}
document.getElementById("telefono").addEventListener("input",validarTelefono);


function validarEdad(){
    let edad = document.getElementById("edad").value.trim();
    let errorEdad = document.getElementById("errorEdad");
    
    if(isNaN(edad) || edad < 18 || edad > 60){
        errorEdad.textContent="La edad debe ser entre 18 y 60 años.";
        return false;
    }
    else{
        errorEdad.textContent=""
        return true
    }
}
document.getElementById("edad").addEventListener("input",validarEdad);


function validarContrasena(){
    let contrasena = document.getElementById("contrasena").value;
    let errorContrasena = document.getElementById("errorContrasena");

    if(!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(contrasena)){
        errorContrasena.textContent="Minimo 8 caracteres, una mayuscula y un numero.";
        return false;
    }
    else{
        errorContrasena.textContent=""
        return true
    }

}
document.getElementById("contrasena").addEventListener("input",validarContrasena);


function validarConfirmar(){
    let contrasena = document.getElementById("contrasena").value;
    let confirmar = document.getElementById("confirmar").value;
    let errorConfirmar = document.getElementById("errorConfirmar");

    if(confirmar ==="" || confirmar !== contrasena){
        errorConfirmar.textContent="Las contraseñas no coinciden."
        return false;
    }
    else{
        errorConfirmar.textContent=""
        return true;
    }

}
document.getElementById("confirmar").addEventListener("input",validarConfirmar);
document.getElementById("contrasena").addEventListener("input",validarConfirmar)



function validarPrograma(){
    let programa = document.getElementById("programa").value;
    let errorPrograma = document.getElementById("errorPrograma");

    if(programa ===""){
        errorPrograma.textContent="Seleccione un programa de formacion.";
        return false;
    }
    else{
        errorPrograma.textContent="";
        return true;
    }
}
document.getElementById("programa").addEventListener("change",validarPrograma);


function validarTerminos(){
    let terminos = document.getElementById("terminos").checked;
    let errorTerminos = document.getElementById("errorTerminos");

    if(!terminos){
        errorTerminos.textContent="Debe aceptar los terminos y condiciones.";
        return false;
    }
    else{
        errorTerminos.textContent="";
        return true;
    }
}
document.getElementById("terminos").addEventListener("change",validarTerminos);


let formulario = document.getElementById("formulario");
let btnRegistrar = document.getElementById("btnRegistrar");
let mensajeFinal = document.getElementById("mensajeFinal");

function validarFormulario(){
    let resultado = true;

    if(!validarNombre()) resultado = false;
    if(!validarApellidos()) resultado = false;
    if(!validarDocumento()) resultado = false;
    if(!validarCorreo()) resultado = false;
    if(!validarTelefono()) resultado = false;
    if(!validarEdad()) resultado = false;
    if(!validarContrasena()) resultado = false;
    if(!validarConfirmar()) resultado = false;
    if(!validarPrograma()) resultado = false;
    if(!validarTerminos()) resultado = false;

    btnRegistrar.disabled = !resultado
    return resultado;
}


function enviarFormulario(){
    event.preventDefault();

    if(validarFormulario()){
        mensajeFinal.textContent = "¡Estudiante registrado correctamente!";
        mensajeFinal.style.color = "green";
        formulario.reset();

        let campos = document.querySelectorAll("input, select");
        for (let i = 0; i < campos.length; i++){
            campos[i].classList.remove("error", "exito");
        }
        let mensajes = document.querySelectorAll("small");
        for (let i = 0; i < mensajes.length;i++){
            mensajes[i].textContent ="";
            mensajes[i].className = "";
        }

        btnRegistrar.disabled = true;
    }
}
formulario.addEventListener("submit", enviarFormulario)
