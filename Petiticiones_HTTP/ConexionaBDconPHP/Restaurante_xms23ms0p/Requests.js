let tabla = document.querySelector(".table tbody");
let url = "http://localhost/API_Restaurante/"

let plato = document.querySelector(".plato");
let cliente = document.querySelector(".cliente");
let precio = document.querySelector(".precio");
let observacion = document.querySelector(".observacion");
let fecha = document.querySelector(".fecha");
let imagen = document.querySelector(".imagen");
let guardar = document.querySelector(".btn-guardar");
let actualizar = document.querySelector(".btn-actualizar");

//Evento guardar al botón guardar
guardar.addEventListener("click", () => {
    validarDatos()
})

TraerPedidos(url)
//Realizar petición
async function TraerPedidos(ruta) {
    try {
        let datos = await fetch(ruta, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        //Comprobar que no haya errores en la petición 
        if (!datos.ok) {
            throw new Error("No se pudo realizar la petición")
        }

        let pedidos = await datos.json();
        pedidos.forEach((p, i) => {
            let fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${p.id}</td>
                <td>${p.plato}</td>
                <td>${p.cliente}</td>
                <td>${p.precio}</td>
                <td>${p.observacion}</td>
                <td>${p.imagen}</td>
                <td>${p.fecha}</td>
                <td>${p.estado}</td>
                <td>
                    <span class="btn btn-warning"> Editar </span>
                    <span class="btn btn-danger"> Eliminar </span>
                </td>
            `
            tabla.appendChild(fila)
        })

    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

//Función para validar los datos
function validarDatos() {
    if (plato.value == "" || cliente.value == "" || precio.value == "" || fecha.value == "" || observacion.value == "") {
        alert("Debes completar todos los datos");
        return;
    }
    else {
        let pedido = {
            "plato": plato.value,
            "cliente": cliente.value,
            "precio": precio.value,
            "observacion": observacion.value,
            "fecha": fecha.value,
            "imagen": imagen.value,
            "estado": "Pendiente",
        }
        console.log(pedido);
        plato.value = "";
        cliente.value = "";
        precio.value = "";
        observacion.value = "";
        fecha.value = "";
        imagen.value = "";
        return pedido;
    }

}

//Enviar datos al BackEnd
async function enviarPedido(pedido) {
    try {
        //Enviar datos al backend, aqupi empieza
        let datos = await fetch(ruta, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: pedido
        });
        //Respuesta del servidor
        if (!datos.ok) {
            throw new Error("No se pudo realizar la petición")
        }
        let mensaje = await datos.text();
        alert(mensaje);
        console.log(mensaje)
    }
    catch (e) {
        console.log("Error :" + e)
    }
}