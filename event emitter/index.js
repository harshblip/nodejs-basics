const EventEmitter = require('node:events');

const event = new EventEmitter();

event.on('pizza-order', (size, toppings) => {
    console.log(`${size} pizza order with ${toppings} topping received`);
})

// works in non-blocking manner. asynchronouslys

event.emit('pizza-order', 'Large', 'pepperoni');