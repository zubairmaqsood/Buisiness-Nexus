import { Router } from "express";
import { createRequest ,getRequest,updateRequestStatus} from "../controllers/requestController.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import isInvestor from "../middlewares/isInvestor.js";
import isEntrepreneur from "../middlewares/isEntreprenuer.js"

const router = Router()


//to create a request only by investor 
router.post("/:id",isLoggedIn,isInvestor,createRequest)

//to fetch all requests for both investor who see their send requests and for entrepreneur who see requests send to them
router.get("/",isLoggedIn,getRequest)

//to update the status of request
router.patch("/:id",isLoggedIn,isEntrepreneur,updateRequestStatus)

export default router 