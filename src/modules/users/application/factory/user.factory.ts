import IUserModel from "../../domain/models/user.model.interface";
import UserEntity from "../../domain/entities/user.entity";
import UserInputDTO from "../../presentation/dtos/user-input.dto";
import { UserOutputDTO } from "../dtos/user-output.dto";

export default class UserFactory{
  static createFromUserInputDto(userInput: UserInputDTO): IUserModel{
    return new UserEntity(
      "",
      userInput.getName,
      userInput.getEmail,
      userInput.getPassword,
      userInput.getRole
    );
  }

  static createOutputDtoFromModel(userModel: IUserModel): UserOutputDTO{
    return {
      id: userModel.getId.toString(),
      name: userModel.getName,
      email: userModel.getEmail,
      role: userModel.getRole
    };
  }

}
