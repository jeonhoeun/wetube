import express from "express"
import { home } from "../controllers/videoController"
import { login } from "../controllers/userController"
import { logout } from "../controllers/userController"
import { join } from "../controllers/userController"
import { search } from "../controllers/videoController"
import routes from "../routes"
const globalRouter = express.Router()
globalRouter.get(routes.home, home)
globalRouter.get(routes.search, search)
globalRouter.get(routes.join, join)
globalRouter.get(routes.login, login)
globalRouter.get(routes.logout, logout)
export default globalRouter