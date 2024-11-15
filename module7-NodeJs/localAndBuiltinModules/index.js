
// Local Modules
const {a, add} = require("./local1")  //importing local1.js to use functions and variables
const {a:b, add:add3}  = require("./local2") // using name elias to use imported variables and functions
 console.log(add(2,5)) //accessing the exported function 
 console.log(a) // accessing the exported variable
 console.log(add3(1,2,3))


 //Built in Modules
const path  = require('node:path')

console.log(path.parse("/C:/Webdev/Mongoose&MongoDB/Fundamentals/module7-NodeJs/localAndBuiltinModules/index.js"))