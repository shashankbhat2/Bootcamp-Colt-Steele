//using my own console.log methods

const { clear } = require("console")

const { clear } = require("console");
const { title } = require("process");

// var & const

const pi = 3.14
var a = 2 + pi;
var a = 3 + pi;

// String Methods - slice(), indexOf()

var name = "haha that is so funny"
logger.log(name.slice(10), "hello")
logger.log(name.indexOf("s"))
logger.log(name.slice(-1))
logger.log(name.replace('haha', 'lol'))
logger.log(name)

// template literal - `${template.string}`

var product = "Iphone 12"
var price = "$" + 799;
logger.log(`${product} is ${price}`)

// Math Methods

logger.log('Math Methods')
logger.log(Math.ceil(Math.random() * 10)+ 100)
logger.log(Math.pow(0,0))

// Console

logger.log('hello')
logger.errorlog('error!')
logger.warnlog('warn')

// Conditionals

logger.log('Before')
if(1 + 2 === 2){
    logger.warnlog('Wrong Conditional');
}
logger.log('After')

// Day of the week

if(day === "monday"){
    logger.log("UGh monday bad!")
} else if(day === "tuesday"){
    logger.log('meh')
} else if(day === "friday"){
    logger.log('yay!')
}

// Array

var arr = [1,2,3,5]
c.log(arr.indexOf(1))
c.warnlog(arr)


// Array Methods

var cinema = ['Avengers Infinity War', 'Inception', 'Daredevil', 'The Dark Knight']

var stars  = [['RDJ', 'Tom Holland', 'Scarllet Johannsan'], ['Leonadro Dicaprio, Tom Hardy'], ['Christian Bale']];
cinema.pop(); //removes the element from the last
cinema.push('Sharknato') // pushes the element to the last
cinema.shift() // removes the element from the first 
cinema.unshift('Avengers: Endgame') //pushes the element to the first
c.log(cinema.indexOf('Inception')) // returns index of the element
c.log(cinema.reverse()) // reverses the array
c.log(cinema.includes('Sharknato')) //returns boolean values about the element's existance
c.log(cinema.length) //returns length of the array
c.log(cinema.concat(stars)) //concats two arrays
c.log(cinema.join()) //joins the array into one string
c.log(cinema.slice(0,3)) //slices the elements from starting to ending index
c.log(cinema.splice(2)) //splices from start to end (deletes)
c.log(cinema.sort()) // Sort

// multidimentional array

const gameboard = [
    ['X', 'O', 'X'],
    ['O', null, 'X'],
    ['O', 'O', 'X']
]

c.warnlog(gameboard[1][2])

// Object 

const product = {
    name: "Gummy Bears",
    inStock: true,
    price: 1.99,
    flavors: ['grape', 'apple', 'cherry']
}

c.log(product.name, product.flavors,product.inStock, product.price) //Accessing Objects
c.log(product['price'], product['name'], product['inStock']) // Alt method


const yearReview = {
    1999 : 'GOOD',
    2016 : 'MEH',
    2020 : 'BAD'
}

c.log(yearReview[2020]) // Should use only the alt method when accessing using number as keys

const midterm = {
    daniel : 96,
    thomas : 78,
}

c.log(midterm.thomas)

midterm.thomas = 79;

c.log(midterm.thomas) 


// JS loops 


for(let i=1; i<=10 ; i++){
    c.log(i);
}

for(let i=10; i>=0; i--){
    c.log(i)
}

function reverse(n){
    for(let i=n; i>=0; i--){
        c.warnlog(i);
    }
}

c.warnlog(reverse(5))

for(let i=0; i<6; i++){
    console.log('Da ba dee da ba daa');
}

// Even numbers from 0 to 20
for(let i=0; i<=20; i += 2){
    console.log(i)
}

for(let i=100; i>=0; i -= 10){
    console.log(i)
}

for(let i=25; i>=0; i -= 5){
    console.log(i)
}

// infinite loops

for(let i=20; i>=0; i++){
    console.log(i)
}


// looping over arrays 

const jsFrameworks = ['React', 'Vue', 'Angular', 'Adonis', 'Meteor','Express']
for(let i=0; i<jsFrameworks.length; i++){
    if(jsFrameworks[i] === 'React' || jsFrameworks[i] === 'Vue' || jsFrameworks[i] === 'Angular'){
        console.log(jsFrameworks[i] + " [Frontend]")
    } else {
        console.log(jsFrameworks[i] + " [Backend]")
    }
}

// Nested loops

for(let i=1; i<=10; i++){
    console.log(`i is ${i}`)
    for(let j=2; j<4; j++ ){
        console.log(`j is ${j}`)
    }
}

var matrix = [[1,2,3], [2,3,4],[3,4,5]];

for(let i=0; i<matrix.length; i++){
    const row = matrix[i];
    for(let j=0; j<row.length; j++){
        console.log(row[j])
    }
}

