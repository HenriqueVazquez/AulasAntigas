//Passo 1: Modelando
class Queue {
    constructor(){
        this.data= []
    }
    enqueue(item) {
        this.data.push(item);
        console.log(`${item} chegou na fila!`)
    }
    
    dequeue() {
    const item = this.data.shift();
    console.log(`${item} saiu da fila!`)
    }
}


//Passo 2: Utilizando
const fila = new Queue();

fila.enqueue('Henrique');
fila.enqueue('Karen');
fila.enqueue('Sophia');


fila.dequeue();
fila.dequeue();
fila.dequeue();