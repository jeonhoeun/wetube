import { reset } from "nodemon"

export const home = (req,res) => res.render("home", {pageTitle:'Home'})
export const search = (req,res) => {
  const {query:{term:searchingBy}} = req;
  console.log(searchingBy)
  res.render("Search",{pageTitle:'Search',searchingBy:searchingBy})
}

export const videos = (req,res) => reset.send("Videos")
export const upload = (req,res) => reset.send("upload")
export const videoDetail = (req,res) => reset.send("videoDetail")
export const editVideo = (req,res) => reset.send("editVideo")
export const deleteVideo = (req,res) => reset.send("deleteVideo")
