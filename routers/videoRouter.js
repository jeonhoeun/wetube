import express from "express"
import { videoDetail } from "../controllers/videoController"
import { deleteVideo } from "../controllers/videoController"
import { editVideo } from "../controllers/videoController"
import { upload } from "../controllers/videoController"
//import { videos } from "../controllers/videoController"
import routes from "../routes"
const videoRouter = express.Router()
//videoRouter.get(routes.videos, videos)
videoRouter.get(routes.upload, upload)
videoRouter.get(routes.videoDetail, videoDetail)
videoRouter.get(routes.editVideo, editVideo)
videoRouter.get(routes.deleteVideo, deleteVideo)
export default videoRouter