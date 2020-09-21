import express from "express"
import morgan from "morgan" // 로깅 미들웨어
import helmet from "helmet" // 보안 미들웨어
import cookieParser from "cookie-parser" 
import bodyParser from "body-parser"
import routes from "./routes"
import { localsMiddleware } from "./middlewares"
import globalRouter from "./routers/globalRouter"
import userRouter from "./routers/userRouter"
import videoRouter from "./routers/videoRouter"
//var express = require('express')  이 문법은 Babel에의해 import express from "express" 로 이용가능

var app = express()
app.set("view engine","pug")
app.use(helmet())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan("dev"))

app.use(localsMiddleware);

app.use(routes.home,globalRouter)
app.use(routes.users,userRouter) 
app.use(routes.videos,videoRouter)

export default app