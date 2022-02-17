const { EventEmitter } =  require('events');

const event = new EventEmitter();

event.once('saySomething', (message) => {
    console.log('Eu ouvi você:', message);
});

event.emit('saySomething', "Henrique");
event.emit('saySomething', "Karen");
event.emit('saySomething', "Sophia");
