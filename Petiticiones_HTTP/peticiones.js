let d = document;
let button = d.querySelector(".boton")
let result = d.querySelector(".resultado")
let url_peticion = "http://localhost/Promises_AP8/message.txt"
let url_peticion2 = "http://localhost/Promises_AP8/peliculas.txt"

//Escuchar evento de click al botón
button.addEventListener("click", function () {
    Hacer_Peticion(url_peticion2);
})


//"Esta parte siempre va a ser la misma cuando ustedes se van a conectar a un servidor"
function Hacer_Peticion(url) {
    //Método que realiza petición
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((datos) => datos.json()).then((mensaje) => {
        mensaje.peliculas.forEach((peli, i) => {
            result.innerHTML += `
             <div class="container">
                             <p> Película: ${peli.name}</p>
                <p> Estudio: ${peli.Studio}</p>
                <p> Lanzamiento: ${peli.Lanzamiento}</p>
                <hr/>
             </div>
                `
        })
    }).catch((error) => console.log(error))
}

//Se conecta por medio de la URL
//Cucuracha permite acceso

//Status del servidor
/*
Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:

Respuestas informativas (100–199),
Respuestas satisfactorias (200–299),
Redirecciones (300–399),
Errores de los clientes (400–499),
y errores de los servidores (500–599).

*/ 