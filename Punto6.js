let selectorSabores = document.querySelector('.nieve')

selectorSabores.addEventListener('change', function () {
    let resultadoSabor = document.querySelector('.resultado')
    resultadoSabor.textContent = `Te gusta el sabor ${selectorSabores.value}`
})