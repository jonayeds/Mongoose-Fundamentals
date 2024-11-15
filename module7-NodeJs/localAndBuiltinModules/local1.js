const add = (param1, param2)=>{
    return (param1+param2)
}
const a = 10;


//module.exports = add //-->exporting add function to use on other files

module.exports = {
    add, a
}

console.log("hit")