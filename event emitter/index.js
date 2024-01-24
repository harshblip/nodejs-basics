const pizzaShop = require('./pizza-shop');
const EventEmitter = require('node:events');

// const event = new EventEmitter();
const pizaShop = new pizzaShop();

pizaShop.increment();
pizaShop.display();

pizaShop.on('order-numbers', () => {
    pizaShop.increment();
    pizaShop.display();
})

pizaShop.emit('order-numbers');

// event.on('pizza-order', (size, toppings) => {
//     console.log(`${size} pizza order with ${toppings} topping received`);
// })

// works in non-blocking manner. asynchronouslys

// event.emit('pizza-order', 'Large', 'pepperoni');