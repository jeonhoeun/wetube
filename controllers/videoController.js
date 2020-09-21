import { reset } from "nodemon"

export const home = (req,res) => res.render("home", {pageTitle:'Home'})
export const search = (req,res) => res.send("Search")

export const videos = (req,res) => reset.send("Videos")
export const upload = (req,res) => reset.send("upload")
export const videoDetail = (req,res) => reset.send("videoDetail")
export const editVideo = (req,res) => reset.send("editVideo")
export const deleteVideo = (req,res) => reset.send("deleteVideo")
