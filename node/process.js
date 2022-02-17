
console.log(process.argv);

const Name = process.argv[3];
const lastName = process.argv[5];

console.log(`seu nome é ${Name} ${lastName}`);


const callFuncion = require('./flags');

console.log(`Oi ${callFuncion('--name')}, ${callFuncion('--greeting')}`);
