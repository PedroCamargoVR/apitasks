import { Forbidden } from "../../../../shared/http-error/forbidden";
import { IUserRepository } from "../../../users/domain/repositories/user.repository.interface";
import { UserAuthDTO } from "../dtos/user-auth.dto";
import { GenerateTokenUseCase } from "./generate-token.usecase";

export default class AuthenticateUserUseCase {

  constructor(
    private readonly userRepository: IUserRepository,
    private readonly generateTokenUseCase: GenerateTokenUseCase
  ){}

  async execute(userAuthDto: UserAuthDTO): Promise<string>{
    const { email, password } = userAuthDto;

    const user = await this.userRepository.getUserByEmail(email);

    if(!user){
      throw new Forbidden("User or Password is not valid.");
    }

    if(user.getPassword != password){
      throw new Forbidden("User or Password is not valid.");
    }

    const token = this.generateTokenUseCase.execute(user.getId.toString(),{});

    return token;
  }

}
