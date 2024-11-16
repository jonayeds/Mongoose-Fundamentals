const EventEmitter = require("events") 
const myEmitter = new EventEmitter()
//Listener
myEmitter.on("birthday", ()=>{ //--> Listener 1 ( work when the event "birthday" is emitted )
    console.log("happy birthday")
})

myEmitter.on("birthday", (gift)=>{ // --> Listener 2 ( work when the event "birthday" is emitted ) { Parameter received on the callback function is the second parameter sent on emit }
    console.log(`sending a ${gift} gift`)
})

myEmitter.emit("birthday", "watch") //--> emitting the event "birthday" { second parameter is sending to event listeners }
