const button = document.querySelector('button')
const block = document.querySelector('div')
const color = document.querySelector('h1')


function randomColor(){
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener('mouseover', function(){
    const newColor = randomColor();
    block.style.backgroundColor = newColor
    color.innerText = newColor;
})

