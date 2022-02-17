// Função impura

/* Exemplo 1: está dependendo de dado externo que não foi passado como parâmetro 
function calculateCircumference(radius) {
    return Math.PI * (radius + radius) / 2
}

/* Exemplo 2: está alterando um dado externo 
let person = {
    name: 'Rafael Camarda',
    age: 'jovem'
}

function chargeName(name){
    person.name = name
}

//Função pura

//Exemplo 1
const calculateCircumference = function (pi, radius) {
    return pi * (radius + radius)
}


*/

// com arrow function
const calculateCircumference = (pi, radius) => pi * (radius + radius);

console.log(calculateCircumference(Math.PI, 5 ))

// exemplo 2

const changePersonName = (person, name) =>( { ...person, name })