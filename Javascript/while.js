//While loop - Break
// let input = prompt("hey say something")
// while(true){
//     input = prompt(input);
//     if(input.toLowerCase() === 'stop copying me') break;
// } 

// console.log('You win!')

// Guessing Game

// let max = parseInt(prompt("Enter your maximum number"));
// while(!max){
//     max = parseInt(prompt("Enter a valid number"));
// }

// const target = Math.floor((Math.random()*max))+1;

// let guess = parseInt(prompt("Enter your guess"));

// let guessCounter = 0

// while(parseInt(guess) !== target){
//     guessCounter += 1;
//     if(guess > target){
//        guess =  prompt('Too high! Guess again.');
//     }else (guess < target){
//         guess = prompt('Too low! Guess again');
//     }
    
// }

// console.log("It took you " + guessCounter + " times to guess")


// for of loop
// const subreddits = ['memes', 'cats', 'pics', 'soccer', 'react']

// for(let sub of subreddits){
//     console.log(sub)
// }

// for(let char of 'Shashank'){
//     console.log(char)
// }

// const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// for(let num of numbers){
//     console.log(Math.pow(num,2))
// }

const testScores = {
    Shashank : 60,
    Nikhil : 20,
    Cherishma: 50,
}

// Object.values gives the values in the Object literal
let total = 0
for(let score of Object.values(testScores)){
    console.log(score)
    total += score;
}

console.log(total)

