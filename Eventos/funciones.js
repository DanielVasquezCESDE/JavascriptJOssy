//variable de datos
/*let datos = [
    {"nombre":"Pepito", "telefono":53425452},
    {"nombre":"Rosa", "telefono":99888383},
    {"nombre":"Elias", "telefono":12212133}
];*/
//guardar la informacion en localStorage
//localStorage.setItem("clientes", JSON.stringify(datos));
//extraer la informacion de localStorage
//let clientes =  JSON.parse(localStorage.getItem("cliente"));
//mostrar la informacion
//console.log(clientes);
/*clientes.forEach( dato => {
    document.write ("Nombre: "+dato.nombre +"<br>" );
    document.write ("Telefono: "+dato.telefono +"<br>" );
    document.write ("<hr>" );
});*/
//document.write("Cliente: " + cliente);
//clear()
//removeItem()
//localStorage.removeItem("cliente");

/*Lineas 1-6: Se declaran las variables que se utilizarán para almacenar los datos del formulario.
Lineas 7-10: Se agrega un evento al botón de guardar. Cuando el botón se hace clic, se llama a la función obtenerDatos().
Linea 12: Se define la función obtenerDatos(). Esta función se encarga de obtener los datos del formulario y validarlos.
Lineas 13-16: Se valida que todos los campos del formulario estén completos. Si alguno de los campos está vacío, se muestra un mensaje de error.
Lineas 18-22: Si todos los campos están completos, se crea un objeto con los datos del formulario. Este objeto se retorna de la función.
Linea 24: Se define la variable claveLocal, que se utilizará para almacenar los datos en el almacenamiento local.
Linea 26: Se define la función guardarDatos(). Esta función se encarga de guardar los datos en el almacenamiento local.
Lineas 27-30: Se recuperan los datos que ya se hayan guardado en el almacenamiento local. Si no hay datos guardados, se crea un arreglo vacío.
Linea 32: Se agrega el nuevo dato al arreglo de datos.
Lineas 33-34: Se guardan los datos en el almacenamiento local.
Lineas 36-37: Se muestra un mensaje de confirmación.
Linea 39: Se define la función mostrarDatos(). Esta función se encarga de mostrar los datos en la tabla.
Lineas 40-42: Se recuperan los datos que se hayan guardado en el almacenamiento local. Si no hay datos guardados, se muestra un mensaje.
Lineas 44-55: Se recorre el arreglo de datos y se crea una fila en la tabla para cada dato. Cada fila contiene la información del pedido.*/ 


//variables globales
let cliente = document.querySelector(".cliente");
let producto = document.querySelector(".producto");
let precio = document.querySelector(".precio");
let imagen = document.querySelector(".imagen");
let observaciones = document.querySelector(".observaciones");
let btnGuardar = document.querySelector(".btn-pedido");
let bntActualizar = document.querySelector(".btn-actualizado");
let tabla = document.querySelector(".table tbody");



//agregar evento al boton
btnGuardar.addEventListener("click", function() {
    let datos = obtenerDatos();
    guardarDatos( datos );
    limpiarDatos();
    mostrarDatos();
});

//Muestra los datos del formulario alo recargar la página
document.addEventListener("DOMContentLoaded", function() {
    mostrarDatos()
})

//Evita la duplicación de los datos
function limpiarDatos() {

    let datosTabla = document.querySelector(".table tbody tr")
        datosTabla.forEach( (fila) => {
            fila.remove()
        })
}

//funcion para obtener los datos
function obtenerDatos() {
    //alert("cliente: "+ cliente.value)
    if( cliente.value == "" || producto.value == "" || precio.value == ""
    || imagen.value == "" || observaciones.value == "" ){
        alert("Los campos son obligatorios");
    }else{
        let datosForm = {
            cliente : cliente.value,
            producto : producto.value,
            precio : precio.value,
            imagen : imagen.value,
            observaciones : observaciones.value
        }
        console.log(datosForm);

        cliente.value = "";
        producto.value = "";
        precio.value = "";
        imagen.value = "";
        observaciones.value = "";

        //Aquí se retorna el objeto donde se guardan los datos ingresados en form
        return datosForm;
    }
}
let claveLocal = "pedidos";
//funcion para guardar los datos en localStorage
function guardarDatos( obj ) {
    let pedidos = [];
    let datosDeLocal =  JSON.parse(localStorage.getItem(claveLocal));
    if( datosDeLocal != null ){
        pedidos = datosDeLocal;
    }
    //Datos agreagdo por formulario
    pedidos.push(obj);
    localStorage.setItem(claveLocal, JSON.stringify( pedidos ));
    alert("datos guardados con exito :)");
}

//mostrar datos en la tabla
function mostrarDatos() {
    let pedidos = [];
    let datosDeLocal =  JSON.parse(localStorage.getItem(claveLocal));
    if( datosDeLocal != null ){
        pedidos = datosDeLocal;
    }

    pedidos.forEach((dato, i) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td> ${ i+1 } </td>
            <td> ${ dato.producto } </td>
            <td> ${ dato.cliente } </td>
            <td> ${ dato.precio } </td>
            <td> <img src="${dato.imagen}" width="30%"/> </td>
            <td> ${ dato.observaciones } </td>
            <td>
                <span onclick="editarPedido(${i})" class="btn btn-warning"> Editar </span>
                <span onclick="eliminarPedido(${i})" class="btn btn-danger"> Eliminar </span>
            </td>
        `;
        tabla.appendChild(fila);
    });

    //console.log(pedidos);
}

function eliminarPedido(posicion) {
    let pedidos = [];
    let datosDeLocal =  JSON.parse(localStorage.getItem(claveLocal));
    if( datosDeLocal != null ){
        pedidos = datosDeLocal;
    }

    let confirmar = confirm("¿Desea eliminar el pedido")

    if (confirmar) {
        //Se borra pedido con la posición y la cantidad a borrar a partir de esa posición
        pedidos.splice(posicion, 1)
        console.log(pedidos)
    }
    localStorage.setItem(claveLocal, JSON.stringify(pedidos))
    alert("Pedido eliminado con éxito")
    limpiarDatos()
    mostrarDatos()
}

function editarPedido(posicion) {
    let pedidos = [];
    let datosDeLocal =  JSON.parse(localStorage.getItem(claveLocal));
    if( datosDeLocal != null ){
        pedidos = datosDeLocal;
    }

    cliente.value = pedidos[posicion].cliente;
    producto.value = pedidos[posicion].producto;
    precio.value = pedidos[posicion].precio;
    observaciones.value = pedidos[posicion].observaciones;

    btnGuardar.classList.toggle("d-none")
    bntActualizar.classList.toggle("d-none")

    bntActualizar.addEventListener("click", function(){
        pedidos[posicion].cliente = cliente.value
        pedidos[posicion].producto = producto.value
        precio.value = pedidos[posicion].precio = precio.value
        observaciones.value = pedidos[posicion].observaciones = observaciones.value 
        
        localStorage.setItem(claveLocal, JSON.stringify(pedidos))
        alert("Order updated successfully")
        btnGuardar.classList.toggle("d-none")
        bntActualizar.classList.toggle("d-none")
        limpiarDatos();
        mostrarDatos();
    })
}