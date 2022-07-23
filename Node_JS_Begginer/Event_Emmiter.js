// const events = require('events');

// const myEmitter = new events.EventEmitter();

// myEmitter.on("someEvent", function(mssg) {
//     console.log(mssg);
// });

// myEmitter.emit('someEvent', "the event was emitted");

const events = require('events');
const util = require('util');

const Person = function (name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

const james = new Person('james');
const mary = new Person('mary');
const rey = new Person('rey');

const people = [james, mary, rey];

people.forEach((person) => {
    person.on('speak', (mssg) => {
        console.log(`${person.name} said: ${mssg}`);
    });
});

james.emit('speak', 'hey dudes!');
rey.emit('speak', 'I want a curry');
