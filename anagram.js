let frase1
let frase2

document.querySelector('#first').addEventListener('input', function (e) {
    frase1 = e.target.value
    frase1 = frase1.toLowerCase()
})

document.querySelector('#second').addEventListener('input', function (e) {
    frase2 = e.target.value
    frase2 = frase2.toLowerCase()
})

let frase1Array
let frase2Array

document.querySelector('#check').addEventListener('click', function () {

    frase1Array = []
    frase2Array = []

    for (let i = 0; i < frase1.length; i++) {
        if (frase1[i] !== ' ') {
            frase1Array.push(frase1[i]);
        }
    }

    for (let i = 0; i < frase2.length; i++) {
        if (frase2[i] !== ' ') {
            frase2Array.push(frase2[i]);
        }
    }

    mostrarResultado(frase1Array, frase2Array)
})

const mostrarResultado = function(frase1Array, frase2Array){
    if (frase1Array.length > 0 && frase2Array.length > 0) {
        frase1Array = frase1Array.sort()
        frase2Array = frase2Array.sort()
    }
    const respuesta = function () {
        if (JSON.stringify(frase1Array) == JSON.stringify(frase2Array)){
            return 'Las frases son anagramas!'
        }else {
            return 'Las frases no son anagramas.'
        }
    }

    document.querySelector('#resultado').innerHTML = ''
    const mostrarRta = document.createElement('h3')
    mostrarRta.textContent = respuesta()
    document.querySelector('#resultado').appendChild(mostrarRta)
}