import { Request, Response } from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { twoFAHandler } from "../utils/twoFAHandler";

class AuthService {
    async generateQr(req: Request, res: Response){
        console.log('hello');
        const { userId } = req.body;
        const QrcodeData: any = twoFAHandler.generateQr();
        const { data_url, secret } = QrcodeData;
        return { sucess: true, qrUrl: data_url, secret: secret }
    }
}

export const authService: AuthService = new AuthService();
