import { Request, Response } from "express";
import { AuthenticationDTO } from "../dtos/authentication.dto";
import AuthenticateUserUseCase from "../../application/use-cases/authenticate-user.usecase";

export default class AuthController {

  constructor(private readonly authenticateUserUseCase: AuthenticateUserUseCase){};

  async authenticate(request: Request, response: Response): Promise<Response>{
    const { email, password } = request.body;

    const token = await this.authenticateUserUseCase.execute({email, password});

    return response.status(200).json({
      statusCode: 200,
      message: "User successfully authenticated",
      token
    });
  }

}
