// navigator.geolocation.getCurrentPosition((position)=> {
//     let lat = position.coords.latitude
//     let lon = position.coords.longitude
// })

const API_key = "d9a146d9b0dc98f11b8b148f91b1282f"


let url = `https://openweathermap.org/api`

//https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
})
    .then(res => res.json())
    .then(data => mostrarImagenes(data))
    .catch(error => console.log(error))

function mostrarImagenes(data) {
    console.log(data)
    let cuerpo_tabla = document.querySelector(".imagenes");

        cuerpo_tabla.innerHTML += `
        <tr>
           <td class="text-center">${data.main.feels_like} K </td>
           <td class="text-center">${data.name}</td>
           <td class="text-center"> ${data.timezone}</td>
       </tr>
           `

    // data.forEach((peli, i) => {
    //     result.innerHTML += `
    //      <div class="container">
    //                      <p> Película: ${peli.name}</p>
    //         <p> Estudio: ${peli.Studio}</p>
    //         <p> Lanzamiento: ${peli.Lanzamiento}</p>
    //         <hr/>
    //      </div>
    //         `
    // })


}

//https://rapidapi.com/

/*
{"coord":{"lon":-75.57,"lat":6.2533},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"base":"stations","main":{"temp":293.23,"feels_like":293.67,"temp_min":293.23,"temp_max":295.25,"pressure":1022,"humidity":91},"visibility":10000,"wind":{"speed":2.57,"deg":60},"clouds":{"all":20},"dt":1702342056,"sys":{"type":2,"id":2084700,"country":"CO","sunrise":1702292555,"sunset":1702334912},"timezone":-18000,"id":3674962,"name":"Medellín","cod":200}
*/ 