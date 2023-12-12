let url = 'https://api.openweathermap.org/data/2.5/weather?lat=6.253306&lon=-75.569961&appid=d9a146d9b0dc98f11b8b148f91b1282f'
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
           <td class="text-center">${data[i].humidity}</td>
           <td class="text-center">${data[i].country}</td>
           <td><img class="img-fluid" src="${data[i].name}" alt=""></img></td>
       </tr>
           `
    }

}
//https://rapidapi.com/

/*
{"coord":{"lon":-75.57,"lat":6.2533},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"base":"stations","main":{"temp":293.23,"feels_like":293.67,"temp_min":293.23,"temp_max":295.25,"pressure":1022,"humidity":91},"visibility":10000,"wind":{"speed":2.57,"deg":60},"clouds":{"all":20},"dt":1702342056,"sys":{"type":2,"id":2084700,"country":"CO","sunrise":1702292555,"sunset":1702334912},"timezone":-18000,"id":3674962,"name":"Medellín","cod":200}
*/ 