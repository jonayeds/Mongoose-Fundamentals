const http = require("http")
const fs = require("fs")
// creating a server using node.js
const server = http.createServer()

//server listener
server.on("request", (req,res)=>{
    if(req.url === "/readFile" && req.method === "GET");
        // streaming file reading 
        const readableStream = fs.createReadStream( process.cwd() + "/read.txt")
        readableStream.on("data", (buffer)=>{
            res.write(buffer)
        })
    // console.log(req.url, req.method)
    readableStream.on("end", ()=>{
        res.end("ta ta bye bye")
    })
}) 

server.listen(5000, ()=>{
    console.log("server is listening")
})
