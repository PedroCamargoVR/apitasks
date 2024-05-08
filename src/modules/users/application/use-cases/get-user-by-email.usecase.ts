import IUserModel from "../../domain/models/user.model.interface";
import { IUserRepository } from "../../domain/repositories/user.repository.interface";
import { UserOutputDTO } from "../dtos/user-output.dto";

export default class GetUserByEmailUseCase{

  constructor(private readonly userRepo: IUserRepository){}

  async execute(email: string): Promise<UserOutputDTO[]>{

    const result: IUserModel[] | null = await this.userRepo.getUserByEmail(email);
    const usersDto: UserOutputDTO[] = [];

    if(!result){
      return usersDto;
    }

    result.forEach((r) => {
      usersDto.push({
        id: r.getId.toString(),
        name: r.getName,
        email: r.getEmail,
        role: r.getRole
      });
    });

    return usersDto;
  }

}
