//https://pokeapi.co/api/v2/pokemon/ditto


let d = document;
let btn_BucasPokemon = d.querySelector(".get-pokemon")
let pokemon_input = d.querySelector("#pokemon");
let imagen_pokemon = d.querySelector(".imagen_pokemon")
let nombre_pokemon = d.querySelector(".nombre")
let index_pokemon = d.querySelector(".index_P")
const musica = new Audio("game-background-music-62671.mp3")
// let descripcion_pokemon = d.querySelector(".descripcion");
// let tabla_clima = d.querySelector(".imagenes")



//https://api.openweathermap.org/data/2.5/weather?q=Medell%C3%ADn,CO&appid=d9a146d9b0dc98f11b8b148f91b1282f

btn_BucasPokemon.addEventListener('click', (e) => {
    e.preventDefault();

    musica.play()

    if (pokemon_input.value === '') {
        showError('Ambos campos son obligatorios...');
        return;
    }

    activarAPI(pokemon_input.value);
    //console.log(nameCity.value);
    //console.log(nameCountry.value);
})

function showError(message) {
    //console.log(message);
    const alert = document.createElement('p');
    alert.classList.add('alert-message');
    alert.innerHTML = message;

    form.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000);
}


function mostrarPokemon(data) {


    imagen_pokemon.innerHTML = `
    <img src="${data.sprites.front_default}" alt="Imagen de ${data.forms.name}" style="height: 100%; width: 100%;">
    `
    nombre_pokemon.innerHTML = `<h5 class="card-title"> ${data.forms[0].name} </h5>`;
    index_pokemon.innerHTML = `<h5 class="card-title"> N° 00${data.game_indices[0].game_index} </h5>`;


    /* console.log(name);
    console.log(temp);
    console.log(temp_max);
    console.log(temp_min);
    console.log(arr.icon); */
}


function activarAPI(nombre_pokemon) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nombre_pokemon}`;

    // const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`;

    fetch(apiUrl, {
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
                showError('Pokemon no encontrado...');
            } else {
                mostrarPokemon(dataJSON);
            }
            //console.log(dataJSON);
        })
        .catch(error => {
            console.log(error);
        })
}

