const fs = require("fs")

//Reading text [ Asynchronous operation]

fs.readFile("./text/read.txt", "utf-8" ,
    (err, data)=>{
    if(err) throw Error("Error Reading text")
    
    console.log(data)
    //writing text [ Asynchronous Operation ]
    fs.writeFile("./text/writeAsync.txt", )
}) 