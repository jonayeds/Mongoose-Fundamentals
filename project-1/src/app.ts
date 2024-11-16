import express, { NextFunction, Request, Response } from 'express'
const app = express()
//parsers
app.use(express.json()) // --> middleware that parses the json file receiving from client
app.use(express.text()) //--> middleware that parses the text file receiving from client 

const logger = (req:Request, res:Response, next:NextFunction)=>{ //--> middleware 
    console.log(req.url, req.method, req.query)
    next() //--> calling next function after executing middleware
}

app.get('/',logger, (req: Request, res: Response) => {
    console.log(req.query)
  res.send("<h1>Hello Universe</h1>")
})
app.post("/",logger ,(req:Request, res:Response)=>{
    console.log(req.body)
    res.json({
        "message":"successfully received data"
    })
})

export default app
