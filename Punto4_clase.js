let desplegablesAcordeon = document.querySelectorAll(".accordion");
let contenidoAcordeon = document.querySelectorAll(".panel");

for (let i = 0; i < contenidoAcordeon.length; i++) {
    //Se muestra si se le da click y se oculta al siguiente click
    desplegablesAcordeon[i].addEventListener("click", function () {
        contenidoAcordeon[i].classList.toggle("panel")
    });
    //Se oculta también si se le da click en el texto
    contenidoAcordeon[i].addEventListener("click", function () {
        contenidoAcordeon[i].classList.toggle("panel")
    })
}