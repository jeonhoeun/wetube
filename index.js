console.log("start file")
var express = require('express')
var app = express()
const PORT = 4000
function handleListen(){
  console.log(`Listening on : http://localhost:${PORT}`)
}

function handleGetSubPath(req,res){
  res.send("Here is Subpath")
}

function handleGetHome(req,res){
  //console.log(req)
  res.send("from home")
}
app.listen(PORT, handleListen)

app.get("/",handleGetHome)
app.get("/subpath",handleGetSubPath)

console.log("end file")