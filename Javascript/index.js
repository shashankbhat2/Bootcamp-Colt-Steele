const logger = require('nodelogeasy')
//var & const
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

//Console 
logger.log('hello')
logger.errorlog('error!')
logger.warnlog('warn')
//Conditionals
