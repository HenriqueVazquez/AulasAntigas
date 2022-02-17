//setTimeout vai rodar uma função depois de x milisegundos

const timeout = 3000;
const finished = () => console.log('done!');

setTimeout(finished, timeout);
console.log('Mostrar');