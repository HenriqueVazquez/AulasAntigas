const { inherits } = require('util');
const { EventEmitter } = require('events');

function Character(name) {
    this.name = name;
}

inherits(Character, EventEmitter);

const chapolin = new Character('Chapolin');
const tio = new Character('Tio');

chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`));
tio.on('help', () => console.log(`Eu! o ${tio.name} colorado!`));

console.log('Oh! E agora quem poderá me defender?');
chapolin.emit('help');
tio.emit('help');