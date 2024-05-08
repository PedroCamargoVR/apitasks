import { IUserRepository } from "../../domain/repositories/user.repository.interface";
import { UserOutputDTO } from "../dtos/user-output.dto";

export default class GetAllUsersUseCase {
  #userRepository: IUserRepository;

  constructor(userRepo: IUserRepository){
    this.#userRepository = userRepo;
  }

  async execute(): Promise<UserOutputDTO[]> {
    const result = await this.#userRepository.getAllUsers();

    let usuarios: UserOutputDTO[] = [];
    for(let usuario of result){
      usuarios.push({
        id: usuario.getId.toString(),
        name: usuario.getName,
        email: usuario.getEmail,
        role: usuario.getRole,
      });
    }

    return usuarios;
  }
}
