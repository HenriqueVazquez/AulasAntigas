const pilotos = ["Senna", "Prost", "Schumacher", "Hamilton"]

// a indexação (index) começa pelo 0
console.log(pilotos[0])
// resultado Senna 
console.log(pilotos.length)

for(let piloto of pilotos) {
    console.log(piloto)
    }

    pilotos.push("Alonso")
    console.log(pilotos)

    // encontrar um elemento 
    const senna = pilotos.find(piloto => piloto === "Alonso" )
    console.log(senna)

    // deletar um elemento 
    pilotos.splice(1, 1)
    console.log(pilotos);
    pilotos.pop();
    console.log(pilotos);
