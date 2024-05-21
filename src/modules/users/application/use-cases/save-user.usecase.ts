import IUserModel from "../../domain/models/user.model.interface";
import { IUserRepository } from "../../domain/repositories/user.repository.interface";
import UserEntity from "../../domain/entities/user.entity";
import UserInputDTO from "../../presentation/dtos/user-input.dto";
import UserFactory from "../factory/user.factory";

export default class SaveUserUseCase {

  repository: IUserRepository;

  constructor(userRepository: IUserRepository){
    this.repository = userRepository;
  }

  async execute(user: UserInputDTO): Promise<UserEntity>{
    const userEntity: IUserModel = UserFactory.createFromUserInputDto(user);
    return this.repository.saveUser(userEntity);
  }

}
