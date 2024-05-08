import { MongoRepository } from "typeorm";
import { IUserRepository } from "../../domain/repositories/user.repository.interface";
import UserEntity from "../../domain/entities/user.entity";
import { AppDataSource } from "../../../../infra/data/data-source";
import { ObjectId } from "mongodb";
import { QueryResultDTO } from "../dto/query-result.dto";
import IUserModel from "../../domain/models/user.model.interface";

export class UserRepository extends MongoRepository<UserEntity> implements IUserRepository{

  constructor(){
    super(UserEntity, AppDataSource.manager);
  }

  async getAllUsers(): Promise<IUserModel[]> {
    return await this.find();
  }

  async getUserById(idUser: ObjectId): Promise<IUserModel | null> {
    return await  this.findOneBy({
      id: idUser
    });
  }

  async getUserByEmail(emailUser: string): Promise<IUserModel[] | null> {
    return await  this.findBy({
      email: emailUser
    });
  }

  async saveUser(user: UserEntity): Promise<IUserModel> {
    return await this.save(user);
  }

  async deleteUser(idUser: ObjectId): Promise<QueryResultDTO> {
    const result = await this.delete({
      id: idUser
    });

    return {
      affected: result.affected
    }
  }
}
