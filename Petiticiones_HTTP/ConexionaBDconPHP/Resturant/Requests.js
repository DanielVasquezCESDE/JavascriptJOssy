let tabla = document.querySelector(".table tbody");
let url = "http://localhost/API_Restaurante/"

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
        if ( !datos.ok ) {
            throw new Error("No se pudo realizar la petición")
        }
        
        let pedidos = await datos.json();
        pedidos.forEach((p, i)=>{
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
            `
            tabla.appendChild(fila)
        })

    } catch(error) {
        console.log(`Error: ${error}`)
    }
}