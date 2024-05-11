import { Router } from "express";
import { 
    login,
    register,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,  
    updateUserAvatar
 } from "../controllers/user.controller.js";
 import {verifyJWT} from "../middleware/auth.middleware.js"
 const router = Router()

 router.route("/register").post(register)
 router.route("/login").post(login)

//secured routes
router.route("/logout").post(verifyJWT,  logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/update-account").patch(verifyJWT, updateAccountDetails)
router.route("/avatar").patch(verifyJWT, updateUserAvatar)

export default router