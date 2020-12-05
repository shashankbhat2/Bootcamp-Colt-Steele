/* 

HTTP Headers - type that is sent along with the request to get 
appropriate response type

ex:
text/html - gets/posts  html/text data 
application/json - gets/posts json data
text/plain  - gets/posts plaintext

*/
const url = 'https://icanhazdadjoke.com/';
const config = {headers: {Accept: 'application/json'}};


const getJokeButton = document.querySelector('.get-joke');
const jokeContainer = document.querySelector('.jokes')

const getDadJoke = async () => {
    const res = await axios.get(url, config);
    return res.data.joke
}

const addNewJoke = async () => {
    try{    const jokeText = await getDadJoke();
        const newJoke = document.createElement('li')
        newJoke.innerText = jokeText;
        jokeContainer.append(newJoke)
    }catch(e){
        return "NO JOKES AVAILABLE"
    }
}


getJokeButton.addEventListener('click', addNewJoke)
