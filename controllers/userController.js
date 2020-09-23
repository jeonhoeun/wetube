import { JSONCookie } from "cookie-parser";
import { reset } from "nodemon";

export const join = (req,res) => res.render("join",{pageTitle:"Join"})
export const login = (req,res) => res.render("Login",{pageTitle:"Login"})
export const logout = (req,res) => res.send("Logout")
export const users = (req,res) => res.send("users")
export const editProfile = (req,res) => res.render("editProfile",{pageTitle:"EditProfile"})
export const userDetail = (req,res) => res.send("userDetail2")
export const changePassword = (req,res) => res.send("changepassword")