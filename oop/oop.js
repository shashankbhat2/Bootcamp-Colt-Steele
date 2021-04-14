class Color {
    constructor(r,g,b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    greet(){ //Not defined inside the class but on it (On the prototype of the class)
        const {g} = this;
        console.log(`${g}`);
    }
}

const c1 = new Color(13,34,4455);
c1.greet("Hello")