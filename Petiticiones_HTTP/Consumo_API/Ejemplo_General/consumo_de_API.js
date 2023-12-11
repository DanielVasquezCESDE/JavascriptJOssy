let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(res => res.json())
.then(data => mostrarData(data))
.catch(error => console.log(error))

function mostrarData(data) {
    console.log(data)
    let cuerpo_tabla = document.querySelector(".datos");
    data.forEach((user, i) => {
        cuerpo_tabla.innerHTML += `
         <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        </tr>
            `
    })

}