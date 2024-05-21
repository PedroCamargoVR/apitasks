import { Request, Response, NextFunction } from "express";
import VerifyTokenUseCase from "../../application/use-cases/verify-token.usecase";

export default function(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const headerToken = request.headers.authorization;
  new VerifyTokenUseCase().execute(headerToken);
  next();
}
