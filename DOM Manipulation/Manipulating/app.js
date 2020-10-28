// const banner = document.getElementById('banner')

// const images = document.getElementsByTagName('img') //Collection of objects with same tags

// for(let img of images){
//     console.log(img.src)
// }

// const squareImages = document.getElementsByClassName('square');

// for(let img of squareImages){
//     console.log(img.src)
// }

// //querySelector
// document.querySelector('a[title="java"]') //Swiss Army Knife of selecting elements 
// document.querySelectorAll('a')


// const doneTodos = document.querySelectorAll(".done")
// const checkbox = document.querySelector("input[type=checkbox]")

// //Manipulating the DOM
// const heading = document.querySelector('h1')

// function changeText(){
//     heading.innerText="Hello"
// }

// function afterLoad(){
//     setTimeout(changeText, 1000)
// }

//Attribute select


// const img = document.querySelector('img')
  
// img.setAttribute('src', 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg')
// img.setAttribute('alt',"chicken")


//Addclass

// const h2 = document.querySelector('h2')

// h2.setAttribute('class', 'purple') //annoying way
// h2.classList.add('red') //easy way

// const li = document.querySelectorAll('highlight')


// for(let i of li){
//     i.classList.toggle('highlight')
// }

//parentElement
const firstBold = document.querySelector('b')
firstBold.parentElement.classList.add('purple')

//Create element
const h1 = document.createElement('h1')
h1.innerText="Hello"
document.body.appendChild(h1)

//Prepend ELement
const name = document.querySelector('.Name')
const h2 = document.createElement('h2')
h2.innerText="Hello!";
name.prependChild(h2)
