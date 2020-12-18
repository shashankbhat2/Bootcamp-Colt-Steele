const jokeEngine = require('give-me-a-joke');
jokeEngine.getRandomDadJoke(function(joke){
    consoleJoke(joke)
})

function consoleJoke(joke){
    console.log(`${joke} 🤣🤣`);
}