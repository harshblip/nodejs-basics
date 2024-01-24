class superHero {
    constructor(name){
        this.name = name;
    }

    getName(){
        console.log(this.name);
    }

    setName(name){
        this.name = name;
    }
}

module.exports = new superHero("Batman"); // instance of the class