//JSON
// JSON.parse() 

/*used for parsing or converting a
 string type response from an api to a JS Object */ 



// const url = `https://api.cryptonator.com/api/full/btc-usd`
// async const getBTCinfo = () => {
//     try{
//         fetch(url)
//     }
// }


//Old way of fetching data 

// const myReq = new XMLHttpRequest()



// myReq.onload = function(){
//     console.log("All done with request")
//     const data = JSON.parse(this.responseText);
//     const name = document.createElement('h1')
//     const price = document.createElement('h2')
//     name.innerText = data.ticker.base;
//     price.innerText = data.ticker.price;
//     document.body.append(name)
//     document.body.append(price)
// }

// myReq.onerror = function (){
//     console.log("error!")
//     console.log(this)
// }

// myReq.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
// myReq.send();



//Fetch 

// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
//     .then(res => {
//         console.log("RESPONSE, waiting to be parsed", res) //Unparsed data 
//         return res.json() //parsed using JSON
//     })
//     .then(data => {
//         console.log('Data Parsed...');
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("ERROR", e)
//     })
// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await fetch(`https://api.cryptonator.com/api/ticker/btc-usd`)
//         const data = await res.json();
//     } catch (e) {
//         const error = document.createElement('h1')
//         error.innerText= 'Some thing went wrong!'
//     }
// }

//Axios
// axios.get(`https://api.cryptonator.com/api/ticker/btc-usd`)
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(e =>{
//         console.log('Error!', err)
//     })

const fetchBitcoinPrice = async () =>{
    try{
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res.data.ticker.base, res.data.ticker.price)
    }catch(e){
        console.log("Error",e);
    }
}

fetchBitcoinPrice()