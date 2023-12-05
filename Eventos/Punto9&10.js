//SCROLL: Aumentan los px de forma descendente


//Aquí se usa la propiedad de la ventana del navegador scrollY para saber el valor de la posicion actual del scroll en px
let posicionPrevia = window.scrollY;

let botonScrollUp = document.querySelector("#myBtn")

window.addEventListener("scroll", function() {
  let posicionActual = window.scrollY;
  //aQUÍ SE CAPTURA LA POSICIÓN LUEGO DE HACER SCROLL

    let menuFijo = document.querySelector("div")
  
    //Aquí se determina la lógica para saber cuando se baja o sube el scroll
        //Si la pos. anterior es mayor a la actual entonces se subió
    if (posicionPrevia > posicionActual) {
        menuFijo.style.backgroundColor = "black"; // Reemplaza 'colorOriginal' con el color inicial

      } else {
        //Si la pos. anterior es menor a la actual entonces se bajó
        menuFijo.style.backgroundColor = "olive"; // Reemplaza 'nuevoColor' con el color al bajar

      }
      posicionPrevia = posicionActual;
    

    //Aquí se tiene que, si se hace scrollhacia abajo mayor a 1 px, aparece el botón y si se da clic, este reposiciona el scrollY en cero, por lo que desaparece
    if (this.scrollY > 1) {
      botonScrollUp.addEventListener("click", function() {
        window.scrollTo(0, 0)
      })
      botonScrollUp.style.display = "block"
    }
    else {
      botonScrollUp.style.display = "none"
    }
});

