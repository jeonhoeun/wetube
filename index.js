console.log("start file")
import { SSL_OP_EPHEMERAL_RSA } from "constants";
import express from "express";
import { nextTick } from "process";
//var express = require('express')
var app = express()
const PORT = 4000
const handleListen = () => console.log(`Listening on : http://localhost:${PORT}`)
const handleGetSubPath = (req,res) =>  res.send("Here is Subpath")
const handleGetHome = (req,res) => res.send("from home")
const middleWare = (req,res,next) => {
  console.log("Middleware");
  next();
}

const middleWare2 = (req,res,next) => {
  console.log("Middleware2");
  next();
}

app.use(middleWare) // 전역으로 middleware를 사용하는방법. 콜 한 이후부터의 route에 적용된다.

app.listen(PORT, handleListen)
       
app.get("/",handleGetHome) 
app.get("/subpath",middleWare,middleWare2, handleGetSubPath) // 해당 path에만 middleware를 적용하는 방법. middleware는 여러개 둘수있음

console.log("end file")