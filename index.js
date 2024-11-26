require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
res.send('<h1> Twitter.com </h1>')
})

app.get('/login',(req,res)=> {
    res.send('<h2> Please login at UsamaCode')
})

app.get('/youtube',(req, res) => {
    res.send('<h2>Chai aur Usama </h2>')
})

app.listen(process.env.PORT, () => {
console.log(`Example app listening on port ${port}`)
})
