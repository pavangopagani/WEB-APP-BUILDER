import { Router } from "express";
import{registerUser,loginUser,getMe,logout} from '../controllers/auth.controllers.js'


const router=Router()
router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('./me',getMe);
router.post('./logout',logout);


export default router;
