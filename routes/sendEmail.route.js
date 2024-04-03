import { Router } from "express";
import { emailController } from "../controllers/email.controller.js";

const router = Router();


router.route("/sendEmail").post(emailController)



export default router