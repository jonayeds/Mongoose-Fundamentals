const fs = require("fs")

// reading a text file [ Synchronous operation ]
const readText = fs.readFileSync("./text/read.txt", "utf-8") // --> "utf-8" to converting a buffer to a string   
console.log(readText)


//  Writing in a text file [ synchronous operation ]
const writtenText = fs.writeFileSync("./text/write.txt", readText+"This is my written text") //--> will write the second parameter to the path given on the first parameter { if there's no file in the path, it will create a file and write on that  }
console.log(writtenText)
