import { ObjectId } from "mongodb";
import { IUserRepository } from "../../domain/repositories/user.repository.interface";
import { BadRequest } from "../../../../infra/http-error/bad-request";
import { TargetNotFound } from "../../../../infra/http-error/target-not-found";

export default class DeleteUserUseCase {

  constructor(private readonly repository: IUserRepository){}

  async execute(id: string): Promise<void>{
    let objectId: ObjectId;
    try{
      objectId = new ObjectId(id);
    }catch(e){
      throw new BadRequest("Invalid ID! Must be a string of 12 bytes or a string of 24 hex characters or an integer");
    }
    const result = await this.repository.deleteUser(objectId);

    if(!result.affected || result.affected <= 0){
      throw new TargetNotFound("User not found =(");
    }

  }
}
