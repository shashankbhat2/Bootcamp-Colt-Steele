const express = require('express');
const app = express();
const PORT = 5000; 
const path = require('path')
var reload = require('reload')

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
  
//Accepting Formats
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//Listen
app.listen(PORT, () => {
    console.log('Listening to PORT',PORT);
})

reload(app)
/*
    ROUTES: 
    GET   /comments - list all comments
    POST /comments - create a new comment
    GET /comments/:id - get one comment (using id)
    PATCH /comments/:id - update a comment 
    DELETE /comments/:id - destroy a comment
*/
let opinions = []
app.get('/opinions', (req,res) => {
    res.render('opinions/index',{opinions})
})
app.post('/opinions', (req,res) => {
    const opinion = {
        dev: req.body.dev,
        opinion: req.body.opinion,
        agrees: 0
    }
    opinions.push(opinion)
    console.log(req.body)
    res.redirect('/opinions')
})
