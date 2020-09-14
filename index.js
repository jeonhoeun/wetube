console.log("start file")
import express from "express";
//var express = require('express')
var app = express()
const PORT = 4000
const handleListen = () => console.log(`Listening on : http://localhost:${PORT}`)
const handleGetSubPath = (req,res) =>  res.send("Here is Subpath")
const handleGetHome = (req,res) => res.send("from home")
app.listen(PORT, handleListen)

app.get("/",handleGetHome)
app.get("/subpath",handleGetSubPath)

console.log("end file")