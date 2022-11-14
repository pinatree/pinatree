const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/react_client/build/index.html')
})

app.use(express.static(__dirname + '/react_client/build/'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})