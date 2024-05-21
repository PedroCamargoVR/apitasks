import { JwtPayload, verify } from "jsonwebtoken";
import auth from "../../../../config/auth";
import { Unauthorized } from "../../../../shared/http-error/unauthorized";

export default class VerifyTokenUseCase {
  execute(token: string | undefined): void{
    if(!token){
      throw new Unauthorized("JWT is missing.");
    }

    try{
      verify(token.split(" ")[1],auth.signature);
    }catch(e){
      throw new Unauthorized("Invalid JWT.");
    }
  }
}
