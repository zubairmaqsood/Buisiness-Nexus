import { Router } from "express";
import { getProfile, updateProfile,getEntrepreneurProfile,getInvestorProfile } from "../controllers/profileController.js";
import isLoggedIn from "../middlewares/isLoggedIn.js"
import isInvestor from "../middlewares/isInvestor.js";
import isEntreprenuer from "../middlewares/isEntreprenuer.js";

const router = Router()

//to get the info of profile
router.get("/profile/:id",isLoggedIn,getProfile)

//to update the profile
router.put("/profile/:id",isLoggedIn,updateProfile)

//for investors to see entrepreneurs profile
router.get("/entrepreneurs",isLoggedIn,isInvestor,getEntrepreneurProfile)

//for entrepreneurs to see investors profile
router.get("/investors",isLoggedIn,isEntreprenuer,getInvestorProfile)

export default router