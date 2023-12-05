//Promesas - Peticiones 
//-Un tiempo de espera para una operación asíncrona, para recibir si una solicitud fue o no exitosa.
//Conectar front and back
//Peticiones HTTP para pasa

//Fiction
let marvel = [
    {
        name: 'Loki',
        studios: 'Marvel',
        release: '2023',
        genre: 'Action'
    },
    {
        name: 'Sonidos de libertad',
        studios: '20th Century Fox',
        release: '2022',
        genre: 'Crime'
    },
    {
        name: 'Shrek',
        studios: 'Universal',
        release: '2009',
        genre: 'Action'
    },
]

//Obtener los datos

function Obtener_Peliculas(pelicula) {

    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            if (pelicula.length != 0) {
                resolved(pelicula)
            } else {
                rejected("No available movies")
            }
        }, 1000)
    })

}


//Mostrar en consola
//console.log(Obtener_Peliculas(marvel)) //La consola no espera los 500 ms, aqupi se usan las promesas



//METHOD 1
//Manejo de promesas
/*
    then() = captura datos
    catch() = captura error
*/

// Obtener_Peliculas(marvel).then((peliculas) => {
//     peliculas.forEach((peli, i) => {
//         document.write(`
//         <div class="container">
//             <p> Película: ${peli.name}</p>
//             <p> Estudio: ${peli.studios}</p>
//             <p> Lanzamiento: ${peli.release}</p>
//             <p> Género: ${peli.genre}</p>
//             <hr/>
//         </div>
//             `
//         );
//     });
// }).catch((error) => { console.log(error) })

//----------------------------------------------------------------

//METHOD 2
//AYNC / AWAIT

async function Película(datos) {
    try {
        let peliculas = await Obtener_Peliculas(datos);
        peliculas.forEach((peli, i) => {
            document.write(`
            <div class="container">
                <p> Película: ${peli.name}</p>
                <p> Estudio: ${peli.studios}</p>
                <p> Lanzamiento: ${peli.release}</p>
                <p> Género: ${peli.genre}</p>
                <hr/>
            </div>
            `
            );
        });
    } catch (error) {
        console.log(error)
    }
}

Película(marvel)