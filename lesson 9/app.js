const Emitter = require('events');

let emitter = new Emitter();
let eventName = 'событие';

class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data);
    }
}

let user = new User();

user.on(eventName, (data) => {
    console.log(data);
});

emitter.on(eventName, (data) => {
    console.log(data);
});

emitter.on(eventName, (data) => {
    console.log(data);
});

emitter.emit(eventName, "А как тут флексить?");
user.sayHi("Приветики");