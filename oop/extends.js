class Cat{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`
    }
}

class Dog extends Cat{
    constructor(name, age, breed){
        super()
        this.name = name;
        this.age  = age;
        this.breed = breed;
    }
    getBreed(){
        return `${this.name} is of ${this.breed}`
    }
    bark(){
        return
    }
}


const monty = new Cat('Monty', 9)
console.log(monty.eat());
const wayne = new Dog('Wayne', 5, 'Labrador');
console.log(wayne.getBreed() + '\n' + wayne.eat());

