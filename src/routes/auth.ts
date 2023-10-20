import { Router, Request, Response } from "express";
import { LoginController, registerController } from "../controllers/auth";

const router = Router();
//** http://localhost:3002/auth/register [POST] */
router.post("/login", LoginController);
router.post("/register", registerController);


export { router };
