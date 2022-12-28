const express = require('express')
const animeOnBroadcast = require("./test.js")

const app = express()
const port = process.env.PORT || 3000

app.get('/',async (req, res) => {
  
  const test = await animeOnBroadcast()

  console.log(test)

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})