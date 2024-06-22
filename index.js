require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!!!!')
})

app.get("/sam",(req,res)=>{
    res.send("hello sam")

})

app.get("/login",(req,res)=>{
    const d=res.sendDate;
    res.send(d)
    res.send("hello login")

})

app.get("/signup",(req,res)=>{
    res.send("hello signup")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})