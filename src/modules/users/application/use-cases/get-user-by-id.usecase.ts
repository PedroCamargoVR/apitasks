import { ObjectId } from "mongodb";
import { IUserRepository } from "../../domain/repositories/user.repository.interface";
import { BadRequest } from "../../../../shared/http-error/bad-request";
import { TargetNotFound } from "../../../../shared/http-error/target-not-found";
import UserFactory from "../factory/user.factory";
import { UserOutputDTO } from "../dtos/user-output.dto";

export default class GetUserByIdUseCase {

  constructor(private readonly userRepo: IUserRepository){}

  async execute(id: string): Promise<UserOutputDTO> {
    let objectId: ObjectId;
    try{
      objectId = new ObjectId(id);
    }catch(e){
      throw new BadRequest("Invalid ID! Must be a string of 12 bytes or a string of 24 hex characters or an integer");
    }

    const result = await this.userRepo.getUserById(new ObjectId(id));

    if(!result){
      throw new TargetNotFound("User not found =(");
    }

    return UserFactory.createOutputDtoFromModel(result);
  }
}
