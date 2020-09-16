console.log("start file")
import morgan from "morgan" // 로깅 미들웨어
import express from "express"
import helmet from "helmet" // 보안 미들웨어
import cookieParser from "cookie-parser" 
import bodyParser from "body-parser"

//var express = require('express')  이 문법은 Babel에의해 import express from "express" 로 이용가능

var app = express()
app.use(morgan("dev"))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(helmet())
export default app