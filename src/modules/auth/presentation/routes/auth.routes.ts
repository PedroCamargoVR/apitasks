import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import AuthenticateUserUseCase from "../../application/use-cases/authenticate-user.usecase";
import { GenerateTokenUseCase } from "../../application/use-cases/generate-token.usecase";
import { UserRepository } from "../../../users/infra/repositories/user.repository";
import { Request, Response } from "express";
import { authInputValidation } from "../../../../shared/validation/auth-input-validate.validation";
import { celebrate } from "celebrate";

const authRouter = Router();
const userRepository = new UserRepository();
const generateTokenUseCase = new GenerateTokenUseCase();
const authenticateUserUseCase =  new AuthenticateUserUseCase(userRepository, generateTokenUseCase);
const authController = new AuthController(authenticateUserUseCase);

authRouter.post("/", celebrate(authInputValidation), (req: Request, res: Response) => authController.authenticate(req,res));

export default authRouter;
