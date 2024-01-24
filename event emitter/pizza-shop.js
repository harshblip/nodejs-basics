const EventEmitter = require('node:events');

class pizzaShop extends EventEmitter {
    constructor(){
        super();
        this.counter = 0;
    }

    increment(){
        this.counter++;
    }

    display(){
        console.log(`number of orders are ${this.counter}`)
    }

}

module.exports = pizzaShop;