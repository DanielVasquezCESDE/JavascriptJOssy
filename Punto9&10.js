//SCROLL: Aumentan los px de forma descendente

//Aquí se usa la propiedad de la ventana del navegador scrollY para saber el valor de la posicion actual del scroll en px
let posicionPrevia = window.scrollY;

window.onscroll = function() {
    let menuFijo = document.querySelector("div")
    //aQUÍ SE CAPTURA LA POSICIÓN LUEGO DE HACER SCROLL
    let posicionActual = window.scrollY;
    //Aquí se determina la lógica para saber cuando se baja o sube el scroll
        //Si la pos. anterior es mayor a la actual entonces se subió
    if (posicionPrevia > posicionActual) {
        menuFijo.style.backgroundColor = "black"; // Reemplaza 'colorOriginal' con el color inicial
      } else {
        //Si la pos. anterior es menor a la actual entonces se bajó
        menuFijo.style.backgroundColor = "olive"; // Reemplaza 'nuevoColor' con el color al bajar
      }
    
      posicionPrevia = posicionActual;
    
}