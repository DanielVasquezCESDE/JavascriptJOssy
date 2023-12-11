let url = 'https://jsonplaceholder.typicode.com/photos'
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