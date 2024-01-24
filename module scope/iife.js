// immediately invoked function expression

(function (name, prefix) {
    const superHero = "Batman";
    console.log(`${name} ${prefix}${superHero}`);
})("Hello", "Mr.");

(function (name, prefix) {
    const superHero = "Superman";
    console.log(`${name} ${prefix}${superHero}`);
})("Hi", "Mr.");

// (function (){
    // module code
// })()