function greet(name){
    console.log(`Hi ${name}`);
}

function higherOrderFunction (callback){
    const name = "Harsh";
    callback(name);
}

higherOrderFunction(greet);