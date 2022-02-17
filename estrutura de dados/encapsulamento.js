/*
// Estrutural
let altura = 50
let largura = 60

function calcularArea() {
    return altura * largura;
}

let area = calcularArea(); */

//Orientação a Objetos
class Poligono{
    constructor(altura, largura) {
            this.altura = altura;
            this.largura = largura;
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    }
}

//Criar o objeto
let poligono = new Poligono(50, 60)
console.log(poligono.#calcularArea());