// While Loop

let count = 0; 

while(count < 10){
    count++
    console.log(count)
    if(count === 5){
        break;
    }
}

funtions 
function rollDie(){
    return Math.floor(Math.random()*6 + 1);
}

console.log(rollDie())



var a = 'sex'.trim().toString().trimEnd().trimStart()

console.log(a)

console.clear()
function repeatString(str, num){
    let result = '';
    for(let i=0; i<num;  i++){
        result += str;
    }
    return result;
}

console.log(repeatString('Hello ', 5))

note: return key word stops the execution

Function Scope

function collectEggs(){
    let totalEggs = 6;
}

collectEggs();
console.log(totalEggs) //


Block scope
let radius = 8;
if(radius > 0){
    const pi = 3.14;
    let msg = 'hi'
}

console.log(radius)
console.log(pi) // pi is only valid in the block (between {})


note: Block scoping is only valid for let and const;

Lexical Scope
function bankRobbery(){
    const heroes = ['Supe', 'Homelander', 'Bats', 'Wonder Women']
    function cryForHelp(){
        for(let hero of heroes){
            console.log(`Please help us ${hero.toUpperCase()}`)
        }
    }
    cryForHelp(); //Inner function can access outer function values 
}

bankRobbery()


Function expressions
const square = function (num){
    return num * num;
}

c.log(square(5))

Higher Order Functions
 
function  callTwice(func){
    func();
    func();
}

function rolldie(){
    const roll = Math.floor(Math.random()*6) + 1;
    console.log(roll)
}

callTwice(rolldie); // executes the function arguement 


Returning a function as a value

function makeMysteryFunc(){
   const rand = Math.random();
   if(rand > 0.5){
       return function(){
           console.log("Congrats! You won a Crore!")
       }
   }else{
       return function(){
           alert('This pc is effect with a Ransomware!!!')
       }
   }
}

makeMysteryFunc()

function isBetween(num){
    return num >= 50 && num <= 100
}

function makeBetweenFunc(min, max){
    return function(num){
        return num >= min && num <= max;
    }
}

const isNotMature = makeBetweenFunc(0,18) //Factory Function

console.log(isNotMature(1))

Methods

const myMath = {
    pi: 3.14,
    square: function (num){
        return num * num;
    },
    cube: function (num){
        return num ** 3;
    }
}

this keyword

const cat = {
    name: 'Jack',
    color: 'Black',
    breed: 'Bombay cat',
    meow(){
        console.log(`${this}`)
        console.log(`${this.name} says meow!`)
    }
}

cat.meow()

Try/Catch


try{
    //executable code
}catch{
    //errors
}

Callbacks and Array Methods
forEach, map, some & every, filter, reduce, arrow functions.



const numbers = [1,2,3,4,5,6]

// function print(e){
//     console.log(e)
}

numbers.forEach(function(el){
    console.log(el)
}) //inline function with in foreach for applying the function to each element;

numbers.forEach(function(el){
    if(el % 2 === 0){
        console.log(el)
    }
})




const movie = [
    {
        title: 'Alien',
        score: 94
    },
    {
        title: 'Dune',
        score: 95
    },
    {
        title: 'Blade Runner 2049',
        score: 90
    }
]

movie.forEach(function(m){
    console.log(`${m.title} - ${m.score}`)
})

map
const texts = ['lol', 'rofl','lmao', 'ttyl', 'fomo'];
const caps = texts.map(function(t){
    return t.toUpperCase();
})

console.log(texts)
console.log(caps)

const numbers = [1,2,3,4,5,6]

const doubles = numbers.map(function(num){
    return num * 2;
})

console.log(doubles);



const movie = [
    {
        title: 'Alien',
        score: 94
    },
    {
        title: 'Dune',
        score: 95
    },
    {
        title: 'Blade Runner 2049',
        score: 90
    }
]

const titles = movie.map(function(m){
    return m.title.toUpperCase();
})
const price = movie.map(function(m){
    return m.score;
})

console.log(titles)
console.log(price)

const ticket = movie.map(function(m){
    return `${m.title} : ${m.score}`
}) //maps every movie to its score and appends it to an array.

console.log(ticket)

Arrow Functions
const square = (n) => {
    return n*n;
}

const add = (x,y) => {
    return x+y;
}

console.log(add(1,2))

const rolldie = () => {
    return Math.floor(Math.random()*6)
}

console.log(rolldie())


Implicit Returns - not include return (only in const => function and one evalutaion expression)

const rollDie = () => (
    Math.floor(Math.random()*6) + 1
) //Implicit return type 1

console.log(rollDie())

const add = (a,b) => a + b; //implicit return type 2

const movies = [
    {
        title: 'The Dark Knight',
        price: '$' + 50,
        Audi: 2,
    },
    {
        title: 'Iron Man',
        price: '$' + 30,
        Audi: 4,
    },
    {
        title: 'Inception',
        price: '$' + 70,
        Audi: 5,
    }
]

