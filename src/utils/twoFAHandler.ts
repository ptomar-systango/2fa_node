import QrCode from "qrcode";
import speakeasy from 'speakeasy';

class TwoFAHandler {
//   public static async get2FABase64QR(name: string, secret: string) {
//     const link = `otpauth://totp/${name}?secret=${secret}&issuer=Systango`;
//     console.log(await QrCode.toString(link, { type: "terminal" }));
//     return await QrCode.toString(link, { type: "terminal" });
//   }
  async generateQr() {
    const secret = speakeasy.generateSecret();
    const otpAuthUrl = speakeasy.otpauthURL({
      secret: secret.base32,
      label: "pushpay",
      issuer: "pushpay",
    });

    QrCode.toDataURL(otpAuthUrl, (err, data_url) => {
      return { data_url, secret };
    });
  }

  async verify(secret: string, token: string ) {
    const verified = speakeasy.totp.verify({
        secret,
        encoding: "base32",
        token: token,
        window: 1,
      });
      return verified;
  }

}

export const twoFAHandler: TwoFAHandler = new TwoFAHandler();

