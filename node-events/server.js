var events = require('events');
var emitter = new events.EventEmitter();

//Handle what to do, when you hear a scream!
var findSourceOfScream = function () {
    console.log("I just heard a scream!\nLet us find the source!");
}

//start listening to someone's scream!
emitter.on('scream', findSourceOfScream);

//Somebody screams!
emitter.emit('scream');
