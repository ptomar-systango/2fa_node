import { Request, Response } from "express";
import { authService } from "../service/authService";

class AuthController {
    async generateQr(req: Request, res: Response) {
        try {
          const finalResponse = await authService.generateQr(req, res);
          console.log(finalResponse);
          res.send(finalResponse);
        } catch (error) {
          console.log(error);
          res.status(500);
          res.send(error);
        }
      }
}

export const authController: AuthController = new AuthController();
