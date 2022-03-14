import express from "express";
import { login,register} from "../Controller/routeController.js";
const router=express.Router();

//Getting All incomming Routes
router.post('/login',login);
router.post('/register',register);

export default router;