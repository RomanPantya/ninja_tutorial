const {EventEmitter} = require('events');

const myEmitter = new EventEmitter();

myEmitter.on("Слава Україні!", function() {
       console.log("Героям слава!");
    });

myEmitter.on("Слава нації!", function(mssg) {
    console.log("Смерть ворогам!");
});

myEmitter.emit("Слава нації!")






