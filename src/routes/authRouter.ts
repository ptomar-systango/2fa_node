import express from "express";
import { authController } from "../controller/authController";

const authRouter = express.Router();

authRouter.post('/generate', authController.generateQr);

export default authRouter;