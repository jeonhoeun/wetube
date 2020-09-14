var express = require('express')
var app = express()
const PORT = 4000
function handleListen(){
  console.log(`Listening on : http://localhost:${PORT}`)
}

app.listen(PORT, handleListen)


// app.get('/', function (req, res) {
//   res.send('hello world')
// })