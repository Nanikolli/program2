const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => {
  res.send("hello")
})

app.get( '/boop' , (req, res) => {
  res.send("I got your nose")
})

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`)
})