const Cinema = movies.map(function(m){
    return   `${m.title} - ${m.price} at Audi ${m.Audi}`
})

const cinema = movies.map(m => (
    `${m.title} - ${m.price} at Audi ${m.Audi}`
))
console.log(cinema)
console.log(Cinema)


Time Methods
setTimeout(() => {
    window.alert("hello")
}, 200)  //function and time to run it runs once 


setInterval(() => {
    window.alert("Iphone 12 at $300")
}, 2000) //finction and time to run it at time intervals

// clearInterval(id) //clears the setInterval function with the id set to the setInterval function

//filter

const nums = [9,8,7,6,5,4,3,2,1];
const odds = nums.filter((n) => {
    return n === 4
}) //only the element that satisfies the condition is sent to the filtered array.

console.log(odds)

const movies = [
    {
        title: 'The Dark Knight',
        score: 96,
        year: 2008
    },
    {
        title: 'The Godfather',
        score: 95,
        year: 1992
    },
    {
        title: 'Jack & jill',
        score: 34,
        year: 2006
    }
]

const goodMovies = 
movies
    .filter(m => m.score > 80)
    .map(m => m.title); //chaining methods

const badMovies = movies.filter(m=> m.score < 70)
const recentMovies = movies.filter(m=> m.year > 2000)

console.log(goodMovies)
console.log(badMovies)
console.log(recentMovies)
console.log(movies)

var string = ['mark', 'catherine120', 'humngalungus12']
function validUsernames(str){
    return str.filter((s) => s.length > 10);
}

console.log(validUsernames(string))

Some and Every 

const scores = [80, 90, 23, 100, 95, 70, 65]

console.log(scores.some(s => s > 90)) // returns boolean value 
console.log(scores.every(s => s > 90)) // return if all the elements satisfy the callback condition

const numbers = [1,2,3,4,5,6];
function allEvens(arr){
    return arr.every(e => e%2 === 0);
};
console.log(allEvens(numbers))


Reduce - Execute a reducer function on each element of the array.

const numbers = [3405, 2045,2349, 248923];

const reducedNums = numbers.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue;
}) //Adds all the numbers

Basically saves the previous value and creates a new value

console.log(reducedNums)


const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

const total = prices.reduce((total,ele) => (total + ele))

console.log(total)

const evens = [2,4,6,8]
const evenInitial = evens.reduce((sum, num) => sum + num, 4) //set initial i.e accumulator value 

console.log(evenInitial)


const person = {
    firstName: 'Shashank',
    lastName: 'Bhat',
    fullName: function (){
        return `${this.firstName} ${this.lastName}`
    },
    fullName2: () => {
        return `${this.firstName} ${this.lastName}`
    } // does not work as fullname2 is a window object so the scope is outside the function
}

console.log(person.fullName2())

default params for functions 
old way
function rolldie(num){
    if(num === undefined){
        num  = 6 //default 
    }
    return Math.floor(Math.random() * num) + 1;
}

console.log(rolldie(20))


//new method
function rolldie2(a=6){
    return Math.floor(Math.random() * a) + 1;
}

console.log(rolldie2())

Spread


const numbers = [1,2,3,5,6]
const myMax = (...x) => {
    return Math.max(...x)
}
console.log(myMax(...numbers))


Array with spread

const cats = ['Blue', 'Scott', 'Grey']
const dogs = ['Rusty', 'Reacty', 'Vuey']

const allPets = [...cats, ...dogs]
console.log(allPets)

Spread with objects

const feline = {legs: 4, family:"Felidae"};
const canine = {legs: 4, family:"Caninae"}
const catDog = {...feline,...canine};
console.log(catDog)

Rest params

function sum(...nums){
    return nums.reduce((total, n) => total + n)
}
//Rest params - infinite params :D
console.log(sum(23,244,556,6))
Named params 

function raceResults(gold, silver, ...participants){
    console.log(`Gold medal goes to: ${gold}`);
    console.log(`Silver medal goes to: ${silver}`);
    console.log(`Participation certificate goes to: ${participants}`);
}

console.log(raceResults('Shashank', 'Suman',['Shashank R', 'Nikhil', 'Ramya']))


Destructuring Arrays / Objects 

const scores = [929321, 89931, 8883559, 388830, 3993]
const runner = {
    first: 'Shashank',
    lastname: 'Bhat',
    speed: '25km/hr'
}
const [highscore, midscore, lowscore] = scores; //Destructuring
const {first: firstName} = runner;
const {death: deathYear = 'N/A'} = runner;
console.log(deathYear)

console.log(highscore, midscore, lowscore)


Destructuring params
const user = {
    firstName: 'Shashank',
    lastName: 'Bhat'
}

function fullName({firstName: first, lastName: last}){
    return `${first} ${last}`
}

console.log(fullName(user))


