import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"

// configuration dotenv
dotenv.config()

// creating a Exppress APP
const app: Express = express()
const port: string | number = process.env.PORT || 3002

// routesnpm i

app.get('/', (req: Request, res: Response)=>{
  res.send(
    'welcome to my first typescript proyect'
  )
})

app.get('/home', (req: Request, res: Response)=>{
  res.send(
    'home'
  )
})




// running server
app.listen(port, ()=>{console.log(`server running on port ${port}`)})