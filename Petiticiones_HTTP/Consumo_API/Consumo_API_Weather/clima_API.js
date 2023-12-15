// navigator.geolocation.getCurrentPosition((position)=> {
//     let lat = position.coords.latitude
//     let lon = position.coords.longitude
// })
let d = document;
let form = d.querySelector("#formulario")
let btn_clima = d.querySelector(".get-weather")
let ciudad_input = d.querySelector("#city");
let pais_input = d.querySelector("#country");
let tabla_clima = d.querySelector(".imagenes")



//https://api.openweathermap.org/data/2.5/weather?q=Medell%C3%ADn,CO&appid=d9a146d9b0dc98f11b8b148f91b1282f

btn_clima.addEventListener('click', (e) => {
    e.preventDefault();

    if (ciudad_input.value === '' || pais_input.value === '') {
        showError('Ambos campos son obligatorios...');
        return;
    }

    activarAPI(ciudad_input.value, pais_input.value);
    //console.log(nameCity.value);
    //console.log(nameCountry.value);
})

function showError(message) {
    //console.log(message);
    const alert = document.createElement('p');
    alert.classList.add('alert-message');
    alert.innerHTML = 
    `<h3 style="color: brown;">${message}</h3>`;

    form.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000);
}


function showWeather(data) {
    // const {name, main:{temp, temp_min, temp_max}, weather:[arr]} = data;

    // const degrees = kelvinToCentigrade(temp);
    // const min = kelvinToCentigrade(temp_min);
    // const max = kelvinToCentigrade(temp_max);

    let temp_Celsius = parseInt(data.main.temp - 273.15);

    tabla_clima.innerHTML = `
     <tr class="display-5">
        <td class="text-center" style = "text-shadow: 3px 3px 4px rgb(23, 21, 21);">${temp_Celsius} °C </td>
        <td class="text-center" style = "text-shadow: 3px 3px 4px rgb(23, 21, 21);">${data.name}</td>
        <td class="text-center" style = "text-shadow: 3px 3px 4px rgb(23, 21, 21);"> ${data.timezone}</td>
                                    <!--	  https://openweathermap.org/img/wn/04d@2x.png -->
    </tr>
    `;


    /* console.log(name);
    console.log(temp);
    console.log(temp_max);
    console.log(temp_min);
    console.log(arr.icon); */
}


function activarAPI(city, country) {
    const apiUrl = "http://api.openweathermap.org/data/2.5/weather";
    const API_key = "d9a146d9b0dc98f11b8b148f91b1282f"
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";

    const fullUrl = `${proxyUrl}${apiUrl}?q=${city},${country}&appid=${API_key}`;

    // const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`;

    fetch(fullUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(data => {
            return data.json();
        })
        .then(dataJSON => {
            if (dataJSON.cod === '404') {
                showError('Ciudad no encontrada...');
            } else {
                tabla_clima.innerHTML = '';
                showWeather(dataJSON);
            }
            //console.log(dataJSON);
        })
        .catch(error => {
            console.log(error);
        })
}



//https://rapidapi.com/

/*
{"coord":{"lon":-75.57,"lat":6.2533},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"base":"stations","main":{"temp":293.23,"feels_like":293.67,"temp_min":293.23,"temp_max":295.25,"pressure":1022,"humidity":91},"visibility":10000,"wind":{"speed":2.57,"deg":60},"clouds":{"all":20},"dt":1702342056,"sys":{"type":2,"id":2084700,"country":"CO","sunrise":1702292555,"sunset":1702334912},"timezone":-18000,"id":3674962,"name":"Medellín","cod":200}
*/ 