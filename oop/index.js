// Factory function
// Returns methods from a function.

// function makeColor(r,g,b){
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;

//     color.rgb = function(){
//         const {r,g,b} = this;
//         return  `rgb(${r}, ${g}, ${b})`;
//     }

//     color.hex = function(){
//         const {r,g,b} = this;  
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }

//     return color;
// }

// const firstColor = makeColor(35,255,150);
// console.log(firstColor.hex());
// console.log(firstColor.rgb());

function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this)
}

// var newColor = new Color(23,45,556)
// console.log(newColor)


//Defining the functions on prototype object 

Color.prototype.rgb = function(){
    const {r, g, b} = this;
    return `rgb(${r},${g},${b})`
}

Color.prototype.hex = function(){
    const {r,g,b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

//Creating new objects
const color1 = new Color(40,40,29)
const color2 = new Color(30,40, 20)
console.log(color1.rgb(), color2.rgb()); 
console.log(color1.hex(), color2.hex());
console.log(color1.rgb === color2.rgb); 
console.log(color1.hex === color2.hex);


