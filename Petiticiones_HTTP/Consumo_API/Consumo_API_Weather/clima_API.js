let url = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=d9a146d9b0dc98f11b8b148f91b1282f'
fetch(url)
.then(res => res.json())
.then(data => mostrarImagenes(data))
.catch(error => console.log(error))

function mostrarImagenes(data) {
    console.log(data)
    let cuerpo_tabla = document.querySelector(".imagenes");

    for (let i = 0; i <= 9; i++) {
        cuerpo_tabla.innerHTML += `
        <tr>
           <td class="text-center">${data[i].id}</td>
           <td class="text-center">${data[i].title}</td>
           <td><img class="img-fluid" src="${data[i].thumbnailUrl}" alt=""></img></td>
       </tr>
           `
    }

}
//https://rapidapi.com/