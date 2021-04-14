const express = require('express')

//Goal : To get a server up and running 


const app = express()



const PORT = 8080;

app.listen(PORT, () => {
    console.log(`App has started at ${PORT}`)
})

// app.use(() => {
//     console.log("We got a new request")
// })

// app.use((req, res) => {
//     console.log('We got a request!')
//     res.send("Hello")
// })

//Routing
app.get('/', (req, res) => {
    res.send(`Welcome to the Pet Store <a href='/dogs'>Go to Dogs</a> <a href='/cats'>Go to Cats</a>`);
})


app.get('/cats', (req,res) => {
    res.send('Meow')
})

app.get('/dogs', (req, res) => {
    res.send('woof')
})

app.post('/', (req, res) => {
    res.send('Got a request')
})

//Pattern (Dynamic Routes)

app.get(`/bhat/:name`, (req, res) => {
    console.log(req.params)
    res.send(`Hello ${req.params.name}`)
})

app.get('/search', (req, res) => {
    const {q} = req.query;
    res.send(`<h1>${q}</h1>`)
})
