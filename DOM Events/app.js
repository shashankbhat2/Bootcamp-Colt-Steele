// const btn = document.querySelector('#v2')
// let i = 0;
// btn.onclick = function(){
//     document.body.append(`You clicked me! ${i+1} times`)
// }

// const btn_new = document.querySelector('#v3')

// btn_new.onmouseover = function scream (){
//     document.body.append('Stop touching me'.toUpperCase())
// }
 
// const products = document.querySelector('.products')
// const info_block = document.createElement('div')
// products.onmouseover = function info(){
//     info_block.innerHTML = "paychex"
//     products.appendChild(info_block)
// }
// products.onmouseout = function info(){
//     info_block.remove()
// }


// const btn3 = document.querySelector('#btn2')
// btn3.addEventListener('mouseup', function(){
//     document.body.append('Clicked!')
// })

    // const usernameInput = document.querySelectorAll('input')[0];
    // const opinionInput = document.querySelectorAll('input')[1];
    // console.log(usernameInput.value, opinionInput.value)

const list = document.querySelectorAll('li')
for(let li of lis){
    li.addEventListener('click', function(){
        li.remove();
    })
}

const opinionForm = document.querySelector('#opinionform')
opinionForm.addEventListener('submit', function (e){
    e.preventDefault(); 
    let username = opinionForm.elements.username;
    let opinion = opinionForm.elements.opinion;
    createOpinion(username.value, opinion.value)
    username.value = '';
    opinion.value = '';
})
const userOpinion = document.querySelector('.opinion-card');
userOpinion.addEventListener('click', function(e) {
    console.log(e)
})
const createOpinion = (username,opinion) =>{
    const newUser = document.createElement('p');
    newUser.setAttribute('classname', 'username');
    newUser.append(username);
    const newUserOpinion = document.createElement('span');
    newUserOpinion.setAttribute('classname', 'opinion');
    newUserOpinion.append(opinion) ;
    userOpinion.appendChild(newUser);
    userOpinion.appendChild(newUserOpinion);
}