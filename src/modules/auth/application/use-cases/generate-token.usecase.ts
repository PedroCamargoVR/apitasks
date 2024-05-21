import { sign } from "jsonwebtoken";
import auth from "../../../../config/auth";

export class GenerateTokenUseCase{

  execute(idUser: string, payload: {}): string{
    const token = sign(
        payload,
        auth.signature,
        {
          issuer: idUser,
          expiresIn: auth.expiresIn,
        }
    );

    return token;
  }
}
