import { NextFunction, Request, Response } from "express";
import GetAllUsersUseCase from "../../application/use-cases/get-all-users.usecase";
import SaveUserUseCase from "../../application/use-cases/save-user.usecase";
import { IUserRepository } from "../../domain/repositories/user.repository.interface";
import UserInputDTO from "../dtos/user-input.dto";
import { UserOutputDTO } from "../../application/dtos/user-output.dto";
import UserEntity from "../../domain/entities/user.entity";
import DeleteUserUseCase from "../../application/use-cases/delete-user-usecase";
import GetUserByIdUseCase from "../../application/use-cases/get-user-by-id.usecase";
import GetUserByEmailUseCase from "../../application/use-cases/get-user-by-email.usecase";

export default class UserController {

  constructor(private readonly repository: IUserRepository){}

  async getAllUsers(request: Request, response: Response): Promise<Response>{
    const users: UserOutputDTO[] = await new GetAllUsersUseCase(this.repository).execute();

    return response.status(200).json(users);
  }

  async getUserById(request: Request, response: Response, next: NextFunction): Promise<Response | undefined>{
    const { id } = request.params;
    const user: UserOutputDTO = await new GetUserByIdUseCase(this.repository).execute(id);

    return response.status(200).json(user);
  }

  async getUserByEmail(request: Request, response: Response): Promise<Response>{
    const { email } = request.params;
    const users: UserOutputDTO[] = await new GetUserByEmailUseCase(this.repository).execute(email);
    return response.status(200).json(users);
  }

  async saveUser(request: Request, response: Response): Promise<Response>{
    const { name,email,password,role } = request.body;
    const userInput: UserInputDTO = new UserInputDTO({
      name: name,
      email: email,
      password: password,
      role: role
    });
    const userCreated: UserEntity = await new SaveUserUseCase(this.repository).execute(userInput);

    return response.status(201).json({
      message: "User created successfully!",
      user: userCreated
    });
  }

  async deleteUser(request: Request, response: Response, next: NextFunction): Promise<Response | undefined>{
    const { id } = request.params;
    await new DeleteUserUseCase(this.repository).execute(id);

    return response.status(200).json({
      message: "User deleted successfully!",
      idUserDeleted: id
    });
  }

}
