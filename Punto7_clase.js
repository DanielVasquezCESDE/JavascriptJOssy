
                        /* 
                        Eventos del formulario:
                            1. focus (recuadro negro)
                            2. blur (cuando no se está en foco)
                        Eventos del teclado:
                                1.1. keyup
                                1.2. keydown
                                1.3. keypress

                                Expresiones regulares /[a-z]/
                                - Donde se guardan los parámetros o patrones
                        */


let cajaUsuario = document.querySelector("#usrname");
let cajaContraseña = document.querySelector("#psw");
let mensaje = document.querySelector("#message");

//Estos sopn los mensajes de correcto o incorrecto
let lowercaseMssg = document.querySelector("#letter")
let capitalMssg = document.querySelector("#capital")
let numberMssg = document.querySelector("#number")
let lengthMssg = document.querySelector("#length")
let caracterMssg = document.querySelector("#caracter")

    //Patrones, aquí se ponen los valores que deben coincidir (con lo que se va acomparar o verificar)
    let lowercase = /[a-z]/
    let intergers = /[0-9]/
    let uppercase = /[A-Z]/
    let caracterEsp = /[!#$%&/?*]/

    //Si este campo está fuera de foco, o fuera de contraseña, no se muestran los mensajes de correcto o incorrecto
cajaContraseña.addEventListener("blur", function() {
        mensaje.style.display = "none";
    })
    //Si este campo está dentro de foco (seleccionado), SE muestran los mensajes de correcto o incorrecto
cajaContraseña.addEventListener("focus", function () {
    mensaje.style.display = "block"
})



/*Aquí se van transformando los mensajes durante el tecleo de la clave. Mejor dicho, después de cada mero tecleo se ejecuta todo lo de la función,
por lo que se va evaluando caracter por caracter (coincide = verde (correcto) y no coincide = rojo (incorrecto))
*/
cajaContraseña.addEventListener("keyup", function () {
    //Aquí va registrando lo que teclea en la consola
                                //la propiedad value va guardando lo que se ingresa
    console.log("Typeando: " + cajaContraseña.value)

        //EVALÚA MINÚSCULAS

                            //Si el caracter que se escribe coincide con los patrones de lowercase,
    if (cajaContraseña.value.match(lowercase)) {
        //Se desmarca la clase invalid, quitando los estilos para la clase
        lowercaseMssg.classList.remove("invalid")
        //Se marca o agrega la clase valid, aplicando los estilos para clase
        lowercaseMssg.classList.add("valid")
    }
    else {
        lowercaseMssg.classList.add("invalid")
        lowercaseMssg.classList.remove("valid")
    }

        //EVALÚA MAYÚSCULAS

    if (cajaContraseña.value.match(uppercase)) {
        capitalMssg.classList.remove("invalid")
        capitalMssg.classList.add("valid")
    }
    else {
        capitalMssg.classList.add("invalid")
        capitalMssg.classList.remove("valid")
    }

        //EVALÚA NÚMEROS ENTEROS

    if (cajaContraseña.value.match(intergers)) {
        numberMssg.classList.remove("invalid")
        numberMssg.classList.add("valid")
    }
    else {
        numberMssg.classList.add("invalid")
        numberMssg.classList.remove("valid")
    }

        //EVALÚA SI LA LONGITUD ES IGUAL O MAYOR A 8 CARACTERES


    if (cajaContraseña.value.length >= "8") {
        lengthMssg.classList.remove("invalid")
        lengthMssg.classList.add("valid")
    }
    else {
        lengthMssg.classList.add("invalid")
        lengthMssg.classList.remove("valid")
    }

        //EVALÚA SI CONTIENE ALGUNO DE LOS CARACTERES ESPECIFICADOS


    if (cajaContraseña.value.match(caracterEsp)) {
        caracterMssg.classList.remove("invalid")
        caracterMssg.classList.add("valid")
    }
    else {
        caracterMssg.classList.add("invalid")
        caracterMssg.classList.remove("valid")
    }

})

